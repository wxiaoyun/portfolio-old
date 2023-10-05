import React from "react";
import { motion } from "framer-motion";
import { slideVariants } from "@/lib/variants";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { CvwoExco } from "../components";
import { slideTransition } from "@/lib/transition";
import { Routes } from "@/router";

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
      transition={slideTransition}
      key={Routes.cca}
    >
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl self-start">
        CCAs
      </h1>

      <CvwoExco />
    </motion.div>
  );
};
