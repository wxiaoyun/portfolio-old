import React from "react";

import { Separator } from "@/components/ui/separator";
import { Introduction, ToolsAndTech, Hobbies } from "../components/";

export const AboutMe: React.FC = () => {
  return (
    <div className="flex flex-col gap-y-12 items-center mx-6 w-full">
      <Introduction />

      <Separator orientation="horizontal"/>

      <ToolsAndTech />

      <Separator orientation="horizontal"/>

      <Hobbies />
    </div>
  );
};

export default AboutMe;
