import { getDirection } from "@/util";
import { useLocation } from "react-router-dom";

export const useDirection = (current: string) => {
	const location = useLocation();
	const params = new URLSearchParams(location.search);
	const dirParam = params.get("from");
	if (dirParam === null) return 0;
	return getDirection(current, dirParam);
};
