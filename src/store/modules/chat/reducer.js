import { produce } from "immer";

const INITIAL_STATE = {
  messages: [],
  id: "",
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case "@chat/SAVE_CURRENT": {
        const { data, id } = action.payload;

        draft.id = id;
        draft.messages = data;
        break;
      }
      case "@chat/MESSAGE": {
        const { data } = action.payload;
        console.log(data);

        console.log("Room: " + data.room);
        console.log("ID: " + draft.id);

        if (draft.id == data.room) {
          draft.messages.splice(0, 0, data);
        }
        break;
      }
      case "@chat/LEAVE": {
        draft.messages = [];
        break;
      }
      default:
    }
  });
}
