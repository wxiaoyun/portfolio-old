import React from "react";
import { useNavigate } from "react-router-dom";

import { AppLogic, Footer, Navbar } from "..";

export const App: React.FC = () => {
	const navigate = useNavigate();

	React.useEffect(() => {
		navigate("/aboutme");
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="min-h-screen w-full flex flex-col">
			<Navbar />

			<div className="flex-grow">
				<AppLogic />
			</div>

			<Footer />
		</div>
	);
};

export default App;
