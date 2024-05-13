import { configureStore } from "@reduxjs/toolkit";

import { thunk } from "redux-thunk";
import { persistReducer, persistStore } from "redux-persist";
import reducers from "./reduces";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: () => [thunk],
});

export const persistor = persistStore(store);
