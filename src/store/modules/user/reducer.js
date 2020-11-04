import { produce } from "immer";

const INITIAL_STATE = {
  data: {},
  signed: false,
  token: "",
  expoToken: "",
  rememberPassword: false,
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case "@user/SIGN_IN": {
        const { token } = action.payload.user;
        draft.data = { ...action.payload.user };
        draft.signed = true;
        draft.token = token;
        break;
      }
      case "@user/SIGN_OUT": {
        draft.data = {};
        draft.signed = false;
        break;
      }
      case "@user/REMEMBER": {
        draft.rememberPassword = !draft.rememberPassword;
        break;
      }
      case "@user/REFRESH_INFO": {
        draft.data = { ...action.payload.user };
        break;
      }
      case "@user/UPDATE_EXPO_TOKEN": {
        draft.expoToken = action.payload.expoToken;
      }
      default:
    }
  });
}
