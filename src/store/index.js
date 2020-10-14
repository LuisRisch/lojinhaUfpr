import { createStore } from "redux";
import { persistStore } from "redux-persist";
import reducers from "./modules/rootReducer";

import persistReducers from "./persistReducer";

const store = __DEV__
  ? createStore(persistReducers(reducers))
  : createStore(reducers);

const persistor = persistStore(store);

export { store, persistor };
