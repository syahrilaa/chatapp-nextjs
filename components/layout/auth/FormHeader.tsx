import FormHeaderDescription from "./FormHeaderDescription";
import FormHeaderTitle from "./FormHeaderTitle";
import React from "react";

const FormHeader: React.FC<React.PropsWithChildren> = ({ children }) => {
  const arrayChildren = React.Children.toArray(children);

  return (
    <div className='relative mb-6 w-auto'>
      {arrayChildren.map((child) => {
        if (!React.isValidElement(child)) return null;

        if (child.type !== FormHeaderTitle && child.type !== FormHeaderDescription) {
          throw new Error(
            "The children of the AuthLayout.Header component can only be AuthLayout.HeaderTitle and AuthLayout.HeaderDescription"
          );
        }

        return child;
      })}
    </div>
  );
};

export default FormHeader;
