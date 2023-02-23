import React from "react";
import styled from "styled-components";
import { getImageFiles } from "../../input/config";
import ImageContainer from "../components/ImageContainer";

export async function getStaticProps() {
  const imgFiles = await getImageFiles("bonsai");
  return {
    props: {
      data: imgFiles
    }
  };
}
const BonsaiContent = ({ data }) => {
  return (
    <>
      {data.map((object, index) => {
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
