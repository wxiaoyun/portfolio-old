import React from "react";

import { motion } from "framer-motion";
import { fadeSlideInVariants } from "@/lib/variants";

export const Hobbies: React.FC = () => {
  return (
    <motion.div
      className="w-full"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.4 }}
    >
      <motion.div
        variants={fadeSlideInVariants}
        className="flex flex-col gap-3 items-start"
      >
        <div className="text-lg font-semibold">Personal Hobbies</div>

        <p className="leading-7 [&:not(:first-child)]:mt-6">
          I enjoy playing drums and I am currently learning how to play golf. I
          passionate about working out and I absolutely love watching movies.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Hobbies;
