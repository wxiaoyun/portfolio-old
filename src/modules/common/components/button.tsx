import React from "react";
import { cva, type VariantProps } from "cva";

export type ButtonVariantProps = VariantProps<typeof ApplyBtnClass>;
export const ApplyBtnClass = cva(["transition-all", "rounded-md", "..."], {
  variants: {
    intent: {
      primary: ["bg-blue-400", "hover:bg-blue-300"],
      secondary: ["bg-slate-400", "hover:bg-slate-300"],
      emerald: ["bg-emerald-400", "hover:bg-emerald-300"],
      purple: ["bg-purple-400", "hover:bg-purple-300"],
      red: ["bg-red-400", "hover:bg-red-300"],
      blue: ["bg-blue-400", "hover:bg-blue-300"],
      yellow: ["bg-yellow-400", "hover:bg-yellow-300"],
      teal: ["bg-teal-400", "hover:bg-teal-300"],
      invisible: ["bg-transparent"],
    },
    text: {
      white: ["text-white", "hover:text-slate-300"],
      black: ["text-black"],
      slate: ["text-slate-700"],
      slatewhite: ["text-slate-100", "hover:text-slate-300"],
    },
    size: {
      small: ["text-sm", "py-1", "px-2"],
      medium: ["text-base", "py-2", "px-4"],
    },
    shadow: {
      small: ["shadow-sm"],
      medium: ["shadow-md"],
      large: ["shadow-lg"],
      none: ["shadow-none"],
    },
  },
  defaultVariants: {
    intent: "primary",
    text: "slate",
    size: "small",
    shadow: "small",
  },
});

export const Button: React.FC<{
  children: React.ReactNode;
  BtnClass?: ButtonVariantProps;
  onClick?: UnaryHandler<React.MouseEvent<HTMLButtonElement, MouseEvent>>;
}> = ({ children, BtnClass, onClick }) => {
  return (
    <button className={ApplyBtnClass(BtnClass)} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
