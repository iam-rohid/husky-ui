import type { Theme } from "@emotion/react";

declare module "@emotion/react" {
  interface Theme {
    palette: Palette;
    colors: Colors;
    spacing: (value: number) => string;
    borderRadius: (value: number) => string;
    contrastRatio: number;
  }
}

export interface ColorsGroup {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

export interface Colors {
  blue: ColorsGroup;
  indigo: ColorsGroup;
  red: ColorsGroup;
  green: ColorsGroup;
  violet: ColorsGroup;
  purple: ColorsGroup;
  gray: ColorsGroup;
  sky: ColorsGroup;
  yellow: ColorsGroup;
  white: string;
  black: string;
  transparent: string;
}

type PaletteColor = ColorsGroup & {
  main: string;
  contrast: string;
};

export type PaletteMode = "light" | "dark";

export type Palette = {
  mode: PaletteMode;
  primary: PaletteColor;
  secondary: PaletteColor;
  success: PaletteColor;
  info: PaletteColor;
  warning: PaletteColor;
  danger: PaletteColor;
};

export type { Theme };
