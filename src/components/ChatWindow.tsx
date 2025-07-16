import React from 'react';
import { Chat } from '../types';
import Message from './Message';
import { AnimatePresence } from 'framer-motion';
import { getCurrentUser } from '../api';

interface ChatWindowProps {
  chat: Chat | null;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ chat }) => {
  const messagesEndRef = React.useRef<HTMLDivElement>(null);
  const currentUser = getCurrentUser();

  React.useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chat]);

  if (!chat) {
    return <div className="chat-window empty">Select a chat to start messaging.</div>;
  }

  return (
    <div className="chat-window">
      <h2>{chat.name}</h2>
      <div className="messages">
        <AnimatePresence initial={false}>
          {chat.messages.map((msg) => (
            <Message 
              key={msg.id} 
              message={msg} 
              isOwn={msg.user.id === currentUser.id} 
            />
          ))}
        </AnimatePresence>
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};

export default ChatWindow; 