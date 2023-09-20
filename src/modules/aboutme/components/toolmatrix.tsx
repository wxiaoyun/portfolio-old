import React, { ReactNode } from "react";

import { motion, useMotionValue } from "framer-motion";
import { Tool } from "./tool";

const grid: ReactNode[][] = [
	[
		<img
			src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-plain.svg"
			alt="vim"
			width="45"
			height="45"
			key={"vim"}
		/>,
		<img
			src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg"
			alt="go"
			width="45"
			height="45"
			key={"go"}
		/>,
		<img
			src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
			alt="typescript"
			width="45"
			height="45"
			key={2}
		/>,
		<img
			src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
			alt="javascript"
			width="45"
			height="45"
			key={"javascript"}
		/>,
		<img
			src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
			alt="java"
			width="45"
			height="45"
			key={"java"}
		/>,
		<img
			src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg"
			alt="ruby"
			width="45"
			height="45"
			key={"ruby"}
		/>,
	],
	[
		<img
			src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
			alt="python"
			width="45"
			height="45"
			key={"python"}
		/>,
		<img
			src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
			alt="git"
			width="45"
			height="45"
			key={"git"}
		/>,
		<img
			src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
			alt="react"
			width="45"
			height="45"
			key={"react"}
		/>,
		<img
			src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
			alt="redux"
			width="45"
			height="45"
			key={"redux"}
		/>,
		<img
			src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
			alt="html"
			width="45"
			height="45"
			key={"html"}
		/>,
		<img
			src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
			alt="css"
			width="45"
			height="45"
			key={"css"}
		/>,
	],
	[
		<img
			src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
			alt="tailwind"
			width="45"
			height="45"
			key={"tailwind"}
		/>,
		<img
			src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
			alt="postgresql"
			width="45"
			height="45"
			key={"postgresql"}
		/>,
		<img
			src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
			alt="mysql"
			width="45"
			height="45"
			key={"mysql"}
		/>,
		<img
			src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original-wordmark.svg"
			alt="rails"
			width="45"
			height="45"
			key={"rails"}
		/>,
	],
];

export const ToolMatrix: React.FC = () => {
	const size = 60;
	const gap = 5;
	const [active, setActive] = React.useState({ row: 0, col: 0 });
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
					row.map((item, colIndex) => (
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
						>
							{item}
						</Tool>
					)),
				)}
			</motion.div>
		</motion.div>
	);
};

export default ToolMatrix;
