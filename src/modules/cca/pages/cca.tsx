import React from "react";
import { CvwoExco } from "../components";

export const CCA: React.FC = () => {
  return (
    <div
      className="flex flex-col gap-y-12 items-center mx-6 w-full"
    >
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl self-start">
        CCAs
      </h1>

      <CvwoExco />
    </div>
  );
};
