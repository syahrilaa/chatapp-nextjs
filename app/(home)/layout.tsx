import ThemeProvider from "@components/context/ThemeProvider";
import type { Metadata } from "next";
import { inter } from "@lib/fonts";
import "../styles/globals.css";
import React from "react";

export const metadata: Metadata = {
  title: "Chat App - Next JS",
  description:
    "This application is a portfolio collection belonging to Syahril Akbar A. It is intended for learning and also improving my skills.",
};

const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <html lang='en' suppressHydrationWarning>
      <body style={inter.style} className='antialiased'>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
