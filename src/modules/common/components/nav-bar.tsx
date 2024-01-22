import React from "react";
import { Button } from "@/components/ui/button";
import { RESUME_URL, NavLinks } from "@/constants";
import { NavTab, NavButton, ModeToggle, ContactBtn } from ".";

export const Navbar: React.FC = () => {
  return (
    <div className="w-full flex flex-row items-center justify-between lg:justify-center lg:gap-3 p-3">
      <NavButton />

      {NavLinks.map((link, index) => (
        <NavTab key={index} link={link} />
      ))}

      <Button variant={"link"} size="sm" className="hidden lg:inline text-lg">
        <a href={RESUME_URL} download>
          <span>Resume</span>
        </a>
      </Button>

      <ContactBtn />
      <ModeToggle />
    </div>
  );
};

export default Navbar;
