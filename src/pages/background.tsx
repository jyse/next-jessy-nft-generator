import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ImageContainer from "../components/ImageContainer";
import { getImages } from "../../services/nfts-processing";
import Gallery from "../components/Gallery";

const BackgroundContent = () => {
  const [images, setImagesLayer] = useState([]);

  const getImagesLayer = async (layer) => {
    try {
      let data = await getImages(layer);
      setImagesLayer(data);
      console.log(data, "what is in result?");
    } catch (err) {
      console.log(err, "WHAT IS IN ERROR 🕵️‍♀️");
    }
  };

  useEffect(() => {
    getImagesLayer("background");
  }, []);

  return (
    <>
      <Text>Background Layer</Text>
      <Gallery>
        {images?.map((object, index) => {
          return <ImageContainer img={object} key={index} />;
        })}
      </Gallery>
    </>
  );
};

export default BackgroundContent;

const Text = styled.div`
  color: white;
  font-size: 46px;
  font-family: monospace;
  padding-bottom: 14px;
`;
