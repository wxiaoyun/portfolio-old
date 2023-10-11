import { Variants } from "framer-motion";

export const fadeSlideInVariants: Variants = {
	offscreen: {
		y: 100,
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

export const slideVariants = {
	enter: (direction: number) => {
		return {
			x: direction > 0 ? 1000 : direction < 0 ? -1000 : 0,
			opacity: 0,
		};
	},
	center: {
		zIndex: 1,
		x: 0,
		opacity: 1,
	},
	exit: (direction: number) => {
		return {
			zIndex: 0,
			x: direction > 0 ? 1000 : direction < 0 ? -1000 : 0,
			opacity: 0,
		};
	},
};
