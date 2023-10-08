import React from "react";
import { motion, useMotionValue } from "framer-motion";
import { Tools } from "@/constants";
import { ChunkArray } from "@/util";
import { Tool } from "./tool";

const size = 60;
const gap = 5;
const columns = 5;

const ToolGrid: Img[][] = ChunkArray(Tools, columns);

export const ToolMatrix: React.FC = () => {
  // use -1 to prevent element[0][0] form glitching
  const [active, setActive] = React.useState({ row: -1, col: -1 });
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  return (
    <motion.div
      transition={{ duration: 10, loop: Infinity, ease: "linear" }}
      style={{ width: "100%", height: "100%" }}
    >
      <motion.div
        style={{
          display: "flex",
          width: (size + gap) * ToolGrid[0].length - gap,
          height: (size + gap) * ToolGrid.length - gap,
          position: "relative",
          perspective: 500,
        }}
      >
        {ToolGrid.map((row, rowIndex) =>
          row.map((img, colIndex) => (
            <Tool
              x={x}
              y={y}
              active={active}
              setActive={setActive}
              rowIndex={rowIndex}
              colIndex={colIndex}
              key={rowIndex * 31 + colIndex}
              size={size}
              gap={gap}
              img={img}
            />
          )),
        )}
      </motion.div>
    </motion.div>
  );
};

export default ToolMatrix;
