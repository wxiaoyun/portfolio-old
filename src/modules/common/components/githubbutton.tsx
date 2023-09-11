import React from "react";
import { Button } from ".";

const GithubButton: React.FC = () => {
  return (
    <Button
      onClick={() => window.open("https://github.com/ForAeons")!.focus()}
      BtnClass={{ intent: "invisible" }}
    >
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
        alt="github"
        height={35}
        width={35}
      />
    </Button>
  );
};

export default GithubButton;
