import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import NFTsContext from "../context/NFTsContext";
import { storeImages } from "../../services/nfts-processing";
import SaveCollection from "../components/SaveCollection";
import CreateSmartContract from "../components/CreateSmartContract";

const MintableCollectionPage = () => {
  const [collectionIPFS, setCollectionIPFS] = useState(false);
  const [readyForSM, setReadyForSM] = useState(false);
  const [CID, setCID] = useState("");

  useEffect(() => {
    if (collectionIPFS) {
      const timer = setTimeout(() => setReadyForSM(true), 2500);
      return () => clearTimeout(timer);
    }
  }, [collectionIPFS]);

  return (
    <>
      <SaveCollection setCollectionIPFS={setCollectionIPFS} setCID={setCID} />
      {collectionIPFS && <OutcomeText>Collection is stored!</OutcomeText>}
      {readyForSM && <CreateSmartContract CID={CID} />}
    </>
  );
};

export default MintableCollectionPage;

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
