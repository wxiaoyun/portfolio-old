import { useLocation } from "react-router-dom";

export const useDirection = () => {
	const location = useLocation();
	const params = new URLSearchParams(location.search);
	const dirParam = params.get("dir");
	return dirParam ? parseInt(dirParam) : 0;
};
