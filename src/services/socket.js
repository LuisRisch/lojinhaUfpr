import socketIO from "socket.io-client";
import { store } from "../store";
import { newMessage } from "../store/modules/chat/actions";

const io = socketIO("http://192.168.25.38:3434");

const state = store.getState();

const chat = state.chat;

io.on("connect", () => {
  io.on("receivedMessage", (data) => {
    const currentDate = new Date().getTime();

    const obj = {
      id: currentDate.toString(),
      room: data.room,
      content: data.message,
      sent_by: data.sent_by,
    };
    store.dispatch(newMessage(obj));
  });
});

export { io };
