import React from "react";

import { motion } from "framer-motion";
import { fadeSlideInVariants } from "@/lib/variants";
import { Separator } from "@/components/ui/separator";

export const Cvwo: React.FC = () => {
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
					Computing For Voluntary Welfare Organisations
				</h2>

				<h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
					Backend Developer, Frontend Developer, Secretary, Deputy Team Lead
				</h3>

				<h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
					May 2023 - Aug 2023 | Singapore
				</h4>

				<Separator orientation="horizontal" className="max-w-2xl" />

				<h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
					Backend Developer:
				</h4>

				<ul>
					<li className="list-disc list-inside">
						<p className="inline">
							Fully ported a Case Management System backend from Ruby on Rails
							to Golang, building features including: RESTful api, RBAC, Auth
							and 2FA, Masquerading.
						</p>
					</li>
					<li className="list-disc list-inside">
						<p className="inline">
							Reduced backend response time from 5 - 20 times, depending on the
							module.
						</p>
					</li>
					<li className="list-disc list-inside">
						<p className="inline">
							Developed a solid understanding of database management and schema
							design with PostgreSQL.
						</p>
					</li>
					<li className="list-disc list-inside">
						<p className="inline">
							Participated in regular code reviews and feedback sessions to
							enhance coding skills and best practices
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
							Added Quality-of-Life enhancement features to React TypeScript web
							application based on clients’ requests.
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
							Assist in coordinating actions 5 teams of total 32 engineers.
							Coordinating with external parties, managing resources and meeting
							minute taking.
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
			</motion.div>
		</motion.div>
	);
};

export default Cvwo;
