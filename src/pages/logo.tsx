import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ImageContainer from "../components/ImageContainer";
import { getImages } from "../../services/nfts-processing";
import Gallery from "../components/Gallery";

const LogoContent = () => {
  const [images, setImagesLayer] = useState([]);

  const getImagesLayer = async (layer) => {
    try {
      let data = await getImages(layer);
      setImagesLayer(data);
      console.log("📈This is the data: ", data);
    } catch (err) {
      console.log("🕵️‍♀️This is the error: ", err);
    }
  };

  useEffect(() => {
    getImagesLayer("logo");
  }, []);

  return (
    <Gallery>
      {images?.map((object, index) => {
        return <ImageContainer img={object} key={index} />;
      })}
    </Gallery>
  );
};

export default LogoContent;

const Text = styled.div`
  color: white;
  font-size: 50px;
  font-family: monospace;
`;
