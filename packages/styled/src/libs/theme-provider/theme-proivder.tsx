import { Global, ThemeProvider as EmotionTP } from "@emotion/react";
import type { StyledObject, Theme } from "../../types";
import { ReactNode } from "react";
import { CSSReset } from "../css-reset";

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
      {resetCSS && <CSSReset />}
      {styles && <Global styles={styles} />}
      {children}
    </EmotionTP>
  );
};
