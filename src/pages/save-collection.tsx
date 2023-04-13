import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import NFTsContext from "../context/NFTsContext";
import { storeImages } from "../../services/nfts-processing";

const SaveCollectionPage = () => {
  const { nftImages } = useContext(NFTsContext);

  const saveCollection = async (nftImages) => {
    try {
      let status = await storeImages(nftImages);
      console.log("The status of storing images is: ", status);
    } catch (err) {
      console.log("what is error at save-collection.js? ", err);
    }
  };

  useEffect(() => {
    if (nftImages.length > 0) {
      saveCollection(nftImages);
    }
  }, [nftImages]);

  return <Text>Saving collection...</Text>;
};

export default SaveCollectionPage;

const Text = styled.div`
  color: white;
  font-size: 46px;
  font-family: monospace;
`;
