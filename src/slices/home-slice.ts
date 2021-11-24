import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "src/core/store/store";

export const homeSlice = createSlice({
  name: "home",
  initialState: { counter: 0 },
  reducers: {
    increment: (state, action) => {
      // NOTE: no immutability is needed here, because the reducer is made on top of immer.
      state.counter += action.payload;
    },
    reset: state => {
      state.counter = 0;
    },
  },
});

export default homeSlice.reducer;

export const { increment, reset } = homeSlice.actions;

export const counterView = (state: RootState) => state.home.counter;
