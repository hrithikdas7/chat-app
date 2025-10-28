import React, { useState } from 'react';
import { Search, Phone, MoreVertical, Smile, Paperclip, Mic, Send, Check, CheckCheck } from 'lucide-react';

const ChatWindow = ({ chat, messages }) => {
  const [message, setMessage] = useState('');

  if (!chat) {
    return (
      <div className="flex-1 flex items-center justify-center text-gray-400">
        Select a chat to start messaging
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col">
      {/* Chat Header */}
      <div className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={chat.avatar}
            alt={chat.name}
            className="w-10 h-10 rounded-full"
          />
          <div className="ml-3">
            <h2 className="font-semibold text-gray-900">{chat.name}</h2>
            <p className="text-xs text-gray-500">
              {chat.online ? 'online' : 'last seen recently'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Search size={20} className="text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Phone size={20} className="text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <MoreVertical size={20} className="text-gray-600" />
          </button>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
        <div className="space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sent ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-md px-4 py-2 rounded-2xl ${
                  msg.sent
                    ? 'bg-blue-500 text-white rounded-br-sm'
                    : 'bg-white text-gray-900 rounded-bl-sm'
                }`}
              >
                <p className="text-sm">{msg.text}</p>
                <div
                  className={`flex items-center justify-end gap-1 mt-1 text-xs ${
                    msg.sent ? 'text-blue-100' : 'text-gray-500'
                  }`}
                >
                  <span>{msg.time}</span>
                  {msg.sent &&
                    (msg.read ? <CheckCheck size={14} /> : <Check size={14} />)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Message Input */}
      <div className="bg-white border-t border-gray-200 p-4">
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Paperclip size={20} className="text-gray-600" />
          </button>

          <div className="flex-1 relative">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message"
              className="w-full px-4 py-2 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-200 rounded-full">
              <Smile size={20} className="text-gray-600" />
            </button>
          </div>

          {message ? (
            <button className="p-2 bg-blue-500 hover:bg-blue-600 rounded-full">
              <Send size={20} className="text-white" />
            </button>
          ) : (
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Mic size={20} className="text-gray-600" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
