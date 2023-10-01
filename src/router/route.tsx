import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from "react-router-dom";
import { App, PageNotFound } from "../modules";
import { AboutMe } from "@/modules/aboutme";
import { Experience } from "@/modules/experience";
import { Project } from "@/modules/project";
import { Education } from "@/modules/education";
import { CCA } from "@/modules/cca/pages";

export const Router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			<Route path="/aboutme" element={<AboutMe />} />
			<Route path="/experiences" element={<Experience />} />
			<Route path="/projects" element={<Project />} />
			<Route path="/education" element={<Education />} />
			<Route path="/cca" element={<CCA />} />
			<Route path="/blog" element={<p>blog</p>} />
			<Route path="*" element={<PageNotFound />} />
		</Route>,
	),
);
