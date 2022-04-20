import { PaletteMode, Theme } from "../../types";
import { defaultTheme } from "../themes";

export type PaletteColorOption = ColorsGroupOptions & {
  main?: string;
  contrast?: string;
};

export type PaletteOptions = {
  mode?: PaletteMode;
  primary?: PaletteColorOption;
  secondary?: PaletteColorOption;
  success?: PaletteColorOption;
  info?: PaletteColorOption;
  warning?: PaletteColorOption;
  danger?: PaletteColorOption;
};

export type ColorsGroupOptions = {
  50?: string;
  100?: string;
  200?: string;
  300?: string;
  400?: string;
  500?: string;
  600?: string;
  700?: string;
  800?: string;
  900?: string;
};

export type ColorsOptions = {
  blue?: ColorsGroupOptions;
  indigo?: ColorsGroupOptions;
  red?: ColorsGroupOptions;
  green?: ColorsGroupOptions;
  violet?: ColorsGroupOptions;
  purple?: ColorsGroupOptions;
  gray?: ColorsGroupOptions;
  sky?: ColorsGroupOptions;
  yellow?: ColorsGroupOptions;
  white?: string;
  black?: string;
  transparent?: string;
};

export type SpacingOption = number | Theme["spacing"];
export type BorderRadiusOption = number | Theme["borderRadius"];

export type ThemeOptions = {
  palette?: PaletteOptions;
  colors?: ColorsOptions;
  spacing?: SpacingOption;
  borderRadius?: BorderRadiusOption;
  contrastRatio?: number;
};

export const createTheme = (
  themeOptions?: ThemeOptions,
  from?: Theme
): Theme => {
  if (!themeOptions) return defaultTheme;
  const theme = from || defaultTheme;

  const spacing: Theme["spacing"] =
    themeOptions.spacing != undefined
      ? typeof themeOptions.spacing === "number"
        ? (value) => `${(themeOptions.spacing as number) * value}px`
        : themeOptions.spacing
      : theme.spacing;

  const borderRadius: Theme["borderRadius"] =
    themeOptions.borderRadius != undefined
      ? typeof themeOptions.borderRadius === "number"
        ? (value) => `${(themeOptions.borderRadius as number) * value}px`
        : themeOptions.borderRadius
      : theme.borderRadius;

  return {
    palette: {
      mode: themeOptions.palette?.mode || theme.palette.mode,
      primary: {
        ...theme.palette.primary,
        ...themeOptions.palette?.primary,
      },
      secondary: {
        ...theme.palette.secondary,
        ...themeOptions.palette?.secondary,
      },
      danger: {
        ...theme.palette.danger,
        ...themeOptions.palette?.danger,
      },
      warning: {
        ...theme.palette.warning,
        ...themeOptions.palette?.warning,
      },
      info: {
        ...theme.palette.info,
        ...themeOptions.palette?.info,
      },
      success: {
        ...theme.palette.success,
        ...themeOptions.palette?.success,
      },
    },
    colors: {
      ...theme.colors,
      black: themeOptions.colors?.black || theme.colors.black,
      white: themeOptions.colors?.white || theme.colors.white,
      transparent: themeOptions.colors?.transparent || theme.colors.white,
      yellow: {
        ...theme.colors.yellow,
        ...themeOptions.colors?.yellow,
      },
      blue: {
        ...theme.colors.blue,
        ...themeOptions.colors?.blue,
      },
      gray: {
        ...theme.colors.gray,
        ...themeOptions.colors?.gray,
      },
      green: {
        ...theme.colors.green,
        ...themeOptions.colors?.green,
      },
      red: {
        ...theme.colors.red,
        ...themeOptions.colors?.red,
      },
      indigo: {
        ...theme.colors.indigo,
        ...themeOptions.colors?.indigo,
      },
      purple: {
        ...theme.colors.purple,
        ...themeOptions.colors?.purple,
      },
      sky: {
        ...theme.colors.sky,
        ...themeOptions.colors?.sky,
      },
      violet: {
        ...theme.colors.violet,
        ...themeOptions.colors?.violet,
      },
    },
    spacing,
    borderRadius,
    contrastRatio: themeOptions.contrastRatio || theme.contrastRatio,
  };
};
