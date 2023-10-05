import React from "react";
import { motion } from "framer-motion";

import { Separator } from "@/components/ui/separator";
import { Introduction, ToolsAndTech, Hobbies } from "../components/";
import { slideVariants } from "@/lib/variants";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { slideTransition } from "@/lib/transition";

export const AboutMe: React.FC = () => {
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
    >
      <Introduction />

      <Separator orientation="horizontal" />

      <ToolsAndTech />

      <Separator orientation="horizontal" />

      <Hobbies />
    </motion.div>
  );
};

export default AboutMe;
