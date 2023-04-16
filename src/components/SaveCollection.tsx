import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import NFTsContext from "../context/NFTsContext";
import { storeImages } from "../../services/nfts-processing";

const SaveCollection = ({ setCollectionIPFS, setCID }) => {
  const { nftImages } = useContext(NFTsContext);

  const saveCollection = async (nftImages) => {
    try {
      let ipfsNFTDir = await storeImages(nftImages);
      console.log("🚀 RETRIEVED IPFSNFTDIR 🚀", ipfsNFTDir);
      if (ipfsNFTDir?.IpfsHash) {
        const timer = setTimeout(() => setCollectionIPFS(true), 1500);
        const timerTwo = setTimeout(() => setCID(ipfsNFTDir.IpfsHash), 1500);
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
  font-size: 46px;
  font-family: monospace;
  margin-top: 6px;
  margin-bottom: 6px;
`;

const StepText = styled(Text)`
  color: ${({ theme }) => theme.colors.quintiary};
`;
