import React from "react";

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <div className='relative h-full w-full'>{children}</div>;
};

export default Layout;
