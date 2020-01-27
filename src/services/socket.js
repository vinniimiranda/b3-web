import socket from "socket.io-client";

const io = socket("wss://b3-backend.herokuapp.com/");
export default io;
