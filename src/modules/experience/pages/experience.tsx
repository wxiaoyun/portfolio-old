import React from "react";
import { Cvwo } from "..";

export const Experience: React.FC = () => {
	return (
		<div className="flex flex-col gap-y-12 items-center mx-6">
			<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl self-start">
				Experiences
			</h1>

			<Cvwo />
		</div>
	);
};

export default Experience;
