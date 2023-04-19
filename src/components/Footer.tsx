import Image from "next/image";
import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import ContextApp from "../context/ContextApp";

const Footer = () => {
  const { nftImages } = useContext(ContextApp);
  const [images, setNFTImages] = useState([]);

  useEffect(() => {
    if (nftImages.length > 0) {
      setNFTImages(nftImages);
    }
  }, [nftImages]);

  return (
    <Wrapper>
      <MiniGallery>
        {images.map((fileName, index) => (
          <Image
            key={index}
            src={`/output/GeneratedNFTs/${fileName}`}
            alt={`Image ${index + 1}`}
            width={100}
            height={100}
          />
        ))}
      </MiniGallery>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  position: absolute;
  bottom: 0px;
  z-index: 10;
  height: 20vh;
  width: 100%;
  border-top: white;
  padding: 15px;
`;

const MiniGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  grid-gap: 10px;
`;

const MiniGenNFTContainer = styled.div`
  background-color: orange;
  width: 100px;
  height: 100px;
`;
