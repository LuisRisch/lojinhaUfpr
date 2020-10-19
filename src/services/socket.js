import socketIO from "socket.io-client";

const io = socketIO("http://192.168.25.24:3434");

export default io;
