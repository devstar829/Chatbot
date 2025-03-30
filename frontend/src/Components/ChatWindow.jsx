import React, { useEffect, useRef } from 'react';

const ChatWindow = ({ messages, isTyping }) => {
  const chatEndRef = useRef(null);

  // Scroll to the bottom when messages change
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  return (
    <div className="flex-1 overflow-y-auto p-4 bg-gray-100 dark:bg-gray-800  shadow-md border border-gray-300 dark:border-gray-700">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`flex items-end ${
            message.sender === 'user' ? 'justify-end' : 'justify-start'
          } mb-4 fade-in`}
        >
          {/* Avatar */}
          {message.sender === 'bot' && (
            <img
              src="https://cdn.icon-icons.com/icons2/1371/PNG/512/robot02_90810.png"
              alt="Bot Avatar"
              className="w-8 h-8 rounded-full mr-2"
            />
          )}
          <div
            className={`px-4 py-2 rounded-3xl max-w-xs text-sm shadow ${
              message.sender === 'user'
                ? 'bg-blue-500 text-white rounded-br-none'
                : 'bg-gray-200 dark:bg-gray-700 dark:text-gray-100 text-gray-800 rounded-bl-none'
            }`}
          >
            <p>{message.text}</p>
            <span className="text-xs text-white block mt-1">
              {message.timestamp}
            </span>
          </div>
          {/* User Avatar */}
          {message.sender === 'user' && (
            <img
              src="https://i.pravatar.cc/100?img=7"
              alt="User Avatar"
              className="w-8 h-8 rounded-full ml-2"
            />
          )}
        </div>
      ))}

      {/* Typing Indicator */}
      {isTyping && (
        <div className="flex justify-center items-center mb-4 fade-in">
          <div className="flex items-center space-x-1">
            <svg
              className="w-2 h-2 text-gray-500 dark:text-gray-400 animate-bounce"
              fill="currentColor"
              viewBox="0 0 8 8"
            >
              <circle cx="4" cy="4" r="3" />
            </svg>
            <svg
              className="w-2 h-2 text-gray-500 dark:text-gray-400 animate-bounce delay-200"
              fill="currentColor"
              viewBox="0 0 8 8"
            >
              <circle cx="4" cy="4" r="3" />
            </svg>
            <svg
              className="w-2 h-2 text-gray-500 dark:text-gray-400 animate-bounce delay-400"
              fill="currentColor"
              viewBox="0 0 8 8"
            >
              <circle cx="4" cy="4" r="3" />
            </svg>
          </div>
        </div>
      )}

      {/* Scroll to the bottom */}
      <div ref={chatEndRef} />
    </div>
  );
};

export default ChatWindow;