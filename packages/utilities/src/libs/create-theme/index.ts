import { defaultTheme, PaletteMode, Theme } from "@husky-ui/styled";

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

export const createTheme = (theme?: ThemeOptions): Theme => {
  if (!theme) return defaultTheme;

  const spacing: Theme["spacing"] =
    theme.spacing != undefined
      ? typeof theme.spacing === "number"
        ? (value) => `${(theme.spacing as number) * value}px`
        : theme.spacing
      : defaultTheme.spacing;

  const borderRadius: Theme["borderRadius"] =
    theme.borderRadius != undefined
      ? typeof theme.borderRadius === "number"
        ? (value) => `${(theme.borderRadius as number) * value}px`
        : theme.borderRadius
      : defaultTheme.borderRadius;

  return {
    palette: {
      mode: theme.palette?.mode || defaultTheme.palette.mode,
      primary: {
        ...defaultTheme.palette.primary,
        ...theme.palette?.primary,
      },
      secondary: {
        ...defaultTheme.palette.secondary,
        ...theme.palette?.secondary,
      },
      danger: {
        ...defaultTheme.palette.danger,
        ...theme.palette?.danger,
      },
      warning: {
        ...defaultTheme.palette.warning,
        ...theme.palette?.warning,
      },
      info: {
        ...defaultTheme.palette.info,
        ...theme.palette?.info,
      },
      success: {
        ...defaultTheme.palette.success,
        ...theme.palette?.success,
      },
    },
    colors: {
      ...defaultTheme.colors,
      black: theme.colors?.black || defaultTheme.colors.black,
      white: theme.colors?.white || defaultTheme.colors.white,
      transparent: theme.colors?.transparent || defaultTheme.colors.white,
      yellow: {
        ...defaultTheme.colors.yellow,
        ...theme.colors?.yellow,
      },
      blue: {
        ...defaultTheme.colors.blue,
        ...theme.colors?.blue,
      },
      gray: {
        ...defaultTheme.colors.gray,
        ...theme.colors?.gray,
      },
      green: {
        ...defaultTheme.colors.green,
        ...theme.colors?.green,
      },
      red: {
        ...defaultTheme.colors.red,
        ...theme.colors?.red,
      },
      indigo: {
        ...defaultTheme.colors.indigo,
        ...theme.colors?.indigo,
      },
      purple: {
        ...defaultTheme.colors.purple,
        ...theme.colors?.purple,
      },
      sky: {
        ...defaultTheme.colors.sky,
        ...theme.colors?.sky,
      },
      violet: {
        ...defaultTheme.colors.violet,
        ...theme.colors?.violet,
      },
    },
    spacing,
    borderRadius,
    contrastRatio: theme.contrastRatio || defaultTheme.contrastRatio,
  };
};
