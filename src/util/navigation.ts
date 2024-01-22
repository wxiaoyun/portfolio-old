import { RouteArray } from "@/constants";

export const getDirection = (currentPath: string, nextPath: string) => {
	const currentIndex = RouteArray.findIndex((route) => route === currentPath);
	const nextIndex = RouteArray.findIndex((route) => route === nextPath);
	const direction = nextIndex - currentIndex;
	return direction;
};
