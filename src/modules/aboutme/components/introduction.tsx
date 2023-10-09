import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "@/components/theme-provider";
import {
  aboutme,
  VectorPortraitDarkMode,
  VectorPortraitLightMode,
} from "@/constants";

export const Introduction: React.FC = () => {
  const theme = useTheme();
  const portrait =
    theme.theme === "light" ? VectorPortraitLightMode : VectorPortraitDarkMode;

  // Preload both images to prevent the image from flickering when changing theme
  React.useEffect(() => {
    const lightPortrait = new Image();
    const darkPortrait = new Image();
    lightPortrait.src = VectorPortraitLightMode.src;
    darkPortrait.src = VectorPortraitDarkMode.src;
  }, []);

  return (
    <div className="h-[80vh] mt-[10vh] flex flex-col justify-center items-center gap-6">
      <div className="flex w-full justify-around items-center gap-6">
        <AnimatePresence mode="wait">
          <motion.img
            className="h-52 w-52 aspect-square transition-shadow duration-500 shadow-xl hover:shadow-2xl rounded-full overflow-hidden"
            key={portrait.src}
            src={portrait.src}
            alt={portrait.alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeIn" }}
          />
        </AnimatePresence>
        <div>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Hello.
          </h1>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            I am Xiaoyun
          </h1>
        </div>
      </div>

      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {aboutme.introduction.p1}
      </p>

      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {aboutme.introduction.p2}
      </p>
    </div>
  );
};

export default Introduction;
