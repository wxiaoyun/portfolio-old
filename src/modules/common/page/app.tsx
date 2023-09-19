import React from "react";
import { AppLogic, Footer, Navbar } from "..";

export const App: React.FC = () => {
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
