import React from "react";
import { useNavigate } from "react-router-dom";

import { AppLogic, Footer, Navbar } from "..";

export const App: React.FC = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    if (window.location.pathname === "/") navigate("/aboutme");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col items-center">
      <Navbar />

      <div className="flex-grow max-w-2xl w-full flex justify-center mb-24">
        <AppLogic />
      </div>

      <Footer />
    </div>
  );
};

export default App;
