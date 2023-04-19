import React, { useContext, useEffect, useState } from "react";
import ContextApp from "../context/ContextApp";
import styled from "styled-components";
import GenNFTContainer from "../components/GenNFTContainer";
import { useRouter } from "next/router";

const GeneratePage = () => {
  const { push } = useRouter();
  const { nftImages } = useContext(ContextApp);
  const [images, setNFTImages] = useState([]);
  const [showText, setShowText] = useState(false);

  const makeCollectionMintable = () => {
    console.log("making collection mintable");
    push("/mintable-collection");
  };

  const cancelAction = () => {
    push("/");
  };

  useEffect(() => {
    if (nftImages.length > 0) {
      setNFTImages(nftImages);
      const timer = setTimeout(() => setShowText(true), 3000);
      return () => clearTimeout(timer);
    }
  }, [nftImages]);

  return (
    <>
      {showText && (
        <QuestionArea>
          <h1>Make this collection mintable? </h1>
          <ButtonArea>
            <YesButton onClick={() => makeCollectionMintable()}>
              <h2>Yes</h2>
            </YesButton>
            <NoButton onClick={() => cancelAction()}>
              <h2>No</h2>
            </NoButton>
          </ButtonArea>
        </QuestionArea>
      )}
      <Gallery>
        {images?.map((fileName, index) => {
          return <GenNFTContainer fileName={fileName} key={index} />;
        })}
      </Gallery>
    </>
  );
};
export default GeneratePage;

const Text = styled.div`
  color: white;
  font-size: 20px;
`;

const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-column-gap: 20px;
  grid-row-gap: 20px;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  background: #151923;
  height: 50px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 6px;
  color: ${({ theme }) => `${theme.colors.text}`};
  &:hover {
    background: #212737;
    color: ${({ theme }) => `${theme.colors.tertiary}`};
  }
  &:focus {
    background-color: purple;
  }
`;

const YesButton = styled(Button)`
  width: 80px;
  color: ${({ theme }) => `${theme.colors.quintiary}`};
  &:hover {
    background-color: ${({ theme }) => `${theme.colors.primary}`};
    color: ${({ theme }) => `${theme.colors.tertiary}`};
  }
`;

const NoButton = styled(Button)`
  width: 80px;
  color: ${({ theme }) => `${theme.colors.quartiary}`};
  &:hover {
    background-color: ${({ theme }) => `${theme.colors.primary}`};
    color: ${({ theme }) => `${theme.colors.tertiary}`};
  }
`;

const ButtonArea = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 180px;
  grid-gap: px;
`;

const QuestionArea = styled.div`
  position: absolute;
  bottom: 50px;
`;
