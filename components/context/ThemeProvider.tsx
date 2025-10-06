import { ThemeProvider as NextThemeProvider } from "next-themes";
import React from "react";

const ThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <NextThemeProvider
      attribute='class'
      storageKey='user.preference-theme'
      defaultTheme='system'
      enableColorScheme
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </NextThemeProvider>
  );
};

export default ThemeProvider;
