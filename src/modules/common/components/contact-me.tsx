import React from "react";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ContactMeBtn: React.FC = () => {
  return (
    <Button variant="ghost" size="icon">
      <Phone className="h-[1.2rem] w-[1.2rem]" />
      <span className="sr-only">Contact Me</span>
    </Button>
  );
};
