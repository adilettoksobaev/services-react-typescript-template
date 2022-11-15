import { configureStore } from "@reduxjs/toolkit";
import { appApi } from "./app/app.api";
import { setupListeners } from "@reduxjs/toolkit/query";
import { appReducer } from "./app/app.slice";

export const store = configureStore({
  reducer: {
    [appApi.reducerPath]: appApi.reducer,
    app: appReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(appApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
