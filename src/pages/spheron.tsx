import React, { useEffect, useContext } from "react";
import ContextApp from "../context/ContextApp";
import styled from "styled-components";
import SaveToSpheron from "../components/SaveToSpheron";

const SpheronPage = () => {
  const { nftImages } = useContext(ContextApp);

  return (
    <>
      <SaveToSpheron />
    </>
  );
};

export default SpheronPage;

const Text = styled.div`
  color: white;
  font-size: 20px;
  font-family: monospace;
  margin-top: 6px;
  margin-bottom: 6px;
`;

const StepText = styled(Text)`
  color: ${({ theme }) => theme.colors.quintiary};
`;

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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  margin-top: 150px;
`;
