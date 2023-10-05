import React from "react";
import { useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { Routes } from "@/router";
import { routeSlice } from "@/store";

export const AppLogic: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (window.location.pathname === "/") {
      navigate(`/${Routes.aboutme}`);
      dispatch(routeSlice.actions.changeRoute(Routes.aboutme));
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Outlet />;
};

export default AppLogic;
