import React, { useContext, useEffect, useState } from "react";
import NFTsContext from "../context/NFTsContext";
import styled from "styled-components";
import GenNFTContainer from "../components/GenNFTContainer";

interface GenerateProps {
  setGenerated: (generated: boolean) => void;
}

const GeneratePage = ({ setGenerated }: GenerateProps) => {
  const { nftImages } = useContext(NFTsContext);
  const [images, setNFTImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (nftImages.length > 0) {
      setNFTImages(nftImages);
      setGenerated(true);
    }
  }, [nftImages]);

  return (
    <>
      <Gallery>
        {images?.map((fileName, index) => {
          return <GenNFTContainer fileName={fileName} key={index} />;
        })}
      </Gallery>
    </>
  );
};
export default GeneratePage;

const Text = styled.div`
  color: white;
  font-size: 46px;
`;

const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-column-gap: 20px;
  grid-row-gap: 20px;
`;
