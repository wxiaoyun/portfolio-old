import React from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Separator } from "@/components/ui/separator";
import { NavButton } from "./navbutton";

export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full flex flex-row justify-between lg:justify-center lg:gap-3 p-3 bg-background text-primary">
      <NavButton />

      <Button
        onClick={() => navigate("/aboutme")}
        variant={"ghost"}
        size="sm"
        className="hidden lg:inline text-lg"
      >
        About Me
      </Button>

      <Separator orientation="vertical" />

      <Button
        onClick={() => navigate("/experiences")}
        variant={"ghost"}
        size="sm"
        className="hidden lg:inline text-lg"
      >
        Experiences
      </Button>

      <Separator orientation="vertical" />

      <Button
        onClick={() => navigate("/projects")}
        variant={"ghost"}
        size="sm"
        className="hidden lg:inline text-lg"
      >
        Projects
      </Button>

      <Separator orientation="vertical" />

      <Button
        onClick={() => navigate("/education")}
        variant={"ghost"}
        size="sm"
        className="hidden lg:inline text-lg"
      >
        Education
      </Button>

      <Separator orientation="vertical" />

      <Button
        onClick={() => navigate("/cca")}
        variant={"ghost"}
        size="sm"
        className="hidden lg:inline text-lg"
      >
        CCAs
      </Button>

      <Separator orientation="vertical" />

      <Button
        onClick={() => navigate("/blog")}
        variant={"ghost"}
        size="sm"
        className="hidden lg:inline text-lg"
      >
        Blogs
      </Button>

      <Separator orientation="vertical" />

      <Button variant={"ghost"} size="sm" className="hidden lg:inline text-lg">
        <a href="/WU_XIAOYUN_CV_v2.3.pdf" download>
          Resume
        </a>
      </Button>

      <Separator orientation="vertical" />

      <ModeToggle />
    </div>
  );
};

export default Navbar;
