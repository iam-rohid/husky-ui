import { createTheme, ThemeProvider } from "@husky-ui/react";
import React, { createContext, ReactNode, useMemo, useState } from "react";

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export type ColorScheme = "light" | "dark";

export type ColorSchemeContextType = {
  colorScheme: ColorScheme;
  setColorScheme: (scheme: ColorScheme) => void;
};

export const ColorSchemeContext = createContext<ColorSchemeContextType | null>(
  null
);
export type ColorSchemeProviderProps = {
  children: ReactNode;
};
export const ColorSchemeProvider = ({ children }: ColorSchemeProviderProps) => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");

  const theme = useMemo(
    () => (colorScheme === "light" ? lightTheme : darkTheme),
    [colorScheme]
  );

  return (
    <ColorSchemeContext.Provider
      value={{
        colorScheme,
        setColorScheme,
      }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorSchemeContext.Provider>
  );
};

export const useColorScheme = () => {
  const context = React.useContext(ColorSchemeContext);
  if (context === null) {
    throw new Error("useColorScheme must be used within a ColorSchemeProvider");
  }
  return context;
};
