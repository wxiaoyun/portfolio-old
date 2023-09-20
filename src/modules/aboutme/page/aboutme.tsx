import React from "react";
import { motion, Variants } from "framer-motion";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { ToolMatrix } from "..";

const sectionVariants: Variants = {
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

export const AboutMe: React.FC = () => {
	return (
		<div className="flex flex-col gap-y-24 items-center">
			<div className="h-[70vh] mt-[10vh] flex flex-col justify-center items-center max-w-2xl gap-6">
				<div className="flex w-full justify-around items-center gap-6">
					<Avatar className="h-52 w-52 shadow-xl">
						<AvatarImage src="/self_portrait_zoomed.JPEG" alt="portrait" />
						<AvatarFallback></AvatarFallback>
					</Avatar>
					<div>
						<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
							Hello.
						</h1>
						<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
							I am Xiaoyun
						</h1>
					</div>
				</div>

				<p className="leading-7 [&:not(:first-child)]:mt-6">
					I am a Year 2 undergraduate studying at the National University of
					Singapore, learning full stack web development.
				</p>

				<p className="leading-7 [&:not(:first-child)]:mt-6">
					I am an enthusiastic and resilient learner with a passion for
					collaborative work. Embracing challenges is second nature to me, as I
					constantly seek opportunities to acquire new skills and knowledge
					beyond my comfort zone. What sets me apart is my ability to infuse
					humor and friendliness into the team dynamics, creating a positive and
					enjoyable environment for everyone involved.
				</p>
			</div>

			<Separator orientation="horizontal" className="max-w-2xl" />

			<motion.div
				className="max-w-2xl w-full"
				initial="offscreen"
				whileInView="onscreen"
				viewport={{ once: true, amount: 0.8 }}
			>
				<motion.div variants={sectionVariants} className="flex flex-col gap-3">
					<div className="text-lg font-semibold w-full">
						Tools and Technologies that I use
					</div>

					<p className="text-sm text-muted-foreground mb-8">
						Try dragging the icons :P
					</p>

					<ToolMatrix />
				</motion.div>
			</motion.div>

			<Separator orientation="horizontal" className="max-w-2xl" />

			<motion.div
				className="max-w-2xl w-full"
				initial="offscreen"
				whileInView="onscreen"
				viewport={{ once: true, amount: 0.8 }}
			>
				<motion.div
					variants={sectionVariants}
					className="flex flex-col gap-3 items-start"
				>
					<div className="text-lg font-semibold">Personal Hobbies</div>

					<p className="leading-7 [&:not(:first-child)]:mt-6">
						I enjoy playing drums and I am currently learning how to play golf.
						I also a frequent gym visitor and I absolute love watching movies.
					</p>
				</motion.div>
			</motion.div>
		</div>
	);
};

export default AboutMe;
