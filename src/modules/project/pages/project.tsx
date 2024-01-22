import React from "react";
import { motion } from "framer-motion";
import { project } from "@/constants";
import { slideVariants } from "@/lib/variants";
import { slideFadeTransition } from "@/lib/transition";
import { CommunityLib, PortfolioPage } from "..";
import { useDirection } from "@/hooks";

export const Project: React.FC = () => {
  const direction = useDirection();

  return (
    <motion.div
      className="flex flex-col gap-y-8 lg:gap-y-12 items-center px-6 w-full"
      variants={slideVariants}
      custom={direction}
      initial="enter"
      animate="center"
      exit="exit"
      transition={slideFadeTransition}
    >
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl self-start">
        {project.title}
      </h1>

      <CommunityLib />

      <PortfolioPage />
    </motion.div>
  );
};

export default Project;
