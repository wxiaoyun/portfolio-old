import * as Imgs from "./image";

export const project = {
	title: "Projects",
	communitylib: {
		title: "Cambodia Community Library",
		description: "Fullstack Developer",
		details:
			"The Library Management System, is a full-stack web application designed for efficient library operations. It is a two year school project aimed to improve literacy level in Ou Ruessei, a village located at Cambodia. My task is to build a Digital Library Management System (LMS) to let the locals use and manage the physical library with ease.",
		items: [
			{
				title: "Backend Developer",
				paragraphs: [
					"The RESTful backend is designed to be scalable, with the ability to handle large amounts of data with efficient caching and database management. The backend also uses a robust logging system to ensure that errors are handled gracefully.",
					"The backend is also designed to be modular, with each module handling a specific set of functionalities. This allows for easy maintenance and debugging, and also allows for easy addition of new features.",
				],
				github: "https://github.com/ForAeons/lms-backend",
				demo: "https://railway.app/project/d296ea6f-2941-4176-8b32-ef7e210cf56a/",
			},
			{
				title: "Frontend Developer",
				paragraphs: [
					"The frontend website combines a modern frontend built with React, TypeScript, and Tailwind CSS, ensuring a user-friendly interface.",
					"The website uses ShadcnUI and its fully mobile responsive design ensures that the website is accessible on all devices.",
					"Key features include streamlined processes for borrowing, returning, and loaning books, along with robust user and role management.",
				],
				github: "https://github.com/ForAeons/lms-frontend-v2",
				demo: "https://lms.wxiaoyun.com/",
			},
		],
		techstack: [
			Imgs.TypeScriptLogo,
			Imgs.GoLogo,
			Imgs.ReactLogo,
			Imgs.TailwindCSSLogo,
			Imgs.ReduxLogo,
			Imgs.DockerLogo,
			Imgs.RedisLogo,
			Imgs.PostgreSQLLogo,
		],
		time: "Aug 2023 - Ongoing",
		location: "Cambodia",
		accordion_value: "cambodia-library",
	},
	portfolio: {
		title: "Portfolio Website",
		description: "This page!",
		p1: "A personal web-based responsive portfolio project developed using modern web technologies. Built largely with React and TypeScript, this portfolio aims to serve as a comprehensive showcase of my work and expertise in front-end development.",
		p2: " This project effectively employs a variety of cutting-edge tools in its build process, including Tailwind for utility-first CSS, Vite as the build tool and development server, Redux for handling state management, Radix UI providing low-level UI primitives for more comprehensive user interface control, Shadcn UI, a field-tested library of UI components, and Bun as package manager. Animation within the project is gracefully performed by Framer Motion, demonstrating an elegant user interface experience. Finally, it uses Google Analytics to track user interactions and behaviour.",
		time: "Aug 2023 - Present",
		techstack: [
			Imgs.TypeScriptLogo,
			Imgs.ReactLogo,
			Imgs.TailwindCSSLogo,
			Imgs.BunLogo,
			Imgs.GoogleCloudLogo,
			Imgs.TypeScriptLogo,
			Imgs.ReactLogo,
			Imgs.TailwindCSSLogo,
			Imgs.BunLogo,
			Imgs.GoogleCloudLogo,
		],
		github: "https://github.com/ForAeons/ForAeons.github.io",
		accordion_value: "portfolio-page",
	},
};
