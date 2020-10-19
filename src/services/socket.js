import socketIO from "socket.io-client";

const io = socketIO("http://10.0.3.2.24:3434");

export default io;
