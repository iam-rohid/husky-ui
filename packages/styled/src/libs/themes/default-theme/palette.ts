import { Palette } from "../../../types";
import { blue, gray, green, red, sky, white, yellow } from "../../colors";

export const defaultPalette: Palette = {
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
