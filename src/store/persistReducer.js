import { persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-community/async-storage";

export default (reducers) => {
  const presistedReducer = persistReducer(
    {
      key: "lojinha",
      storage: AsyncStorage,
      whitelist: ["user", "excludedData", "categories"],
    },
    reducers
  );
  return presistedReducer;
};
