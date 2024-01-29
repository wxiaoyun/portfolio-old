import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "..";

export const Layout: React.FC = () => {
  return (
    <div className="relative min-h-[100dvh+1px)] w-full max-w-screen-lg flex flex-col mx-auto pb-24">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
