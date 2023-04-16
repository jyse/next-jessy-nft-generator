import React from "react";
import styled from "styled-components";
import Image from "next/image";
import w3blabLogo from "../../assets/w3blabLogo.png";
import spheronLogo from "../../assets/spheronLogo.png";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import Link from "next/link";

const Header = () => {
  return (
    <Wrapper>
      <Left>
        <Image src={w3blabLogo} alt="logo" width="190" height="75" />
        <Title> NFT Generator</Title>
      </Left>
      <Right>
        <Image src={spheronLogo} alt="spheron-logo" width="180" height="60" />
        <Link href="/">
          <ResetIcon />
        </Link>
      </Right>
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
  justify-content: space-between;
  padding-right: 30px;
`;

const Title = styled.div`
  color: ${({ theme }) => `${theme.colors.tertiary}`};
  font-size: 35px;
  font-family: "Courier New", Courier, monospace;
  font-weight: 600;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
`;

const ResetIcon = styled(RestartAltIcon)`
  color: ${({ theme }) => theme.colors.quintiary};
  font-size: 70px;
  margin-left: 50px;
  background-color: #212637;
  border-radius: 8px;
`;
