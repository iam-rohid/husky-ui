import { ThemeProvider, lightTheme, darkTheme } from "@husky-ui/react";
import React, {
  createContext,
  ReactNode,
  useEffect,
  useMemo,
  useState,
} from "react";

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

  useEffect(() => {
    document.documentElement.classList.toggle("dark", colorScheme === "dark");
  }, [colorScheme]);

  return (
    <ColorSchemeContext.Provider
      value={{
        colorScheme,
        setColorScheme,
      }}
    >
      <ThemeProvider theme={theme} resetCSS>
        {children}
      </ThemeProvider>
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
