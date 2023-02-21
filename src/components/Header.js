import React from "react";
import styled from "styled-components";
import { theme } from "@/styles/Theme";
import { logo } from "assets/logo.png";

const Header = () => {
  return (
    <Wrapper>
      <LogoText>
        <h2> NFT Generator</h2>
      </LogoText>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  height: 75px;
  width: 100%;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.secondary}`};
  display: flex;
  align-items: center;
`;

const LogoText = styled.div`
  color: ${({ color }) => `${theme.colors.tertiary}`};
  margin-left: 20px;
`;
