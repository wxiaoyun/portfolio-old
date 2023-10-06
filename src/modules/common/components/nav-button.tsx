import * as React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { Routes } from "@/router";

export const NavButton: React.FC<{ nav: (path: string) => void }> = ({
  nav,
}) => {
  return (
    <NavigationMenu className="lg:hidden">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <HamburgerMenuIcon className="w-6 h-6" />
          </NavigationMenuTrigger>

          <NavigationMenuContent>
            <ul className="flex flex-col gap-3 p-6">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Button
                    onClick={() => nav(Routes.aboutme)}
                    variant={"ghost"}
                    size="sm"
                    className="text-lg"
                  >
                    About Me
                  </Button>
                </NavigationMenuLink>
              </li>

              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Button
                    onClick={() => nav(Routes.experience)}
                    variant={"ghost"}
                    size="sm"
                    className="text-lg"
                  >
                    Experience
                  </Button>
                </NavigationMenuLink>
              </li>

              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Button
                    onClick={() => nav(Routes.project)}
                    variant={"ghost"}
                    size="sm"
                    className="text-lg"
                  >
                    Project
                  </Button>
                </NavigationMenuLink>
              </li>

              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Button
                    onClick={() => nav(Routes.education)}
                    variant={"ghost"}
                    size="sm"
                    className="text-lg"
                  >
                    Education
                  </Button>
                </NavigationMenuLink>
              </li>

              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Button
                    onClick={() => nav(Routes.cca)}
                    variant={"ghost"}
                    size="sm"
                    className="text-lg"
                  >
                    CCA
                  </Button>
                </NavigationMenuLink>
              </li>

              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Button
                    onClick={() => nav(Routes.blog)}
                    variant={"ghost"}
                    size="sm"
                    className="text-lg"
                  >
                    Blog
                  </Button>
                </NavigationMenuLink>
              </li>

              <li className="row-span-3">
                <Button variant={"ghost"} size="sm" className="text-lg">
                  <a href="/WU_XIAOYUN_CV_v2.5.pdf" download>
                    Resume
                  </a>
                </Button>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
