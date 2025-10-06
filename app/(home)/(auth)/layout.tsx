import React from "react";

const AuthLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className='bg-surface relative h-dvh w-full'>
      <div className='mx-auto flex h-full w-full max-w-xl items-center'>
        <div className='bg-surface-high h-auto w-full rounded-3xl px-4 py-11 shadow-lg/5 md:px-6 lg:px-8'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
