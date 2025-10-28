import { io } from "socket.io-client";

// If backend not provided yet, leave placeholder
// You can replace this later with actual backend URL
const SOCKET_URL = "http://localhost:5000"; // or your backend URL

export const socket = io(SOCKET_URL, {
  autoConnect: false, // connect only after login (recommended)
});

export const connectSocket = (token) => {
  if (token) {
    socket.auth = { token };
    socket.connect();
  }
};

export const disconnectSocket = () => {
  if (socket.connected) socket.disconnect();
};
