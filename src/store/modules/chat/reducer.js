import { produce } from "immer";

const INITIAL_STATE = {
  messages: [],
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case "@chat/SAVE_CURRENT": {
        const { data } = action.payload;

        draft.messages = data;
        break;
      }
      case "@chat/MESSAGE": {
        const { data } = action.payload;

        draft.messages.splice(0, 0, data);
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
