import { Theme } from "@emotion/react";
import { defaultBreakpoints } from "./breakpoints";
import { defaultColors } from "./colors";
import { defaultPalette } from "./palette";
import { defaultStyles } from "./styles";

export const defaultSpacing: Theme["spacing"] = (factor: number) =>
  `${factor * 4}px`;
export const defaultBorderRadius: Theme["borderRadius"] = (factor: number) =>
  `${factor * 4}px`;

export const defaultTheme: Theme = {
  colors: defaultColors,
  palette: defaultPalette,
  spacing: defaultSpacing,
  borderRadius: defaultBorderRadius,
  contrastRatio: 0.1,
  breakpoints: defaultBreakpoints,
  styles: defaultStyles,
};

export { defaultBreakpoints, defaultColors, defaultPalette, defaultStyles };
