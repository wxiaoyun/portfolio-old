import React from "react";

import { AppLogic, Footer, Navbar } from "..";

export const App: React.FC = () => {
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
