import React, { useState } from 'react';
import { Search, Menu, Phone, MoreVertical, Smile, Paperclip, Mic, Send, Check, CheckCheck, Pin } from 'lucide-react';

const ChatList = () => {
  const [selectedChat, setSelectedChat] = useState(0);
  const [message, setMessage] = useState('');

  const chats = [
    {
      id: 1,
      name: 'Sarah Wilson',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
      lastMessage: 'Hey! Did you see the latest update?',
      time: '14:32',
      unread: 2,
      online: true,
      pinned: true
    },
    {
      id: 2,
      name: 'Dev Team',
      avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=DT&backgroundColor=3b82f6',
      lastMessage: 'John: The deployment is complete',
      time: '13:15',
      unread: 0,
      online: false,
      pinned: true
    },
    {
      id: 3,
      name: 'Alex Chen',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
      lastMessage: 'Thanks for your help!',
      time: '12:48',
      unread: 0,
      online: true,
      pinned: false
    },
    {
      id: 4,
      name: 'Design Review',
      avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=DR&backgroundColor=8b5cf6',
      lastMessage: 'Emma: Love the new mockups 🎨',
      time: '11:20',
      unread: 5,
      online: false,
      pinned: false
    },
    {
      id: 5,
      name: 'Mike Johnson',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike',
      lastMessage: 'See you at the meeting',
      time: 'Yesterday',
      unread: 0,
      online: false,
      pinned: false
    },
    {
      id: 6,
      name: 'Marketing Team',
      avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=MT&backgroundColor=ec4899',
      lastMessage: 'Campaign results are in!',
      time: 'Yesterday',
      unread: 0,
      online: false,
      pinned: false
    }
  ];

  const messages = [
    {
      id: 1,
      text: 'Hey! How are you doing?',
      time: '14:20',
      sent: false,
      read: true
    },
    {
      id: 2,
      text: "I'm doing great! Just finished the new feature",
      time: '14:25',
      sent: true,
      read: true
    },
    {
      id: 3,
      text: 'That sounds amazing! Can you show me?',
      time: '14:26',
      sent: false,
      read: true
    },
    {
      id: 4,
      text: 'Sure! Let me share some screenshots with you',
      time: '14:28',
      sent: true,
      read: true
    },
    {
      id: 5,
      text: 'The UI looks really polished now',
      time: '14:30',
      sent: true,
      read: true
    },
    {
      id: 6,
      text: 'Hey! Did you see the latest update?',
      time: '14:32',
      sent: false,
      read: false
    }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-96 bg-white border-r border-gray-200 flex flex-col">
        {/* Sidebar Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Menu size={24} className="text-gray-600" />
            </button>
            <div className="text-lg font-semibold text-gray-800">Chats</div>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <MoreVertical size={24} className="text-gray-600" />
            </button>
          </div>
          
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Chat List */}
        <div className="flex-1 overflow-y-auto">
          {chats.map((chat, index) => (
            <div
              key={chat.id}
              onClick={() => setSelectedChat(index)}
              className={`flex items-center p-4 cursor-pointer hover:bg-gray-50 transition ${
                selectedChat === index ? 'bg-blue-50' : ''
              }`}
            >
              <div className="relative">
                <img
                  src={chat.avatar}
                  alt={chat.name}
                  className="w-12 h-12 rounded-full"
                />
                {chat.online && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                )}
              </div>
              
              <div className="ml-3 flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-gray-900 truncate">{chat.name}</h3>
                    {chat.pinned && <Pin size={14} className="text-gray-400" />}
                  </div>
                  <span className="text-xs text-gray-500">{chat.time}</span>
                </div>
                <div className="flex items-center justify-between mt-1">
                  <p className="text-sm text-gray-600 truncate">{chat.lastMessage}</p>
                  {chat.unread > 0 && (
                    <span className="ml-2 bg-blue-500 text-white text-xs rounded-full px-2 py-0.5 min-w-[20px] text-center">
                      {chat.unread}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={chats[selectedChat].avatar}
              alt={chats[selectedChat].name}
              className="w-10 h-10 rounded-full"
            />
            <div className="ml-3">
              <h2 className="font-semibold text-gray-900">{chats[selectedChat].name}</h2>
              <p className="text-xs text-gray-500">
                {chats[selectedChat].online ? 'online' : 'last seen recently'}
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
                  <div className={`flex items-center justify-end gap-1 mt-1 text-xs ${
                    msg.sent ? 'text-blue-100' : 'text-gray-500'
                  }`}>
                    <span>{msg.time}</span>
                    {msg.sent && (
                      msg.read ? (
                        <CheckCheck size={14} />
                      ) : (
                        <Check size={14} />
                      )
                    )}
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
    </div>
  );
};

export default ChatList;