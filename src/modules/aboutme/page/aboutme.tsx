import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { RootState } from "@/store";
import { Separator } from "@/components/ui/separator";
import { slideVariants } from "@/lib/variants";
import { slideFadeTransition } from "@/lib/transition";
import { Introduction, ToolsAndTech, Hobbies } from "../";

export const AboutMe: React.FC = () => {
	const routeState = useSelector((state: RootState) => state.route);
	return (
		<motion.div
			className="flex flex-col gap-y-12 items-center mx-6 w-full mb-24"
			variants={slideVariants}
			custom={routeState.direction}
			initial="enter"
			animate="center"
			exit="exit"
			transition={slideFadeTransition}
		>
			<Introduction />

			<Separator orientation="horizontal" />

			<ToolsAndTech />

			<Separator orientation="horizontal" />

			<Hobbies />
		</motion.div>
	);
};

export default AboutMe;
