import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { routeSlice } from "@/store";
import { NavTab, NavButton, ModeToggle, ContactMeBtn } from ".";
import { RESUME_URL, NavLinks } from "@/constants";

export const Navbar: React.FC = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const animatedNav = (path: string) => {
		if (window.location.pathname === `/${path}`) return;
		dispatch(routeSlice.actions.changeRoute(path));
		navigate(`/${path}`);
	};

	const path = window.location.pathname.split("/")[1];
	return (
		<div className="w-full flex flex-row items-center justify-between lg:justify-center lg:gap-3 p-3">
			<NavButton nav={animatedNav} />

			{NavLinks.map((link, index) => (
				<NavTab key={index} nav={animatedNav} link={link} currentPath={path} />
			))}

			<Button variant={"link"} size="sm" className="hidden lg:inline text-lg">
				<a href={RESUME_URL} download>
					Resume
				</a>
			</Button>

			<ModeToggle />

			<ContactMeBtn />
		</div>
	);
};

export default Navbar;
