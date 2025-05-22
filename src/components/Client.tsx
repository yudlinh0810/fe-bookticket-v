// client.jsx hoặc client.tsx
import { io } from "socket.io-client";
import { getAccessToken } from "../utils/auth";

const socket = io(` https://${import.meta.env.VITE_API_URL}.ngrok-free.app`);

socket.on("connect", () => {
  const userId = getAccessToken();
  socket.emit("register_user", userId);
});
