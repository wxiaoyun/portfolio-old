import { RouteArray } from "@/router/routes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: AppRouteState = {
  currentPath: "/",
  direction: 0,
};

export const routeSlice = createSlice({
  name: "route",
  initialState,
  reducers: {
    changeRoute: (state, action: PayloadAction<string>) => {
      if (action.payload === state.currentPath) return;
      const currentIndex = RouteArray.findIndex(
        (route) => route === state.currentPath,
      );
      const nextIndex = RouteArray.findIndex(
        (route) => route === action.payload,
      );
      state.direction = nextIndex - currentIndex > 0 ? 1 : -1;
      state.currentPath = action.payload;
    },
  },
});
