import { produce } from "immer";

const INITIAL_STATE = {
  data: {},
  signed: false,
  token: "",
  rememberPassword: false,
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case "@user/SIGN_IN": {
        const { token, cpf, email, id, name, avatar } = action.payload.user;
        draft.data = { cpf, email, id, name, avatar };
        draft.signed = true;
        draft.token = token;
        break;
      }
      case "@user/SIGN_OUT": {
        draft.data = [];
        draft.signed = false;
        break;
      }
      case "@user/REMEMBER": {
        draft.rememberPassword = !draft.rememberPassword;
        break;
      }
      default:
    }
  });
}
