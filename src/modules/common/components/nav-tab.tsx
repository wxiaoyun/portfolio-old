import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { useLocation, useNavigate } from "react-router-dom";
import { generatePathWithDirection } from "@/util";
import { cn } from "@/lib/utils";

export const NavTab: React.FC<{ link: NavLink; }> = ({ link }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation()
  const theme = useTheme();
  return (
    <Button
      onClick={() => navigate(generatePathWithDirection(pathname, link.path))}
      variant={"link"}
      size="sm"
      className={cn(
        "relative hidden lg:inline rounded-full text-lg",
        theme.theme === "dark" ? "text-primary" : "text-background"
      )}
    >
      {pathname.replace("/", "") === link.path && (
        <motion.div
          layoutId="active-pill"
          className="absolute inset-0 bg-primary z-[5]"
          style={{ borderRadius: 9999 }}
          transition={{ duration: 0.6, type: "spring" }}
        />
      )}
      <span className="relative z-10 mix-blend-exclusion">{link.label}</span>
    </Button>
  );
};
