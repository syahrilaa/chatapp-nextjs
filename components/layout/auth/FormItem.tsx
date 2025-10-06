import { cn } from "@lib/cn";
import React from "react";

interface FormItem extends React.PropsWithChildren {
  className?: string;
}

const FormItem: React.FC<FormItem> = ({ className, children }) => {
  return <div className={cn(["relative col-span-6 h-auto w-full", className])}>{children}</div>;
};

export default FormItem;
