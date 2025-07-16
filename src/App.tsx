import React from 'react';
import './App.css';
import { Chat } from './types';
import { getChats, createChat, deleteChat, sendMessage } from './api';
import ChatList from './components/ChatList';
import ChatWindow from './components/ChatWindow';
import MessageInput from './components/MessageInput';

const App: React.FC = () => {
  const [chats, setChats] = React.useState<Chat[]>([]);
  const [selectedChatId, setSelectedChatId] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    getChats().then((data) => {
      setChats(data);
      if (data.length > 0) setSelectedChatId(data[0].id);
      setLoading(false);
    });
  }, []);

  const handleSelectChat = (chatId: string) => setSelectedChatId(chatId);

  const handleCreateChat = async (name: string) => {
    const newChat = await createChat(name);
    setChats((prev) => [...prev, newChat]);
    setSelectedChatId(newChat.id);
  };

  const handleDeleteChat = async (chatId: string) => {
    if (window.confirm('Delete this chat?')) {
      await deleteChat(chatId);
      setChats((prev) => prev.filter((c) => c.id !== chatId));
      setSelectedChatId((prev) => (prev === chatId ? chats[0]?.id || null : prev));
    }
  };

  const handleSendMessage = async (content: string) => {
    if (!selectedChatId) return;
    const msg = await sendMessage(selectedChatId, content);
    setChats((prev) =>
      prev.map((chat) =>
        chat.id === selectedChatId
          ? { ...chat, messages: [...chat.messages, msg] }
          : chat
      )
    );
  };

  const selectedChat = chats.find((c) => c.id === selectedChatId) || null;

  return (
    <>
      <div className="app-header">Chat App</div>
      <div className="app-container">
        <ChatList
          chats={chats}
          selectedChatId={selectedChatId}
          onSelect={handleSelectChat}
          onCreate={handleCreateChat}
          onDelete={handleDeleteChat}
        />
        <div className="chat-section">
          <ChatWindow chat={selectedChat} />
          <MessageInput onSend={handleSendMessage} disabled={!selectedChatId} />
        </div>
      </div>
    </>
  );
};

export default App;
