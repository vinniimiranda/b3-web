import socket from "socket.io-client";

const io = socket("https://b3-backend.herokuapp.com/");
export default io;
