import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { postToSpheron } from "../../services/spheron-processing";
import ContextApp from "../context/ContextApp";

const SaveToSpheron = () => {
  const { nftImages } = useContext(ContextApp);

  const uploadToSpheron = async () => {
    try {
      let result = await postToSpheron();
      console.log(result, "what is result");
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  useEffect(() => {
    if (nftImages.length > 0) {
      console.log("saving to Spheron");
      uploadToSpheron(nftImages);
    }
  }, [nftImages]);

  return (
    <>
      <Text>
        <StepText>Step 1:</StepText>
        Writing collection to an IPFS...
      </Text>
    </>
  );
};

export default SaveToSpheron;

const Text = styled.div`
  color: white;
  font-size: 20px;
  font-family: monospace;
  margin-top: 6px;
  margin-bottom: 6px;
`;

const StepText = styled(Text)`
  color: ${({ theme }) => theme.colors.quintiary};
`;
