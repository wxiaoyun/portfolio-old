import React from "react";
import { motion } from "framer-motion";
import { fadeLeftSlideInVariants } from "@/lib/variants";
import { aboutme } from "@/constants";

export const Hobbies: React.FC = () => {
  return (
    <motion.div
      className="w-full flex flex-col gap-3 items-start"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeLeftSlideInVariants}
    >
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {aboutme.hobbies.p1}
      </p>
    </motion.div>
  );
};

export default Hobbies;
