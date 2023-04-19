import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import SaveCollection from "../components/SaveCollection";
import CreateSmartContract from "../components/CreateSmartContract";
import { useRouter } from "next/router";
import ContextApp from "../context/ContextApp";

const MintableCollectionPage = () => {
  const { push } = useRouter();
  const [collectionIPFS, setCollectionIPFS] = useState(false);
  const [readyForSM, setReadyForSM] = useState(false);
  const [deployed, setDeployed] = useState(false);
  const [walletButton, setWalletButton] = useState(false);
  const { contractDetails } = useContext(ContextApp);

  const connectWallet = () => {
    push("/connect");
  };

  useEffect(() => {
    if (collectionIPFS) {
      const timer = setTimeout(() => setReadyForSM(true), 2500);
      return () => clearTimeout(timer);
    }
  }, [collectionIPFS]);

  useEffect(() => {
    if (contractDetails) {
      const timerOne = setTimeout(() => setDeployed(true), 2500);
      const timerTwo = setTimeout(() => setWalletButton(true), 4000);
    }
  }, [contractDetails]);

  return (
    <>
      <SaveCollection setCollectionIPFS={setCollectionIPFS} />
      {collectionIPFS && <OutcomeText>Collection is stored!</OutcomeText>}
      {readyForSM && <CreateSmartContract />}
      {deployed && <OutcomeText>Contract is created & deployed!</OutcomeText>}
      {walletButton && (
        <Wrapper>
          <Text>Ready to mint? </Text>
          <WalletButton onClick={() => connectWallet()}>
            🦊 Connect Wallet
          </WalletButton>
        </Wrapper>
      )}
    </>
  );
};

export default MintableCollectionPage;

const OutcomeText = styled.div`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 20px;
  font-family: monospace;
  margin-top: 40px;
  margin-bottom: 40px;
  background-color: ${({ theme }) => theme.colors.quintiary};
  padding: 10px;
  border-radius: 6px;
  width: fit-content;
`;

const Text = styled.div`
  color: white;
  font-size: 20px;
  font-family: monospace;
  margin-top: 100px;
  margin-bottom: 6px;
  color: ${({ theme }) => theme.colors.tertiary};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  margin-top: 150px;
`;

const WalletButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  background: #151923;
  height: 60px;
  margin-top: 6px;
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
