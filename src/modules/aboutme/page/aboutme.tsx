import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

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

			<div className="flex flex-col gap-3 max-w-2xl">
				<div className="text-lg font-semibold">
					Tools and Technologies that I use
				</div>
				<div className="grid grid-cols-12 gap-3">
					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-plain.svg"
						alt="vim"
						width="45"
						height="45"
					/>
					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg"
						alt="go"
						width="45"
						height="45"
					/>
					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
						alt="typescript"
						width="45"
						height="45"
					/>
					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
						alt="javascript"
						width="45"
						height="45"
					/>
					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
						alt="java"
						width="45"
						height="45"
					/>
					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg"
						alt="ruby"
						width="45"
						height="45"
					/>
					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
						alt="python"
						width="45"
						height="45"
					/>
					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
						alt="git"
						width="45"
						height="45"
					/>
					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
						alt="react"
						width="45"
						height="45"
					/>
					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
						alt="redux"
						width="45"
						height="45"
					/>
					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
						alt="html"
						width="45"
						height="45"
					/>
					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
						alt="css"
						width="45"
						height="45"
					/>
					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
						alt="tailwind"
						width="45"
						height="45"
					/>
					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
						alt="postgresql"
						width="45"
						height="45"
					/>
					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
						alt="mysql"
						width="45"
						height="45"
					/>
					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original-wordmark.svg"
						alt="rails"
						width="45"
						height="45"
					/>
				</div>
			</div>

			<Separator orientation="horizontal" className="max-w-2xl" />

			<div className="flex flex-col gap-3 max-w-2xl">
				<div className="text-lg font-semibold">Personal Hobbies</div>

				<p className="leading-7 [&:not(:first-child)]:mt-6">
					I enjoy playing drums and I am currently learning how to play golf. I
					also working out and watching movies.
				</p>
			</div>
		</div>
	);
};

export default AboutMe;
