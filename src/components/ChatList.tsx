import React from 'react';
import { Chat } from '../types';

interface ChatListProps {
  chats: Chat[];
  selectedChatId: string | null;
  onSelect: (chatId: string) => void;
  onCreate: (name: string) => void;
  onDelete: (chatId: string) => void;
}

const ChatList: React.FC<ChatListProps> = ({ chats, selectedChatId, onSelect, onCreate, onDelete }) => {
  const [newChatName, setNewChatName] = React.useState('');

  const handleCreate = () => {
    if (newChatName.trim()) {
      onCreate(newChatName.trim());
      setNewChatName('');
    }
  };

  return (
    <div className="chat-list">
      <h2>Chats</h2>
      <ul>
        {chats.map((chat) => (
          <li
            key={chat.id}
            className={chat.id === selectedChatId ? 'selected' : ''}
            onClick={() => onSelect(chat.id)}
          >
            {chat.name}
            <button onClick={e => { e.stopPropagation(); onDelete(chat.id); }} title="Delete chat">
              <span role="img" aria-label="Delete">🗑️</span>
            </button>
          </li>
        ))}
      </ul>
      <div className="new-chat">
        <input
          type="text"
          value={newChatName}
          onChange={e => setNewChatName(e.target.value)}
          placeholder="New chat name"
        />
        <button onClick={handleCreate}>Create</button>
      </div>
    </div>
  );
};

export default ChatList; 