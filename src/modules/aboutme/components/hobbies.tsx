import React from "react";

import { motion } from "framer-motion";
import { fadeSlideInVariants } from "@/lib/variants";

export const Hobbies: React.FC = () => {
  return (
    <motion.div
      className="w-full flex flex-col gap-3 items-start"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.4 }}
      variants={fadeSlideInVariants}
    >
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        I enjoy playing drums and I am currently learning how to play golf. I am
        passionate about working out and I absolutely love watching movies.
      </p>
    </motion.div>
  );
};

export default Hobbies;
