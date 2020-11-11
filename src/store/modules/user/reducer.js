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
        draft.rememberPassword = false;
        draft.token = "";
        draft.expoToken = "";
        break;
      }
      case "@user/REMEMBER": {
        draft.rememberPassword = !draft.rememberPassword;
        break;
      }
      case "@user/REFRESH": {
        const { name, email, avatar } = action.payload.user;

        draft.data.name = name || draft.data.name;
        draft.data.email = email || draft.data.email;
        draft.data.avatar = avatar.url ? avatar : draft.data.avatar;
        break;
      }
      case "@user/UPDATE_EXPO_TOKEN": {
        draft.expoToken = action.payload.expoToken;
      }
      default:
    }
  });
}
