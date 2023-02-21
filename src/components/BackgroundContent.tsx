import React from "react";
import styled from "styled-components";
import picture from "input/background/lemons.png";
import Image from "next/image";
import { theme } from "../styles/Theme";

const BackgroundContent = () => {
  return (
    <>
      <ImageContainer>
        <ImageCard>
          <Image src={picture} width="250" height="250" alt="image" />
          <Description>
            <p>Background Layer</p>
            <SubPar> Lemons </SubPar>
          </Description>
        </ImageCard>
      </ImageContainer>
      <ImageContainer>
        <ImageCard>
          <Image src={picture} width="250" height="250" alt="image" />
          <Description>
            <p>Background Layer</p>
            <SubPar> Lemons </SubPar>
          </Description>
        </ImageCard>
      </ImageContainer>
      <ImageContainer>
        <ImageCard>
          <Image src={picture} width="250" height="250" alt="image" />
          <Description>
            <p>Background Layer</p>
            <SubPar> Lemons </SubPar>
          </Description>
        </ImageCard>
      </ImageContainer>
      <ImageContainer>
        <ImageCard>
          <Image src={picture} width="250" height="250" alt="image" />
          <Description>
            <p>Background Layer</p>
            <SubPar> Lemons </SubPar>
          </Description>
        </ImageCard>
      </ImageContainer>
      <ImageContainer>
        <ImageCard>
          <Image src={picture} width="250" height="250" alt="image" />
          <Description>
            <p>Background Layer</p>
            <SubPar> Lemons </SubPar>
          </Description>
        </ImageCard>
      </ImageContainer>
      <ImageContainer>
        <ImageCard>
          <Image src={picture} width="250" height="250" alt="image" />
          <Description>
            <p>Background Layer</p>
            <SubPar> Lemons </SubPar>
          </Description>
        </ImageCard>
      </ImageContainer>
    </>
  );
};

export default BackgroundContent;
const ImageContainer = styled.div`
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

const Dots = styled.div`
  padding: 80px;
  position: absolute;
  top: 0;
  z-index: 1;
  margin-top: 60px;
  margin-left: 20px;
  margin-right: 20px;
  width: 1024px;
  height: 1024px;
  background-color: transparent;
  background-image: radial-gradient(#ccc 1%, transparent 3%);
  background-size: 50px 50px;
  background-position: 0 0, 30px 30px;
  background-repeat: repeat;
`;

const SubPar = styled.div`
  margin-top: 7px;
  font-size: 12px;
  color: ${({ theme }) => `${theme.colors.secondaryText}`}; ;
`;
