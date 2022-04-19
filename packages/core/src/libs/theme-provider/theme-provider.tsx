import { Theme, ThemeProvider as EmotionProvider } from "@emotion/react";
import { ReactNode } from "react";
import { defaultTheme } from "../themes";

export const ThemeProvider = ({
  children,
  theme,
}: {
  children: ReactNode;
  theme?: Theme;
}) => {
  return (
    <EmotionProvider theme={theme || defaultTheme}>{children}</EmotionProvider>
  );
};
