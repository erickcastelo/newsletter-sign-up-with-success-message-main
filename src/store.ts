import { configureStore } from "@reduxjs/toolkit";
import { emailReducer } from "./components/redux/email-slice";

export const store = configureStore({
  reducer: {
    email: emailReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
