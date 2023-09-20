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

				<p className="text-sm text-muted-foreground mb-8">
					Try dragging the icons :P
				</p>

				<ToolMatrix />
			</motion.div>
		</motion.div>
	);
};

export default ToolsAndTech;
