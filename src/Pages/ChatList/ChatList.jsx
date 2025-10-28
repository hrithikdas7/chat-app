import { useEffect, useState } from "react";
import { connectSocket, disconnectSocket, socket } from "../../socket";
import ChatSidebar from "../../componnents/ChatSideBar/ChatSideBar";
import ChatWindow from "../../componnents/ChatWindow/ChatWindow";


const ChatList = () => {
  const [selectedChatId, setSelectedChatId] = useState(null);
  const [chats, setChats] = useState([
    {
      id: 1,
      name: "Sarah Wilson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      lastMessage: "Hey! Did you see the latest update?",
      time: "14:32",
      unread: 2,
      online: true,
      pinned: true,
      messages: [
        { id: 1, text: "Hey Sarah!", time: "14:20", sent: true, read: true },
        { id: 2, text: "How are you doing?", time: "14:21", sent: true, read: true },
        { id: 3, text: "Hey! Did you see the latest update?", time: "14:32", sent: false, read: false },
      ],
    },
    {
      id: 2,
      name: "Dev Team",
      avatar: "https://api.dicebear.com/7.x/initials/svg?seed=DT&backgroundColor=3b82f6",
      lastMessage: "John: The deployment is complete",
      time: "13:15",
      unread: 0,
      online: false,
      pinned: true,
      messages: [
        { id: 1, text: "Morning team!", time: "09:00", sent: true, read: true },
        { id: 2, text: "John: The deployment is complete", time: "13:15", sent: false, read: true },
      ],
    },
  ]);

  const selectedChat = chats.find((c) => c.id === selectedChatId);

  // Connect socket on mount
  useEffect(() => {
    const token = localStorage.getItem("token") || "mock-token";
    connectSocket(token);

    // Listen for messages
    socket.on("receiveMessage", (data) => {
      console.log("📩 Received new message:", data);

      // Update the chat's messages in state
      setChats((prev) =>
        prev.map((chat) =>
          chat.id === data.chatId
            ? {
                ...chat,
                messages: [...chat.messages, data],
                lastMessage: data.text,
                time: data.time,
              }
            : chat
        )
      );
    });

    return () => {
      socket.off("receiveMessage");
      disconnectSocket();
    };
  }, []);

  return (
    <div className="flex h-screen bg-gray-50">
      <ChatSidebar
        chats={chats}
        selectedChatId={selectedChatId}
        onSelectChat={setSelectedChatId}
      />
      <ChatWindow chat={selectedChat} messages={selectedChat?.messages || []} />
    </div>
  );
};

export default ChatList;
