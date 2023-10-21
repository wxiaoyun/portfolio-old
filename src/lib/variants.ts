import { Variants } from "framer-motion";

export const fadeLeftSlideInVariants: Variants = {
  offscreen: {
    x: -150,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.1,
      duration: 1.2,
    },
  },
};

export const fadeRightSlideInVariants: Variants = {
  offscreen: {
    x: 150,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.1,
      duration: 1.2,
    },
  },
};

export const slideVariants = {
  enter: (direction: number) => {
    return {
      x: direction * 300,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction * 300,
      opacity: 0,
    };
  },
};
