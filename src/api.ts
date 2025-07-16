import { Chat, Message, User } from './types';

const mockUser: User = { id: '1', name: 'You' };
const mockUsers: User[] = [
  { id: '2', name: 'Alice' },
  { id: '3', name: 'Bob' },
  { id: '4', name: 'Charlie' },
  { id: '5', name: 'Diana' },
];

let chats: Chat[] = [
  {
    id: 'chat-1',
    name: 'General',
    messages: [
      {
        id: 'msg-1',
        chatId: 'chat-1',
        user: mockUsers[0],
        content: 'Welcome to General chat!',
        timestamp: Date.now() - 300000,
      },
      {
        id: 'msg-2',
        chatId: 'chat-1',
        user: mockUser,
        content: 'Thanks Alice!',
        timestamp: Date.now() - 240000,
      },
      {
        id: 'msg-3',
        chatId: 'chat-1',
        user: mockUsers[1],
        content: 'Hey everyone! 👋',
        timestamp: Date.now() - 180000,
      },
      {
        id: 'msg-4',
        chatId: 'chat-1',
        user: mockUsers[2],
        content: 'How is everyone doing today?',
        timestamp: Date.now() - 120000,
      },
    ],
  },
  {
    id: 'chat-2',
    name: 'Project Team',
    messages: [
      {
        id: 'msg-5',
        chatId: 'chat-2',
        user: mockUsers[3],
        content: 'Meeting at 3 PM today',
        timestamp: Date.now() - 600000,
      },
      {
        id: 'msg-6',
        chatId: 'chat-2',
        user: mockUser,
        content: 'Got it, I\'ll be there',
        timestamp: Date.now() - 540000,
      },
    ],
  },
];

export function getChats(): Promise<Chat[]> {
  return Promise.resolve([...chats]);
}

export function createChat(name: string): Promise<Chat> {
  const newChat: Chat = {
    id: `chat-${Date.now()}`,
    name,
    messages: [],
  };
  chats.push(newChat);
  return Promise.resolve(newChat);
}

export function deleteChat(chatId: string): Promise<void> {
  chats = chats.filter((c) => c.id !== chatId);
  return Promise.resolve();
}

export function sendMessage(chatId: string, content: string): Promise<Message> {
  const chat = chats.find((c) => c.id === chatId);
  if (!chat) throw new Error('Chat not found');
  const message: Message = {
    id: `msg-${Date.now()}`,
    chatId,
    user: mockUser,
    content,
    timestamp: Date.now(),
  };
  chat.messages.push(message);
  return Promise.resolve(message);
}

export function getCurrentUser(): User {
  return mockUser;
} 