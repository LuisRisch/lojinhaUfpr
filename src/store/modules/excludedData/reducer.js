import { produce } from "immer";

const INITIAL_STATE = {
  user_id: "",
  chats: [],
  products: [],
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case "@exclude/REGISTER_USER": {
        draft.user_id = action.payload.user_id;
        break;
      }
      case "@exclude/PRODUCT": {
        draft.products.push(action.payload.id);
        break;
      }
      case "@exclude/CHAT": {
        draft.chats.push(action.payload.id);
        break;
      }
      case "@exclude/RESTORE_PRODUCT": {
        const index = draft.products.findIndex(
          (id) => id === action.payload.id
        );
        if (index >= 0) {
          draft.products.splice(index, 1);
        }
        break;
      }
      case "@exclude/RESTORE_CHAT": {
        const index = draft.chats.findIndex((id) => id === action.payload.id);
        if (index >= 0) {
          draft.chats.splice(index, 1);
        }
        break;
      }
      case "@exclude/RESET": {
        draft.chats = [];
        draft.passwords = [];
        draft.user_id = "";
        break;
      }
      default:
    }
  });
}
