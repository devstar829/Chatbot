import React, { useState } from 'react';
import ChatWindow from './components/ChatWindow';
import MessageInput from './components/MessageInput';
import { checkHealth, sendChatMessage } from './apis/chatAPI';

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = async (text) => {
    if (!text.trim()) return;

    const timestamp = new Date().toLocaleString();

    // Add user message to the chat
    setMessages((prev) => [
      ...prev,
      { text, sender: 'user', timestamp },
    ]);

    setIsTyping(true);

    try {
      // Check backend health
      const healthData = await checkHealth();
      if (healthData.status !== "ok") {
        throw new Error("Backend is not healthy");
      }

      // Send user message to the backend
      const data = await sendChatMessage(text);

      // Check if the robot is busy
      if (data.response === "Robot is busy now, try later, sorry") {
        throw new Error("Robot is busy");
      }

      // Add bot response to the chat
      const botTimestamp = new Date().toLocaleString();
      setMessages((prev) => [
        ...prev,
        { text: data.response, sender: 'bot', timestamp: botTimestamp },
      ]);
    } catch (error) {
      console.error("Error communicating with the backend:", error);

      // Add error message from the bot
      setMessages((prev) => [
        ...prev,
        {
          text:
            error.message === "Robot is busy"
              ? "Robot is busy now, try later, sorry"
              : "Something went wrong. Please try again later.",
          sender: 'bot',
          timestamp: new Date().toLocaleString(),
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div
      className="flex flex-col h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
      role="main"
      aria-label="Chat Application"
    >
      {/* Header */}
      <header
        className="bg-blue-600 dark:bg-gray-800 text-white py-4 px-6 flex justify-between items-center"
        role="banner"
        aria-label="Chatbot Header"
      >
        <h1 className="text-2xl font-bold">Chatbot 😎 Collective[i]</h1>
      </header>

      {/* Chat Window */}
      <ChatWindow messages={messages} isTyping={isTyping} />

      {/* Input Box */}
      <div className="flex-shrink-0" role="form" aria-label="Message Input">
        <MessageInput sendMessage={sendMessage} />
      </div>
    </div>
  );
};

export default ChatApp;