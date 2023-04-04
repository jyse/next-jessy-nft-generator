import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ImageContainer from "../components/ImageContainer";
import { getImages } from "../../services/nfts-processing";

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
      {images?.map((object, index) => {
        return <ImageContainer img={object} key={index} />;
      })}
    </>
  );
};

export default BackgroundContent;

const Text = styled.div`
  color: white;
  font-size: 50px;
  font-family: monospace;
`;
