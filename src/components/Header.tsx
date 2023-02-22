import React from "react";
import styled from "styled-components";
import { theme } from "../styles/Theme";
import Image from "next/image";
import w3blabLogo from "../../assets/w3blabLogo.png";

const Header = () => {
  return (
    <Wrapper>
      <Image src={w3blabLogo} alt="logo" width="190" height="75" />
      <Title> NFT Generator</Title>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  height: 90px;
  width: 100%;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.secondary}`};
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  color: ${({ theme }) => `${theme.colors.tertiary}`};
  font-size: 35px;
  font-family: "Courier New", Courier, monospace;
  font-weight: 600;
`;
