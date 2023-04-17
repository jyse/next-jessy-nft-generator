import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { createContractAPI } from "../../services/contract-processing";

interface CreateSmartContractProps {
  CID: string;
}

const CreateSmartContract = ({ CID }: CreateSmartContractProps) => {
  const [contractAddress, setContractAddress] = useState("");
  const createContract = async () => {
    let contractAddress = await createContractAPI();
    console.log("🦊🦊🦊 Contract address about to be set 🌸🌸🌸");
    setContractAddress(contractAddress);
  };

  const cancelAction = () => {
    console.log("cancelling action");
  };

  return (
    <>
      <Text>
        <StepText>Step 2: </StepText>Create Smart Contract of collection{" "}
      </Text>
      <ButtonArea>
        <YesButton onClick={() => createContract()}>
          <h2>Yes</h2>
        </YesButton>
        <NoButton onClick={() => cancelAction()}>
          <h2>No</h2>
        </NoButton>
      </ButtonArea>
    </>
  );
};

export default CreateSmartContract;

const Text = styled.div`
  color: white;
  font-size: 46px;
  font-family: monospace;
  margin-top: 6px;
  margin-bottom: 6px;
`;

const StepText = styled(Text)`
  color: ${({ theme }) => theme.colors.quintiary};
`;

const OutcomeText = styled.div`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 46px;
  font-family: monospace;
  margin-top: 40px;
  margin-bottom: 40px;
  background-color: ${({ theme }) => theme.colors.quintiary};
  padding: 10px;
  border-radius: 6px;
  width: fit-content;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  background: #151923;
  height: 50px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 6px;
  color: ${({ theme }) => `${theme.colors.text}`};
  &:hover {
    background: #212737;
    color: ${({ theme }) => `${theme.colors.tertiary}`};
  }
  &:focus {
    background-color: purple;
  }
`;

const YesButton = styled(Button)`
  width: 80px;
  color: ${({ theme }) => `${theme.colors.quintiary}`};
  &:hover {
    background-color: ${({ theme }) => `${theme.colors.primary}`};
    color: ${({ theme }) => `${theme.colors.tertiary}`};
  }
`;

const NoButton = styled(Button)`
  width: 80px;
  color: ${({ theme }) => `${theme.colors.quartiary}`};
  &:hover {
    background-color: ${({ theme }) => `${theme.colors.primary}`};
    color: ${({ theme }) => `${theme.colors.tertiary}`};
  }
`;

const ButtonArea = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 180px;
  grid-gap: px;
`;
