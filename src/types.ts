export type User = {
  id: string;
  name: string;
};

export type Message = {
  id: string;
  chatId: string;
  user: User;
  content: string;
  timestamp: number;
};

export type Chat = {
  id: string;
  name: string;
  messages: Message[];
}; 