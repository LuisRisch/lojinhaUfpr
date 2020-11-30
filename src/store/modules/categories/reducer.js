import { produce } from "immer";

const INITIAL_STATE = {
  data: [],
};

export default function categories(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case "@categories/REFRESH": {
        draft.data = action.payload.categories;
        break;
      }
      default:
    }
  });
}
