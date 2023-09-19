import React from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Separator } from "@/components/ui/separator";

export const Navbar: React.FC = () => {
	const navigate = useNavigate();
	return (
		<div className="w-full flex flex-row justify-center gap-3 p-3 bg-background text-primary">
			<Button onClick={() => navigate("/aboutme")} variant={"ghost"}>
				About Me
			</Button>

			<Separator orientation="vertical" />

			<Button onClick={() => navigate("/experiences")} variant={"ghost"}>
				Experiences
			</Button>

			<Separator orientation="vertical" />

			<Button onClick={() => navigate("/projects")} variant={"ghost"}>
				Projects
			</Button>

			<Separator orientation="vertical" />

			<Button variant={"ghost"}>
				<a href="/WU_XIAOYUN_CV_v2.3.pdf" download>
					Resume
				</a>
			</Button>

			<Separator orientation="vertical" />

			<Button onClick={() => navigate("/blog")} variant={"ghost"}>
				Blog
			</Button>

			<Separator orientation="vertical" />

			<ModeToggle />
		</div>
	);
};

export default Navbar;
