import React from "react";

const FormHeaderDescription: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <p className='text-on-surface-high/70 mt-1 max-w-md text-base'>{children}</p>;
};

export default FormHeaderDescription;
