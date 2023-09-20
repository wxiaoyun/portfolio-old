import React from "react";

import { motion } from "framer-motion";
import { fadeSlideInVariants } from "@/lib/variants";
import { Separator } from "@/components/ui/separator";

export const CommunityLib: React.FC = () => {
	return (
		<motion.div
			className="max-w-2xl w-full"
			initial="offscreen"
			whileInView="onscreen"
			viewport={{ once: true, amount: 0.8 }}
		>
			<motion.div
				variants={fadeSlideInVariants}
				className="flex flex-col gap-3 items-start"
			>
				<h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
					Cambodia Community Library
				</h2>

				<h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
					Backend Developer, Frontend Developer
				</h3>

				<h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
					Aug 2023 - Ongoing | Singapore & Cambodia
				</h4>

				<p className="text-sm text-muted-foreground">
					A two year school project aimed to improve literacy level in Ou
					Ruessei, a village located at Cambodia. My task is to build a Digital
					Library Management System with UserInterface to let the locals use
					ourlibrary with ease.
				</p>

				<Separator orientation="horizontal" className="max-w-2xl" />

				<h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
					Backend Developer:
				</h4>

				<ul>
					<li className="list-disc list-inside">
						<p className="inline">
							Building a Library Management System Golang backend server on my
							own. Users can borrow, return renew and reserve books while staff
							can carry out administrative actions. Allresources are managed
							with Role Based Access Control.
						</p>
					</li>
				</ul>

				<Separator orientation="horizontal" className="max-w-2xl" />

				<h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
					Frontend Developer:
				</h4>

				<ul>
					<li className="list-disc list-inside">
						<p className="inline">
							A React Typescript web application that allows librarians to
							manage books, loans and fines, and let visitors view and loan
							books.
						</p>
					</li>
				</ul>
			</motion.div>
		</motion.div>
	);
};

export default CommunityLib;
