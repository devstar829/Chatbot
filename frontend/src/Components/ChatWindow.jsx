import React, { useEffect, useRef } from 'react';

const ChatWindow = ({ messages, isTyping }) => {
  const chatEndRef = useRef(null);

  // Scroll to the bottom when messages change
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  return (
    <div className="h-96 overflow-y-auto p-4 bg-gray-50 rounded-xl shadow-md border border-gray-300">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`flex items-end ${message.sender === 'user' ? 'justify-end' : 'justify-start'
            } mb-4`}
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
            className={`px-4 py-3 rounded-3xl max-w-sm text-sm ${message.sender === 'user'
              ? 'bg-blue-600 text-white rounded-br-none'
              : 'bg-gray-100 text-gray-800 rounded-bl-none'
              }`}
          >
            {message.text}
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
        <div className="flex items-end justify-start mb-4">
          <img
            src="https://cdn.icon-icons.com/icons2/1371/PNG/512/robot02_90810.png"
            alt="Bot Avatar"
            className="w-8 h-8 rounded-full mr-2"
          />
          <div className="px-4 py-3 rounded-3xl max-w-sm bg-gray-100 text-gray-800 flex items-center gap-2">
            <img
              src="https://media.tenor.com/On7kvXhzml4AAAAj/typing.gif"
              alt="Typing Indicator"
              className="w-8"
            />
          </div>
        </div>
      )}
      <div ref={chatEndRef} />
    </div>
  );
};

export default ChatWindow;