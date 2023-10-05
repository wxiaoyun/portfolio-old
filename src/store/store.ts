import { configureStore } from "@reduxjs/toolkit";
import { blogSlice, routeSlice } from "./slices";

export const store = configureStore({
  reducer: {
    blog: blogSlice.reducer,
    route: routeSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
