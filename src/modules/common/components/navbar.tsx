import React from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { NavButton } from "./navbutton";
import { Routes } from "@/router";

const dynamicClass = (path: string, current: string) => {
  return path === current ? "bg-accent text-accent-foreground" : "";
};

export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const path = window.location.pathname.split("/")[1];
  return (
    <div className="w-full flex flex-row justify-between lg:justify-center lg:gap-3 p-3">
      <NavButton />

      <Button
        onClick={() => navigate(`/${Routes.aboutme}`)}
        variant={"ghost"}
        size="sm"
        className={`hidden lg:inline text-lg ${dynamicClass(
          path,
          Routes.aboutme,
        )}`}
      >
        About Me
      </Button>

      <Button
        onClick={() => navigate(`/${Routes.experience}`)}
        variant={"ghost"}
        size="sm"
        className={`hidden lg:inline text-lg ${dynamicClass(
          path,
          Routes.experience,
        )}`}
      >
        Experiences
      </Button>

      <Button
        onClick={() => navigate(`/${Routes.project}`)}
        variant={"ghost"}
        size="sm"
        className={`hidden lg:inline text-lg ${dynamicClass(
          path,
          Routes.project,
        )}`}
      >
        Projects
      </Button>

      <Button
        onClick={() => navigate(`/${Routes.education}`)}
        variant={"ghost"}
        size="sm"
        className={`hidden lg:inline text-lg ${dynamicClass(
          path,
          Routes.education,
        )}`}
      >
        Education
      </Button>

      <Button
        onClick={() => navigate(`/${Routes.cca}`)}
        variant={"ghost"}
        size="sm"
        className={`hidden lg:inline text-lg ${dynamicClass(path, Routes.cca)}`}
      >
        CCAs
      </Button>

      <Button
        onClick={() => navigate(`/${Routes.blog}`)}
        variant={"ghost"}
        size="sm"
        className={`hidden lg:inline text-lg ${dynamicClass(
          path,
          Routes.blog,
        )}`}
      >
        Blogs
      </Button>

      <Button variant={"ghost"} size="sm" className="hidden lg:inline text-lg">
        <a href="/WU_XIAOYUN_CV_v2.3.pdf" download>
          Resume
        </a>
      </Button>

      <ModeToggle />
    </div>
  );
};

export default Navbar;
