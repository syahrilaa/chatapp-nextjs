import { twMerge as merge } from "tailwind-merge";
import clsx, { ClassValue } from "clsx";

export const cn = (...classes: ClassValue[]) => {
  return merge(clsx(classes));
};
