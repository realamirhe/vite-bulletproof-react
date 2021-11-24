import { configureStore } from "@reduxjs/toolkit";

import homeReducer from "~slices/home-slice";

const store = configureStore({
  reducer: {
    home: homeReducer,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
