import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { slideVariants } from "@/lib/variants";
import { RootState } from "@/store";
import { CvwoExco } from "../components";
import { slideFadeTransition } from "@/lib/transition";
import { cca } from "@/constants";

export const CCA: React.FC = () => {
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
        {cca.title}
      </h1>

      <CvwoExco />
    </motion.div>
  );
};