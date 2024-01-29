import React from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { cca } from "@/constants";
import { slideVariants } from "@/lib/variants";
import { slideFadeTransition } from "@/lib/transition";
import { CvwoExco, NUSCollegeClub } from "../";
import { useDirection } from "@/hooks";

export const CCA: React.FC = () => {
  const { pathname } = useLocation()
  const direction = useDirection(pathname);
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
        {cca.title}
      </h1>

      <CvwoExco />

      <NUSCollegeClub />
    </motion.div>
  );
};
