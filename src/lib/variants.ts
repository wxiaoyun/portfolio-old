import { Variants } from "framer-motion";

export const fadeSlideInVariants: Variants = {
	offscreen: {
		y: 300,
		opacity: 0,
	},
	onscreen: {
		y: 0,
		opacity: 1,
		transition: {
			type: "spring",
			bounce: 0.1,
			duration: 1.2,
		},
	},
};
