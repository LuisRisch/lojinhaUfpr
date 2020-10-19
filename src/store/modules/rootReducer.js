import { combineReducers } from "redux";

import user from "./user/reducer";
import chat from "./chat/reducer";

export default combineReducers({
  user,
  chat,
});
