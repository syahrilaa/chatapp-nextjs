import FormItem from "./FormItem";
import { cn } from "@lib/cn";
import React from "react";

interface FormProps extends React.PropsWithChildren {
  className?: string;
}

const Form: React.FC<FormProps> = ({ className, children }) => {
  const arrayChildren = React.Children.toArray(children);

  return (
    <div className='relative h-full w-full'>
      <form className={cn(["grid grid-cols-6 gap-6", className])}>
        {arrayChildren.map((child) => {
          if (!React.isValidElement(child)) return null;

          if (child.type !== FormItem) {
            throw new Error("");
          }

          return child;
        })}
      </form>
    </div>
  );
};

export default Form;
