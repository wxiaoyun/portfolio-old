import React from "react";

import { motion, useMotionValue } from "framer-motion";
import { Tool } from "./tool";

const size = 60;
const gap = 5;

const grid: { src: string; alt: string }[][] = [
	[
		{
			src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-plain.svg",
			alt: "vim",
		},
		{
			src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg",
			alt: "go",
		},
		{
			src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
			alt: "typescript",
		},
		{
			src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
			alt: "javascript",
		},
		{
			src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
			alt: "java",
		},
		{
			src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg",
			alt: "ruby",
		},
	],
	[
		{
			src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
			alt: "python",
		},
		{
			src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
			alt: "git",
		},
		{
			src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
			alt: "react",
		},
		{
			src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
			alt: "redux",
		},
		{
			src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
			alt: "html",
		},
		{
			src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
			alt: "css",
		},
	],
	[
		{
			src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
			alt: "tailwind",
		},
		{
			src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
			alt: "postgresql",
		},
		{
			src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
			alt: "mysql",
		},
		{
			src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original-wordmark.svg",
			alt: "rails",
		},
	],
];

export const ToolMatrix: React.FC = () => {
	// use -1 to prevent element[0][0] form glitching
	const [active, setActive] = React.useState({ row: -1, col: -1 });
	const x = useMotionValue(0);
	const y = useMotionValue(0);

	return (
		<motion.div
			transition={{ duration: 10, loop: Infinity, ease: "linear" }}
			style={{ width: "100%", height: "100%" }}
		>
			<motion.div
				style={{
					display: "flex",
					width: (size + gap) * grid[0].length - gap,
					height: (size + gap) * grid.length - gap,
					position: "relative",
					perspective: 500,
				}}
			>
				{grid.map((row, rowIndex) =>
					row.map((img, colIndex) => (
						<Tool
							x={x}
							y={y}
							active={active}
							setActive={setActive}
							rowIndex={rowIndex}
							colIndex={colIndex}
							key={rowIndex * 31 + colIndex}
							size={size}
							gap={gap}
							img={img}
						/>
					)),
				)}
			</motion.div>
		</motion.div>
	);
};

export default ToolMatrix;
