import { Button } from "@/components/ui/button";
import React from "react";
import { useNavigate } from "react-router-dom";

export const PageNotFound: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="self-center justify-self-center flex flex-col gap-6">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Page Not Found
      </h1>

      <Button onClick={() => navigate(-1)} variant={"secondary"} size={"lg"}>
        Go Back
      </Button>
    </div>
  );
};

export default PageNotFound;
