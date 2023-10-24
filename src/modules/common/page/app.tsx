import React from "react";
import { useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { Routes } from "@/constants";
import { routeSlice } from "@/store";
import { Footer, Navbar } from "..";

export const App: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (window.location.pathname === "/") {
      dispatch(routeSlice.actions.changeRoute(Routes.aboutme));
      navigate(`/${Routes.aboutme}`);
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
