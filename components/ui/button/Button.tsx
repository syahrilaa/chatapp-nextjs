import { cn } from "@lib/cn";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "md" | "lg";
  variant?: "solid" | "outline" | "transparent";
}

const Button: React.FC<ButtonProps> = ({
  size = "md",
  variant = "outline",
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={cn([
        "bg-surface-highest inline-flex w-auto cursor-pointer items-center justify-center rounded-full duration-200 ease-in-out",
        {
          "h-9 px-4 text-sm [:has(>img:only-child),:has(>svg:only-child)]:gap-1.5 [:has(>img:only-child),:has(>svg:only-child)]:px-1.5":
            size === "sm",
          "h-10 px-6 [:has(>img:only-child),:has(>svg:only-child)]:gap-2 [:has(>img:only-child),:has(>svg:only-child)]:px-2":
            size === "md",
          "h-11 px-8 [:has(>img:only-child),:has(>svg:only-child)]:gap-2.5 [:has(>img:only-child),:has(>svg:only-child)]:px-2.5":
            size === "lg",
        },
        className,
      ])}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
