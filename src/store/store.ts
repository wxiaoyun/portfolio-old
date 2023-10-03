import { configureStore } from "@reduxjs/toolkit";
import { blogSlice } from "./slices";

export const store = configureStore({
  reducer: {
    blog: blogSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
