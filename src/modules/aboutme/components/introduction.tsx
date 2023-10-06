import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Introduction: React.FC = () => {
	const [src, setSrc] = React.useState("/self_portrait_low_res.jpg");

	React.useEffect(() => {
		const highResImage = new Image();
		highResImage.src = "/self_portrait_zoomed.JPEG";
		highResImage.onload = () => setSrc("/self_portrait_zoomed.JPEG");
	}, []);
	return (
			<div
				className="h-[80vh] mt-[10vh] flex flex-col justify-center items-center gap-6"
			>
				<div className="flex w-full justify-around items-center gap-6">
					<Avatar className="h-52 w-52 shadow-xl">
						<AvatarImage src={src} alt="portrait" />
						<AvatarFallback>Xiaoyun</AvatarFallback>
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
	);
};

export default Introduction;
