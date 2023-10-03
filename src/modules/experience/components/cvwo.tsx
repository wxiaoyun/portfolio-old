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

export const Cvwo: React.FC = () => {
	const [value, setValue] = React.useState(["cvwo"]);

	return (
		<motion.div
			className="w-full"
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
						<AccordionItem value="cvwo">
							<AccordionTrigger className="pr-3">
								<CardHeader className="text-left">
									<CardTitle>
										Computing For Voluntary Welfare Organisations
									</CardTitle>

									<CardDescription>
										Backend Developer, Frontend Developer, Secretary, Deputy
										Team Lead
									</CardDescription>
								</CardHeader>
							</AccordionTrigger>

							<AccordionContent>
								<CardContent>
									<div className="flex flex-col gap-6">
										<h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
											Backend Developer:
										</h4>

										<ul>
											<li className="list-disc list-inside">
												<p className="inline">
													Fully ported a Case Management System backend from
													Ruby on Rails to Golang, building features including:
													RESTful api, RBAC, Auth and 2FA, Masquerading.
												</p>
											</li>
											<li className="list-disc list-inside">
												<p className="inline">
													Reduced backend response time from 5 - 20 times,
													depending on the module.
												</p>
											</li>
											<li className="list-disc list-inside">
												<p className="inline">
													Developed a solid understanding of database management
													and schema design with PostgreSQL.
												</p>
											</li>
											<li className="list-disc list-inside">
												<p className="inline">
													Participated in regular code reviews and feedback
													sessions to enhance coding skills and best practices
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
													Added Quality-of-Life enhancement features to React
													TypeScript web application based on clients’ requests.
												</p>
											</li>
										</ul>

										<Separator orientation="horizontal" className="max-w-2xl" />

										<h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
											Secretary:
										</h4>

										<ul>
											<li className="list-disc list-inside">
												<p className="inline">
													Assist in coordinating actions 5 teams of total 32
													engineers. Coordinating with external parties,
													managing resources and meeting minute taking.
												</p>
											</li>
										</ul>

										<Separator orientation="horizontal" className="max-w-2xl" />

										<h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
											Deputy Team Lead:
										</h4>

										<ul>
											<li className="list-disc list-inside">
												<p className="inline">
													Preform code reviews and manage team morale.
												</p>
											</li>
										</ul>
									</div>
								</CardContent>
								<CardFooter>
									<h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
										May 2023 - Aug 2023 | Singapore
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

export default Cvwo;
