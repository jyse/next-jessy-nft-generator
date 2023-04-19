import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import ContextApp from "../context/ContextApp";
import { storeImages } from "../../services/nfts-processing";

const SaveCollection = ({ setCollectionIPFS }) => {
  const { nftImages } = useContext(ContextApp);
  const { setJSONCID } = useContext(ContextApp);

  const saveCollection = async (nftImages) => {
    try {
      let ipfsJSONDir = await storeImages(nftImages);
      console.log(ipfsJSONDir, "JSON DIR HERE IN FRONTEND");
      if (ipfsJSONDir?.IpfsHash) {
        console.log("🐞Retrieved CID🐞: ", ipfsJSONDir.IpfsHash);
        setJSONCID(ipfsJSONDir.IpfsHash);
        const timer = setTimeout(() => setCollectionIPFS(true), 1500);
        return () => clearTimeout(timer);
      }
    } catch (err) {
      console.log("what is error at save-collection.js? ", err);
    }
  };

  useEffect(() => {
    if (nftImages.length > 0) {
      console.log("saving collectiong");
      saveCollection(nftImages);
    }
  }, [nftImages]);

  return (
    <>
      <Text>
        <StepText>Step 1:</StepText>
        Writing collection to an IPFS...
      </Text>
    </>
  );
};

export default SaveCollection;

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
