import { blue, gray, green, red, sky, yellow } from "../../colors";
import { createTheme } from "../../create-theme";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      ...blue,
      main: blue[400],
      contrast: gray[800],
    },
    secondary: {
      ...gray,
      main: gray[700],
      contrast: gray[50],
    },
    success: {
      ...green,
      main: green[400],
      contrast: gray[800],
    },
    info: {
      ...sky,
      main: sky[400],
      contrast: gray[800],
    },
    danger: {
      ...red,
      main: red[400],
      contrast: gray[800],
    },
    warning: {
      ...yellow,
      main: yellow[400],
      contrast: gray[800],
    },
  },
  contrastRatio: 0.2,
  styles: {
    global: {
      html: {
        colorScheme: "dark",
      },
      body: {
        backgroundColor: gray[900],
      },
    },
  },
});
