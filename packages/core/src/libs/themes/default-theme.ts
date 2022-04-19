import { Theme } from "@emotion/react";
import { Colors, Palette } from "../../types";
import {
  black,
  blue,
  gray,
  green,
  indigo,
  purple,
  red,
  sky,
  transparent,
  violet,
  white,
  yellow,
} from "../../libs/colors";

const colors: Colors = {
  blue,
  indigo,
  red,
  green,
  violet,
  purple,
  gray,
  white,
  black,
  transparent,
  sky,
  yellow,
};

const palette: Palette = {
  mode: "light",
  primary: {
    ...blue,
    main: blue[500],
    contrast: white,
  },
  secondary: {
    ...gray,
    main: gray[500],
    contrast: white,
  },
  success: {
    ...green,
    main: green[500],
    contrast: white,
  },
  info: {
    ...sky,
    main: sky[500],
    contrast: white,
  },
  danger: {
    ...red,
    main: red[500],
    contrast: white,
  },
  warning: {
    ...yellow,
    main: yellow[500],
    contrast: white,
  },
};

export const defaultTheme: Theme = {
  colors,
  palette,
  spacing: (factor: number) => `${factor * 4}px`,
  borderRadius: (factor: number) => `${factor * 4}px`,
  contrastRatio: 0.1,
};
