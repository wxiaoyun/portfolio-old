import React from "react";
import { motion } from "framer-motion";

import { fadeSlideInVariants } from "@/lib/variants";
import { ToolMatrix } from "..";

export const ToolsAndTech: React.FC = () => {
  return (
    <motion.div
      className="w-full flex flex-col gap-3"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.4 }}
      variants={fadeSlideInVariants}
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
  );
};

export default ToolsAndTech;
