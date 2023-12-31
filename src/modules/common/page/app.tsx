import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "..";

export const App: React.FC = () => {
	return (
		<div className="relative min-h-[calc(100vh+1px)] w-full flex flex-col items-center">
			<Navbar />
			<div className="flex-grow max-w-2xl w-full flex justify-center mb-24">
				<Outlet />
			</div>

			<Footer />
		</div>
	);
};

export default App;
