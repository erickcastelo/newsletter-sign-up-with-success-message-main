import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = "";

export const emailSlice = createSlice({
  name: "email",
  initialState,
  reducers: {
    get: (state) => {
      return state;
    },
    update: (state, action: PayloadAction<string>) => {
      return (state = action.payload);
    },
    reset: () => {
      return initialState;
    },
  },
});

export const { get, update, reset } = emailSlice.actions;
export const emailReducer = emailSlice.reducer;
