import * as React from "react";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button";
import { NavLinks, RESUME_URL } from "@/constants";
import { useLocation, useNavigate } from "react-router-dom";

export const NavButton: React.FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation()
  const [open, setOpen] = React.useState(false);

  // Close the sheet when the pathname changes
  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="lg:hidden"><HamburgerMenuIcon className="w-6 h-6" /></SheetTrigger>
      <SheetContent side="left" className="space-y-4 py-4">
        <SheetHeader className="px-3 py-2">
          <SheetTitle className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">Navigation Menu</SheetTitle>
          <SheetDescription className="leading-7 [&:not(:first-child)]:mt-6">
            What would you like to know?
          </SheetDescription>
        </SheetHeader>

        <ul className="space-y-1">
          {NavLinks.map((link, index) => (
            <li key={index}>
              <Button
                onClick={() => navigate(`${link.path}?from=${pathname}`)}
                variant={"ghost"}
                size="sm"
                className="w-full justify-start"
              >
                {link.label}
              </Button>
            </li>
          ))}

          <li>
            <Button variant={"ghost"} size="sm" className="w-full justify-start">
              <a href={RESUME_URL} download>
                Resume
              </a>
            </Button>
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  );
};
