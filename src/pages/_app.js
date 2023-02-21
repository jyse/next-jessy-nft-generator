import Home from "@/components/Home";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles } from "@/styles/Global";
import { theme } from "@/styles/Theme";
import { device } from "@/styles/Breakpoints";

// const Title = styled.h1`
//   color: ${(props) => props.theme.colors.primaryTextColor};
//   font-size: 48px;
//   @media ${device.md} {
//     font-size: 32px;
//   }
// `;

import React from "react";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  );
};

export default App;
