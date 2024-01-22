import React from "react";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { slideVariants } from "@/lib/variants";
import { slideFadeTransition } from "@/lib/transition";
import { useDirection } from "@/hooks";
import { Introduction, ToolsAndTech, Hobbies } from "../";

export const AboutMe: React.FC = () => {
  const direction = useDirection();
  return (
    <motion.div
      className="flex flex-col gap-y-12 items-center mx-6 w-full mb-24"
      variants={slideVariants}
      custom={direction}
      initial="enter"
      animate="center"
      exit="exit"
      transition={slideFadeTransition}
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
