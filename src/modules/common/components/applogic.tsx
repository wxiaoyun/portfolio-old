import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Routes } from "@/router";
import { slideVariants } from "@/lib/variants";
import { slideTransition } from "@/lib/transition";
import { RootState, routeSlice } from "@/store";

export const AppLogic: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const routeState = useSelector((state: RootState) => state.route);
  const location = useLocation();

  React.useEffect(() => {
    if (window.location.pathname === "/") {
      navigate(`/${Routes.aboutme}`);
      dispatch(routeSlice.actions.changeRoute(Routes.aboutme));
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative w-full">
      {/* <AnimatePresence custom={routeState.direction}> */}
      {/*   <motion.div */}
      {/*     className="absolute top-0 w-full" */}
      {/*     variants={slideVariants} */}
      {/*     custom={routeState.direction} */}
      {/*     initial="enter" */}
      {/*     animate="center" */}
      {/*     exit="exit" */}
      {/*     transition={slideTransition} */}
      {/*     key={location.key} */}
      {/*   > */}
          <Outlet />
      {/*   </motion.div> */}
      {/* </AnimatePresence> */}
    </div>
  );
};

export default AppLogic;
