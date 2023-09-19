import React from "react";
import { useNavigate } from "react-router-dom";

import { Button } from ".";
import Separator from "./separator";

export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full flex flex-row justify-around p-2 bg-slate-900">
      <p className="text-slate-100">Xiaoyun Wu</p>

      <div className="flex flex-row gap-4">
        <Button
          onClick={() => navigate("/aboutme")}
          BtnClass={{ intent: "invisible", shadow: "none", text: "slatewhite" }}
        >
          About Me
        </Button>

        <Separator orientation="vertical" />

        <Button
          onClick={() => navigate("/experiences")}
          BtnClass={{ intent: "invisible", shadow: "none", text: "slatewhite" }}
        >
          Experiences
        </Button>

        <Separator orientation="vertical" />

        <Button
          onClick={() => navigate("/projects")}
          BtnClass={{ intent: "invisible", shadow: "none", text: "slatewhite" }}
        >
          Projects
        </Button>

        <Separator orientation="vertical" />

        <Button
          onClick={() => navigate("/contact")}
          BtnClass={{ intent: "invisible", shadow: "none", text: "slatewhite" }}
        >
          Contact Me
        </Button>

        <Separator orientation="vertical" />

        <Button
          BtnClass={{ intent: "invisible", shadow: "none", text: "slatewhite" }}
        >
          <a href="/WU_XIAOYUN_CV_v2.3.pdf" download>
            Resume
          </a>
        </Button>

        <Separator orientation="vertical" />

        <Button
          onClick={() => navigate("/blog")}
          BtnClass={{ intent: "invisible", shadow: "none", text: "slatewhite" }}
        >
          Blog
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
