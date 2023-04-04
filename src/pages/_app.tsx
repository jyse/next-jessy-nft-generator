import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../styles/Global";
import { theme } from "../styles/Theme";
import DefaultLayout from "../layouts/DefaultLayout";
import type { AppProps } from "next/app";
import NFTsProvider from "../context/NFTsProvider";

import React from "react";

interface Props extends AppProps {
  initialTheme: string;
}

function App({ Component, pageProps }: Props) {
  return (
    <NFTsProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      </ThemeProvider>
    </NFTsProvider>
  );
}

export default App;
