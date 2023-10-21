import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "@/components/theme-provider";
import {
	aboutme,
	VectorPortraitDarkMode,
	VectorPortraitLightMode,
} from "@/constants";
import { randomAlphabet, randString } from "@/util";

export const Introduction: React.FC = () => {
	const [hello, setHello] = React.useState(
		randString(aboutme.introduction.hello),
	);
	const [iam, setIam] = React.useState(randString(aboutme.introduction.iam));

	// text animation
	React.useEffect(() => {
		let iterations = 0;

		const intervalKey = setInterval(() => {
			if (
				iterations <
				Math.max(
					aboutme.introduction.hello.length,
					aboutme.introduction.iam.length,
				)
			)
				iterations += 1 / 6;
			else {
				clearInterval(intervalKey);
			}
			setHello((prev) =>
				prev
					.split("")
					.map((char, index) =>
						index < iterations
							? aboutme.introduction.hello[index]
							: randomAlphabet(char),
					)
					.join(""),
			);
			setIam((prev) =>
				prev
					.split("")
					.map((char, index) =>
						index < iterations
							? aboutme.introduction.iam[index]
							: randomAlphabet(char),
					)
					.join(""),
			);
		}, 30);

		return () => clearInterval(intervalKey);
	}, []);

	const theme = useTheme();
	const portrait =
		theme.theme === "light" ? VectorPortraitLightMode : VectorPortraitDarkMode;

	// Preload both images to prevent the image from flickering when changing theme
	React.useEffect(() => {
		const lightPortrait = new Image();
		const darkPortrait = new Image();
		lightPortrait.src = VectorPortraitLightMode.src;
		darkPortrait.src = VectorPortraitDarkMode.src;
	}, []);

	return (
		<div className="min-h-[calc(100vh-7rem)] flex flex-col justify-center items-center gap-12">
			<div className="flex flex-col lg:flex-row justify-center items-center gap-12">
				<AnimatePresence mode="wait">
					<motion.img
						className="h-52 w-52 aspect-square transition-shadow duration-500 shadow-xl hover:shadow-2xl rounded-full"
						key={portrait.src}
						src={portrait.src}
						alt={portrait.alt}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.5, ease: "easeInOut" }}
					/>
				</AnimatePresence>

				<div>
					<h1 className="scroll-m-20 text-4xl font-mono font-extrabold tracking-tight lg:text-5xl">
						{hello}
					</h1>

					<h1 className="scroll-m-20 text-4xl font-mono font-extrabold tracking-tight lg:text-5xl">
						{iam}
					</h1>
				</div>
			</div>

			<p className="leading-7">{aboutme.introduction.p1}</p>

			<p className="leading-7">{aboutme.introduction.p2}</p>
		</div>
	);
};

export default Introduction;
