import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ImageContainer from "../components/ImageContainer";
import { getImages } from "../../services/nfts-processing";

const BonsaiContent = () => {
  const [images, setImagesLayer] = useState([]);
  const getImagesLayer = async (layer) => {
    try {
      let data = await getImages(layer);
      setImagesLayer(data);
      console.log(data, "📝 What is data?");
    } catch (err) {
      console.log(err, "🕵️‍♀️👉 What is the error?");
    }
  };

  useEffect(() => {
    getImagesLayer("bonsai");
  }, []);

  return (
    <>
      {images?.map((object, index) => {
        return <ImageContainer img={object} key={index} />;
      })}
    </>
  );
};

export default BonsaiContent;

const Text = styled.div`
  color: white;
  font-size: 50px;
  font-family: monospace;
`;
