import React from "react";
import { Outlet, useNavigate  } from "react-router-dom";

export const AppLogic: React.FC = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    if (window.location.pathname === "/") navigate("/aboutme");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Outlet />;
};

export default AppLogic;
