import React from 'react';
import { Message as MessageType } from '../types';
import { motion } from 'framer-motion';

interface MessageProps {
  message: MessageType;
  isOwn?: boolean;
}

const Message: React.FC<MessageProps> = ({ message, isOwn = true }) => {
  const date = new Date(message.timestamp);
  return (
    <motion.div
      className={`message${isOwn ? '' : ' other'}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.4, type: 'spring', bounce: 0.2 }}
      layout
    >
      <div className="meta">
        <span className="user">{message.user.name}</span>
        <span className="time">{date.toLocaleTimeString()}</span>
      </div>
      <div className="content">{message.content}</div>
    </motion.div>
  );
};

export default Message; 