import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Routes } from "@/router";
import { routeSlice } from "@/store";
import { NavButton } from "./navbutton";

const dynamicClass = (path: string, current: string) => {
  return `hidden lg:inline text-lg ${path === current && "bg-accent text-accent-foreground"
    }`;
};

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
    <div className="w-full flex flex-row justify-between lg:justify-center lg:gap-3 p-3">
      <NavButton nav={animatedNav} />

      <Button
        onClick={() => animatedNav(Routes.aboutme)}
        variant={"ghost"}
        size="sm"
        className={dynamicClass(path, Routes.aboutme)}
      >
        About Me
      </Button>

      <Button
        onClick={() => animatedNav(Routes.experience)}
        variant={"ghost"}
        size="sm"
        className={dynamicClass(path, Routes.experience)}
      >
        Experiences
      </Button>

      <Button
        onClick={() => animatedNav(Routes.project)}
        variant={"ghost"}
        size="sm"
        className={dynamicClass(path, Routes.project)}
      >
        Projects
      </Button>

      <Button
        onClick={() => animatedNav(Routes.education)}
        variant={"ghost"}
        size="sm"
        className={dynamicClass(path, Routes.education)}
      >
        Education
      </Button>

      <Button
        onClick={() => animatedNav(Routes.cca)}
        variant={"ghost"}
        size="sm"
        className={dynamicClass(path, Routes.cca)}
      >
        CCAs
      </Button>

      <Button
        onClick={() => animatedNav(Routes.blog)}
        variant={"ghost"}
        size="sm"
        className={dynamicClass(path, Routes.blog)}
      >
        Blogs
      </Button>

      <Button variant={"ghost"} size="sm" className="hidden lg:inline text-lg">
        <a href="/WU_XIAOYUN_CV_v2.5.pdf" download>
          Resume
        </a>
      </Button>

      <ModeToggle />
    </div>
  );
};

export default Navbar;
