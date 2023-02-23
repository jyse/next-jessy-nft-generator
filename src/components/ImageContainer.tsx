import React from "react";
import Image from "next/image";
import styled from "styled-components";
import picture from "../../input/bonsai/bonsai01.png";

interface ImageContainerProps {
  img: object;
}

const ImageContainer = ({ img }: ImageContainerProps) => {
  let str = img.layer;
  let titleLayer = str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <MainContainer>
      <ImageCard>
        <Image
          src={require(`/input/${img.layer}/${img.fileName}`)}
          width="250"
          height={img.layer == "logo" ? "100" : "250"}
          alt="image"
        />
        <Description>
          <p>{titleLayer} layer</p>
          <SubPar>
            {img.layer == "bonsai"
              ? img.fileName.slice(0, -4) + " Bonsai"
              : img.fileName.slice(0, -4)}
          </SubPar>
        </Description>
      </ImageCard>
    </MainContainer>
  );
};

export default ImageContainer;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

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
