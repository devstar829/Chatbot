import React, { useState } from 'react';

const MessageInput = ({ sendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSendClick = () => {
    if (message.trim()) {
      sendMessage(message);
      setMessage(''); // Clear the input field after sending
    }
  };

  const handleEnterKey = (e) => {
    if (e.key === 'Enter' && message.trim()) {
      sendMessage(message);
      setMessage(''); // Clear the input field after sending
    }
  };

  return (
    <div className="flex items-center gap-4 mt-4 bg-white p-4 rounded-xl shadow-md border border-gray-300">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleEnterKey}
        className="flex-1 p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 text-gray-800"
        placeholder="Type your message..."
      />
      <button
        onClick={handleSendClick}
        className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition duration-200"
      >
        Send
      </button>
    </div>
  );
};

export default MessageInput;