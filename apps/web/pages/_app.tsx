import React from "react";
import { ColorSchemeProvider } from "../context/color-scheme";

const MyApp = ({ Component, pageProps }: any) => {
  return (
    <ColorSchemeProvider>
      <Component {...pageProps} />
    </ColorSchemeProvider>
  );
};

export default MyApp;
