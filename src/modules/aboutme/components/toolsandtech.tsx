import React from "react";
import { motion } from "framer-motion";

import { fadeSlideInVariants } from "@/lib/variants";
import { ToolMatrix } from "..";

export const ToolsAndTech: React.FC = () => {
  return (
    <motion.div
      className="max-w-2xl w-full"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.4 }}
    >
      <motion.div
        variants={fadeSlideInVariants}
        className="flex flex-col gap-3"
      >
        <div className="text-lg font-semibold w-full">
          Tools and Technologies that I use
        </div>

        <div className="self-center mt-6">
          <ToolMatrix />
          <p className="text-sm text-center text-muted-foreground mt-6">
            Try dragging the icons :P
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ToolsAndTech;
