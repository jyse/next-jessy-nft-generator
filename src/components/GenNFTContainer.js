import React from "react";
import styled from "styled-components";
import Image from "next/image";

const GenNFTContainer = ({ fileName }) => {
  return (
    <ImageCard>
      <Image
        src={require(`/public/output/generatedNFTs/${fileName}`)}
        width="250"
        height={"250"}
        alt="image"
      />
      <Description>
        <h2>{fileName}</h2>
        <SubPar>
          <p>Description: </p>
        </SubPar>
      </Description>
    </ImageCard>
  );
};

export default GenNFTContainer;

const ImageCard = styled.div`
  width: 100%;
  height: 100%;
  background-color: #010f19;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: ${({ theme }) => `1px solid ${theme.colors.secondary}`};
  border-radius: 6px;
`;

const Description = styled.div`
  margin-top: 20px;
  color: white;
  font-size: 14px;
`;

const SubPar = styled.div`
  margin-top: 7px;
  font-size: 12px;
  color: ${({ theme }) => `${theme.colors.secondaryText}`}; ;
`;
