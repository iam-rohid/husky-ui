import { css, Theme } from "@emotion/react";
import { StyledObject } from "../../../types";

const resetStyles = css`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-family: "Poppins", sans-serif;
  }
  button,
  a,
  input,
  select,
  textarea {
    font: inherit;
  }
`;

const globalStyles: StyledObject = (theme) => ({
  body: {
    backgroundColor:
      theme.palette.mode === "dark"
        ? theme.colors.gray[900]
        : theme.colors.gray[50],
  },
});

export const defaultStyles: Theme["styles"] = {
  global: globalStyles,
  reset: resetStyles,
};
