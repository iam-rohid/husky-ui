import { Global, ThemeProvider as EmotionTP } from "@emotion/react";
import type { StyledObject, Theme } from "../../types";
import { ReactNode } from "react";

export type ThemeProviderProps = {
  children: ReactNode;
  theme: Theme;
  resetCSS?: boolean;
  styles?: StyledObject;
};
export const ThemeProvider = ({
  children,
  theme,
  resetCSS = true,
  styles,
}: ThemeProviderProps) => {
  return (
    <EmotionTP theme={theme}>
      <Global
        styles={(theme) => [
          ...(resetCSS ? [theme.styles.reset] : []),
          theme.styles.global,
          styles,
        ]}
      />
      {children}
    </EmotionTP>
  );
};
