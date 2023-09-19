import React from "react";
import { RouterProvider } from "react-router-dom";

import { ThemeProvider } from "@/components/theme-provider";
import { Router } from "./router";

const App: React.FC = () => {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<RouterProvider
				router={Router}
				fallbackElement={<p>Page unavailable</p>}
			/>
		</ThemeProvider>
	);
};

export default App;
