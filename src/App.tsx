import React from "react";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { Router } from "./router";

const queryClient = new QueryClient()

const App: React.FC = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <QueryClientProvider client={queryClient}>
        <RouterProvider
          router={Router}
          fallbackElement={<p>Page unavailable</p>}
        />
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
