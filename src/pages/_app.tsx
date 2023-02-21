import Home from "../components/Home";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../styles/Global";
import { theme } from "../styles/Theme";
import { device } from "../styles/Breakpoints";
import DefaultLayout from "../layouts/DefaultLayout";
import type { AppProps } from "next/app";

import React from "react";

interface Props extends AppProps {
  initialTheme: string;
}

function App({ Component, pageProps }: Props) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </ThemeProvider>
  );
}

export default App;
