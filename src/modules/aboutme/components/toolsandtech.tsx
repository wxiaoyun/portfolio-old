import React from "react";
import { motion } from "framer-motion";
import { fadeRightSlideInVariants } from "@/lib/variants";
import { aboutme } from "@/constants";
import { ToolMatrix } from "..";

export const ToolsAndTech: React.FC = () => {
  return (
    <motion.div
      className="w-full flex flex-col gap-3"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeRightSlideInVariants}
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
