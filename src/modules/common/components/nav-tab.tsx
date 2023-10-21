import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";

export const NavTab: React.FC<{
  nav: (path: string) => void;
  link: NavLink;
  currentPath: string;
}> = ({ nav, link, currentPath }) => {
  const theme = useTheme();
  const clnm = `relative hidden lg:inline rounded-full text-lg ${
    theme.theme === "dark" ? "text-primary" : "text-background"
  }`; // flip color due to mix-blend-exclusion

  return (
    <Button
      onClick={() => nav(link.path)}
      variant={"link"}
      size="sm"
      className={clnm}
    >
      {currentPath === link.path && (
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
