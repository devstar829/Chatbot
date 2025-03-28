import React, { useState } from 'react';
import ChatWindow from './components/ChatWindow';
import MessageInput from './components/MessageInput';

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = (text) => {
    setMessages([...messages, { text, sender: 'user' }]);
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: 'This is a bot response!', sender: 'bot' },
      ]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center p-6"
      style={{
        backgroundImage: "url('https://source.unsplash.com/1600x900/?technology,chat')",
      }}
    >
      <h1 className="text-3xl font-bold text-white mb-8 shadow-md bg-blue-600 bg-opacity-80 px-6 py-3 rounded-lg">
        Hi! Welcome to the Chatbot
      </h1>

      <div className="w-full max-w-lg bg-white bg-opacity-90 rounded-xl shadow-lg p-6">
        <ChatWindow messages={messages} isTyping={isTyping} />
        <MessageInput sendMessage={sendMessage} />
      </div>
    </div>
  );
};

export default ChatApp;
