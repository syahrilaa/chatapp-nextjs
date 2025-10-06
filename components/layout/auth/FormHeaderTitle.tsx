import React from "react";

const FormHeaderTitle: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <h1 className='text-on-surface-high text-2xl font-bold md:text-3xl'>{children}</h1>;
};

export default FormHeaderTitle;
