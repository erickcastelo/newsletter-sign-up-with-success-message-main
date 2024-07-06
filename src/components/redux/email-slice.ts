import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = "";

export const emailSlice = createSlice({
  name: "email",
  initialState,
  reducers: {
    get: (state) => {
      return state;
    },
    update: (_state, action: PayloadAction<string>) => action.payload,
    reset: () => {
      return initialState;
    },
  },
});

export const { get, update, reset } = emailSlice.actions;
export const emailReducer = emailSlice.reducer;
