import React from "react";
import styled from "styled-components";
import { getImageFiles } from "../../input/config";
import ImageContainer from "../components/ImageContainer";

export async function getStaticProps() {
  const imgFiles = await getImageFiles("background");
  return {
    props: {
      data: imgFiles
    }
  };
}
const BackgroundContent = ({ data }) => {
  return (
    <>
      {data.map((object, index) => {
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
