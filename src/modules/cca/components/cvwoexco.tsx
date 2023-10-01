import React from "react";

import { motion } from "framer-motion";
import { fadeSlideInVariants } from "@/lib/variants";
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

export const CvwoExco: React.FC = () => {
	const [value, setValue] = React.useState(["cvwoexco"]);

	return (
		<motion.div
			className="max-w-2xl w-full"
			initial="offscreen"
			whileInView="onscreen"
			viewport={{ once: true, amount: 0.4 }}
		>
			<motion.div
				variants={fadeSlideInVariants}
				className="flex flex-col gap-3 items-start"
			>
				<Card className="w-full">
					<Accordion type="multiple" value={value} onValueChange={setValue}>
						<AccordionItem value="cvwoexco">
							<AccordionTrigger className="pr-3">
								<CardHeader className="text-left">
									<CardTitle>
										Computing For Voluntary Welfare Organisations
									</CardTitle>

									<CardDescription>President</CardDescription>
								</CardHeader>
							</AccordionTrigger>

							<AccordionContent>
								<CardContent>
									<div className="flex flex-col gap-6">
										<p className="text-sm text-muted-foreground">
											Oversee the recruitment and application process for
											CVWO&lsquo;s 2024 Summer Internship program. Manage
											marketing, outreach, and operations for CVWO.
										</p>
									</div>
								</CardContent>
								<CardFooter>
									<h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
										Sep 2023 - Ongoing | Singapore
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

export default CvwoExco;
