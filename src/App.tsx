import React from "react";
import { Provider } from "react-redux";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { Router } from "./router";
import { store } from "./store";

const queryClient = new QueryClient()

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <QueryClientProvider client={queryClient}>
          <RouterProvider
            router={Router}
            fallbackElement={<p>Page unavailable</p>}
          />
        </QueryClientProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
