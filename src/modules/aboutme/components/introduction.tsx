import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "@/components/theme-provider";

export const Introduction: React.FC = () => {
  const theme = useTheme();
  const ptSrc =
    theme.theme === "light"
      ? "/vector_portrait_light.png"
      : "/vector_portrait_dark.png";

  return (
    <div className="h-[80vh] mt-[10vh] flex flex-col justify-center items-center gap-6">
      <div className="flex w-full justify-around items-center gap-6">
        <div className="relative h-52 w-52">
          <AnimatePresence mode="wait">
            <motion.img
              className="absolute aspect-square transition-shadow duration-500 shadow-xl hover:shadow-2xl rounded-full overflow-hidden"
              key={ptSrc}
              src={ptSrc}
              alt="vector avatar"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeIn" }}
            />
          </AnimatePresence>
        </div>
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
        I am a Year 2 undergraduate studying at the National University of
        Singapore, learning full stack web development.
      </p>

      <p className="leading-7 [&:not(:first-child)]:mt-6">
        I am an enthusiastic and resilient learner with a passion for
        collaborative work. Embracing challenges is second nature to me, as I
        constantly seek opportunities to acquire new skills and knowledge beyond
        my comfort zone. What sets me apart is my ability to infuse humor and
        friendliness into the team dynamics, creating a positive and enjoyable
        environment for everyone involved.
      </p>
    </div>
  );
};

export default Introduction;
