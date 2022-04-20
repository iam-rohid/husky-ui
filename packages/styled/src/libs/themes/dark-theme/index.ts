import { blue, gray, green, red, sky, yellow } from "../../colors";
import { createTheme } from "../../create-theme";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: blue[400],
      contrast: gray[800],
    },
    secondary: {
      main: gray[700],
      contrast: gray[50],
    },
    success: {
      main: green[400],
      contrast: gray[800],
    },
    info: {
      main: sky[400],
      contrast: gray[800],
    },
    danger: {
      main: red[400],
      contrast: gray[800],
    },
    warning: {
      main: yellow[400],
      contrast: gray[800],
    },
  },
  contrastRatio: 0.2,
});
