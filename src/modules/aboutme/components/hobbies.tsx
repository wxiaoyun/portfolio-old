import React from "react";

import { motion } from "framer-motion";
import { fadeSlideInVariants } from "@/lib/variants";

export const Hobbies: React.FC = () => {
	return (
		<motion.div
			className="max-w-2xl w-full mb-24"
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
					also a frequent gym visitor and I absolute love watching movies.
				</p>
			</motion.div>
		</motion.div>
	);
};

export default Hobbies;
