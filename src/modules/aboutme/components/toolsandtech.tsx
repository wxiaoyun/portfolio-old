import React from "react";
import { motion } from "framer-motion";
import { fadeSlideInVariants } from "@/lib/variants";
import { ToolMatrix } from "..";
import { aboutme } from "@/constants";

export const ToolsAndTech: React.FC = () => {
  return (
    <motion.div
      className="w-full flex flex-col gap-3"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeSlideInVariants}
    >
      <div className="text-lg font-semibold w-full">
        {aboutme.toolsandtech.title}
      </div>

      <div className="self-center mt-6">
        <ToolMatrix />
      </div>

      <p className="self-center text-sm text-center text-muted-foreground mt-6">
        {aboutme.toolsandtech.caption}
      </p>
    </motion.div>
  );
};

export default ToolsAndTech;
