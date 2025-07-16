# Chat Frontend Assignment

This is a simple chat interface built with React and TypeScript. It allows you to create, delete, and chat in multiple chats, similar to MS Teams/Slack/WhatsApp (frontend only, no backend).

## Features
- Create and delete chats
- Send, receive, and display messages in a chat
- Each message shows user, timestamp, and content
- All state is in-memory (cleared on reload)

## How to Run

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start the development server:**
   ```bash
   npm start
   ```
3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Extensibility
- The code is structured for easy extension (e.g., adding group chats or channels).

## Technologies
- React (with hooks)
- TypeScript
- CSS for styling

---

**Note:** There is no backend. All data is lost on page reload, as expected for this assignment.
