import React from "react";
import { motion } from "framer-motion";

import { slideVariants } from "@/lib/variants";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { CommunityLib, PortfolioPage } from "..";
import { slideFadeTransition } from "@/lib/transition";

export const Project: React.FC = () => {
  const routeState = useSelector((state: RootState) => state.route);
  return (
    <motion.div
      className="flex flex-col gap-y-12 items-center mx-6 w-full"
      variants={slideVariants}
      custom={routeState.direction}
      initial="enter"
      animate="center"
      exit="exit"
      transition={slideFadeTransition}
    >
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl self-start">
        Projects
      </h1>

      <PortfolioPage />

      <CommunityLib />
    </motion.div>
  );
};

export default Project;
