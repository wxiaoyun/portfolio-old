import { configureStore } from "@reduxjs/toolkit";
import { routeSlice } from "./slices";

export const store = configureStore({
	reducer: {
		route: routeSlice.reducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
