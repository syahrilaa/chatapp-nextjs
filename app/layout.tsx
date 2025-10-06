import type { Metadata } from "next";
import "@public/globals.css";
import React from "react";

export const metadata: Metadata = {
  title: "Chat App - Next JS",
  description: "",
};

const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <html lang='en'>
      <body className='antialiased'>{children}</body>
    </html>
  );
};

export default RootLayout;
