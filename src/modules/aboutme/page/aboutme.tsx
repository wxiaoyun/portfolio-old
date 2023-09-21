import React from "react";

import { Separator } from "@/components/ui/separator";
import { Introduction, ToolsAndTech, Hobbies } from "../components/";

export const AboutMe: React.FC = () => {
  return (
    <div className="flex flex-col gap-y-24 items-center mx-6">
      <Introduction />

      <Separator orientation="horizontal" className="max-w-2xl" />

      <ToolsAndTech />

      <Separator orientation="horizontal" className="max-w-2xl" />

      <Hobbies />
    </div>
  );
};

export default AboutMe;
