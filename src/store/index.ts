import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import moviesReducer from "./moviesSlice";

const persistConfig = {
  key: "movies",
  storage,
};

const persistentReducer = persistReducer(persistConfig, moviesReducer);

export const store = configureStore({
  reducer: { movies: persistentReducer },
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
