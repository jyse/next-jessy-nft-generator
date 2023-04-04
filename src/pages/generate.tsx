import React, { useContext, useState } from "react";
import NFTsContext from "../context/NFTsContext";
import styled from "styled-components";
import GenNFTContainer from "../components/GenNFTContainer";

const GeneratePage = () => {
  const { nftImages } = useContext(NFTsContext);
  console.log(nftImages, "what is in NFTImages");

  return (
    <Gallery>
      {nftImages?.map((fileName, index) => {
        return <GenNFTContainer fileName={fileName} key={index} />;
      })}
    </Gallery>
  );
};
export default GeneratePage;

const Text = styled.div`
  color: white;
  font-size: 46px;
`;

const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-column-gap: 20px;
  grid-row-gap: 20px;
`;
