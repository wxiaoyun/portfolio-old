export const Routes = {
	aboutme: "about",
	experience: "experience",
	project: "project",
	education: "education",
	cca: "cca",
	blog: "blog",
};

export const RouteArray = [
	Routes.aboutme,
	Routes.experience,
	Routes.project,
	Routes.education,
	Routes.cca,
	Routes.blog,
];

export const NavLinks: NavLink[] = [
	{ path: Routes.aboutme, label: "About Me" },
	{ path: Routes.experience, label: "Experiences" },
	{ path: Routes.project, label: "Projects" },
	{ path: Routes.education, label: "Education" },
	{ path: Routes.cca, label: "CCAs" },
	{ path: Routes.blog, label: "Blogs" },
];
