import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Routes } from "@/router";
import { routeSlice } from "@/store";
import { NavTab, NavButton, ModeToggle } from ".";

const navLinks: NavLink[] = [
  { path: Routes.aboutme, label: "About Me" },
  { path: Routes.experience, label: "Experiences" },
  { path: Routes.project, label: "Projects" },
  { path: Routes.education, label: "Education" },
  { path: Routes.cca, label: "CCAs" },
  { path: Routes.blog, label: "Blogs" },
];

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

      {navLinks.map((link, index) => (
        <NavTab key={index} nav={animatedNav} link={link} currentPath={path} />
      ))}

      <Button variant={"link"} size="sm" className="hidden lg:inline text-lg">
        <a href="/WU_XIAOYUN_CV_v2.6.pdf" download>
          Resume
        </a>
      </Button>

      <ModeToggle />
    </div>
  );
};

export default Navbar;
