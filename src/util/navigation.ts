import { RouteArray } from "@/constants";

export const getDirection = (currentPath: string, nextPath: string) => {
	currentPath = currentPath.replace("/", "");
	nextPath = nextPath.replace("/", "");
	const currentIndex = RouteArray.findIndex((route) => route === currentPath);
	const nextIndex = RouteArray.findIndex((route) => route === nextPath);
	return nextIndex - currentIndex;
};

export const generatePathWithDirection = (current: string, next: string) => {
	return `/${next}?dir=${getDirection(current, next)}`;
};
