import React, { useContext, useEffect, useState } from "react";
import ContextApp from "../context/ContextApp";
import styled from "styled-components";
import { ethers } from "ethers";
import CompletedMinting from "../components/CompletedMinting";

const ConnectPage = () => {
  const { contractDetails } = useContext(ContextApp);
  const { contractAddress, abi } = contractDetails;
  const { JSONCID } = useContext(ContextApp);
  const { nftContract, setNFTContract } = useContext(ContextApp);
  const [connected, setConnected] = useState(false);
  const [startMint, setStartMint] = useState(false);
  const [account, setAccount] = useState();
  const [contract, setContract] = useState();
  const [completedMint, setCompletedMint] = useState(false);
  const [hash, setHash] = useState();

  const getContract = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner(account);

    let NFTContract = new ethers.Contract(contractAddress, abi, signer);
    console.log("📝Contract: ", NFTContract);
    setNFTContract(NFTContract);
    setTimeout(() => setStartMint(true), 2500);
  };

  const connectWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      console.log("Metamask is installed!");

      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts"
      });
      const walletAccount = accounts[0];
      setAccount(walletAccount);
      setConnected(true);
      await getContract();
    }
  };

  //mumbai.polygonscan.com/tx/{transationhash I think}

  const mint = async (JSONCID) => {
    console.log("JSONCID passed to smart contraxt: ", JSONCID);
    const value = ethers.utils.parseUnits("0.001", "ether"); // convert 0.001 MATIC to wei
    const maticValue = value.div(ethers.utils.parseUnits("1", "ether")); // convert value from wei to Matic
    const transaction = await nftContract.safeMint(JSONCID, maticValue);
    setHash(transaction.hash);
    await transaction.wait();
    setCompletedMint(true);
  };

  useEffect(() => {
    const getDetails = async () => {
      await connectWallet();
    };

    if (contractDetails) {
      getDetails();
    }
  }, [contractDetails]);

  return (
    <>
      <Text>
        <StepText> Step 1:</StepText>
        Connecting Wallet
      </Text>
      {connected && <OutcomeText>Connected with {account}</OutcomeText>}
      {startMint && (
        <Wrapper>
          <StepText> Final Step:</StepText>
          <MintButton onClick={() => mint(JSONCID)}>
            {" "}
            🍬 Let's mint!{" "}
          </MintButton>
        </Wrapper>
      )}
      {completedMint && <CompletedMinting contractAddress={contractAddress} />}
    </>
  );
};

export default ConnectPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Text = styled.div`
  color: white;
  font-size: 20px;
  font-family: monospace;
  margin-top: 20px;
  margin-bottom: 6px;
`;

const StepText = styled(Text)`
  color: ${({ theme }) => theme.colors.quartiary};
`;

const OutcomeText = styled.div`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 20px;
  font-family: monospace;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: ${({ theme }) => theme.colors.quartiary};
  padding: 10px;
  border-radius: 6px;
  width: fit-content;
`;

const MintButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  background: #151923;
  height: 60px;
  margin-top: 20px;
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
