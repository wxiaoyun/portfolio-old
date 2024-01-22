import { useLocation } from "react-router-dom";
import { Routes } from "@/constants";
import { getDirection } from "@/util";

export const useDirection = () => {
	const location = useLocation();
	const currentPath = location.pathname;

	const params = new URLSearchParams(location.search);
	const dirParam = params.get("dir");

	// dirparam is null when the user first enters the site
	if (dirParam === null) {
		return {
			direction: getDirection(Routes.aboutme, currentPath),
			nextDir: (nextPath: string) => getDirection(currentPath, nextPath),
		};
	}

	const direction = dirParam ? parseInt(dirParam) : 0;
	const nextDirection = (nextPath: string) =>
		getDirection(currentPath, nextPath);

	return { direction, nextDir: nextDirection };
};
