import React from "react";
import styled from "styled-components";

interface CompletedMintingProps {
  contractAddress: string;
}

const CompletedMinting = ({ contractAddress }: CompletedMintingProps) => {
  const viewOpenSea = () => {
    // Check your collection on Testnet Open Sea
    const url = `https://testnets.opensea.io/assets/mumbai/${contractAddress}`;

    window.open(url, "_blank");
  };

  return (
    <Wrapper>
      <OutcomeText> NFT has been minted!</OutcomeText>
      <Button onClick={() => viewOpenSea()}>🌊 View Open Sea</Button>
    </Wrapper>
  );
};

export default CompletedMinting;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Text = styled.div`
  color: white;
  font-size: 20px;
  font-family: monospace;
  margin-top: 6px;
  margin-bottom: 6px;
`;

const OutcomeText = styled.div`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 20px;
  font-family: monospace;
  margin-top: 80px;
  margin-bottom: 20px;
  background-color: ${({ theme }) => theme.colors.tertiary};
  padding: 10px;
  border-radius: 6px;
  width: fit-content;
`;

const Button = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  background: #151923;
  height: 60px;
  margin-top: 15px;
  border-radius: 6px;
  width: fit-content;
  font-size: 20px;
  font-family: monospace;
  color: ${({ theme }) => `${theme.colors.quintiary}`};
  background-color: ${({ theme }) => `${theme.colors.secondary}`};

  &:hover {
    background-color: ${({ theme }) => `${theme.colors.primary}`};
    color: ${({ theme }) => `${theme.colors.tertiary}`};
  }
  &:focus {
    background-color: purple;
  }
`;
