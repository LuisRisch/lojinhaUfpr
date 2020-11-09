import { combineReducers } from "redux";

import user from "./user/reducer";
import chat from "./chat/reducer";
import excludedData from "./excludedData/reducer";

export default combineReducers({
  user,
  chat,
  excludedData,
});
