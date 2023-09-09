import React from "react";
import { AppLogic, Footer, Navbar } from "..";

export const App: React.FC = () => {
  return (
    <div className="h-full w-full">
      <Navbar />
      <AppLogic />
      <Footer />
    </div>
  );
};

export default App;
