import { produce } from "immer";

const INITIAL_STATE = {
  user_id: "",
  chats: [],
  products: [],
};

export default function excludedData(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case "@exclude/REGISTER_USER": {
        draft.user_id = action.payload.user_id;
        break;
      }
      case "@exclude/PRODUCT": {
        console.log(draft.products);
        const { id, title } = action.payload;
        draft.products.push({ id, title });
        break;
      }
      case "@exclude/CHAT": {
        const { id, lastMessage } = action.payload;
        console.log({ id, lastMessage });
        draft.chats.push({ id, lastMessage });
        break;
      }
      case "@exclude/RESTORE_PRODUCT": {
        const index = draft.products.findIndex(
          (item) => item.id === action.payload.id
        );
        if (index >= 0) {
          draft.products.splice(index, 1);
        }
        break;
      }
      case "@exclude/RESTORE_CHAT": {
        const index = draft.chats.findIndex(
          (item) => item.id === action.payload.id
        );
        if (index >= 0) {
          draft.chats.splice(index, 1);
        }
        break;
      }
      case "@exclude/RESET": {
        draft.chats = [];
        draft.products = [];
        draft.user_id = "";
        break;
      }
      default:
    }
  });
}
