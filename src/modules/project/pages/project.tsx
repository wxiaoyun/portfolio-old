import React from "react";
import { CommunityLib } from "..";

export const Project: React.FC = () => {
	return (
		<div className="flex flex-col gap-y-24 items-center mx-6">
			<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl justify-self-start max-w-2xl w-full">
				Projects
			</h1>

			<CommunityLib />
		</div>
	);
};

export default Project;
