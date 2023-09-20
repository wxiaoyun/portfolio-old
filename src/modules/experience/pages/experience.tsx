import React from "react";
import { Cvwo } from "..";

export const Experience: React.FC = () => {
	return (
		<div className="flex flex-col gap-y-24 items-center">
			<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl justify-self-start max-w-2xl w-full">
				Experiences
			</h1>

			<Cvwo />
		</div>
	);
};

export default Experience;
