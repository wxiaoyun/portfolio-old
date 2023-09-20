import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from "react-router-dom";
import { App, PageNotFound } from "../modules";
import { AboutMe } from "@/modules/aboutme";
import { Experience } from "@/modules/experience";

export const Router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			<Route path="/aboutme" element={<AboutMe />} />
			<Route path="/experiences" element={<Experience />} />
			<Route path="/projects" element={<p>projects</p>} />
			<Route path="/blog" element={<p>blog</p>} />
			<Route path="*" element={<PageNotFound />} />
		</Route>,
	),
);
