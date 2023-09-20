import React from "react";

import { motion } from "framer-motion";
import { fadeSlideInVariants } from "@/lib/variants";
import { Separator } from "@/components/ui/separator";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

export const CommunityLib: React.FC = () => {
	const [value, setValue] = React.useState(["community-lib"]);

	return (
		<motion.div
			className="max-w-2xl w-full"
			initial="offscreen"
			whileInView="onscreen"
			viewport={{ once: true, amount: 0.6 }}
		>
			<motion.div
				variants={fadeSlideInVariants}
				className="flex flex-col gap-3 items-start"
			>
				<Card className="w-full">
					<Accordion type="multiple" value={value} onValueChange={setValue}>
						<AccordionItem value="community-lib">
							<AccordionTrigger className="pr-3">
								<CardHeader className="text-left">
									<CardTitle>Cambodia Community Library</CardTitle>

									<CardDescription>
										Backend Developer, Frontend Developer
									</CardDescription>
								</CardHeader>
							</AccordionTrigger>

							<AccordionContent>
								<CardContent>
									<div className="flex flex-col gap-6">
										<p className="text-sm text-muted-foreground">
											A two year school project aimed to improve literacy level
											in Ou Ruessei, a village located at Cambodia. My task is
											to build a Digital Library Management System with
											UserInterface to let the locals use ourlibrary with ease.
										</p>

										<Separator orientation="horizontal" className="max-w-2xl" />

										<h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
											Backend Developer:
										</h4>

										<ul>
											<li className="list-disc list-inside">
												<p className="inline">
													Building a Library Management System Golang backend
													server on my own. Users can borrow, return renew and
													reserve books while staff can carry out administrative
													actions. Allresources are managed with Role Based
													Access Control.
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
													A React Typescript web application that allows
													librarians to manage books, loans and fines, and let
													visitors view and loan books.
												</p>
											</li>
										</ul>
									</div>
								</CardContent>
								<CardFooter>
									<h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
										Aug 2023 - Ongoing | Singapore & Cambodia
									</h4>
								</CardFooter>
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</Card>
			</motion.div>
		</motion.div>
	);
};

export default CommunityLib;
