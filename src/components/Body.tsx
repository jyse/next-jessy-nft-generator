import React, { useContext, useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { getGeneratedNFTImgs } from "./../../services/nfts-processing";
import ContextApp from "../context/ContextApp";
import BackgroundContent from "../pages/background";
import BonsaiContent from "../pages/bonsai";
import LogoContent from "../pages/logo";
import GeneratePage from "../pages/generate";
import MintableCollectionPage from "../pages/mintable-collection";
import ConnectWalletPage from "../pages/connect";

const Body = () => {
  const { route, push } = useRouter();
  const [amount, setAmount] = useState();
  const { setNFTImages } = useContext(ContextApp);

  const getImages = (route) => {
    push(route);
  };

  const generateNFTs = async (number) => {
    try {
      let result = await getGeneratedNFTImgs(number);
      console.log("🌸 RESULT OF GENERATED NFTs: ", result);
      setNFTImages(result);
      push("/generate");
    } catch (err) {
      console.log("This error occurred after generating NFTs: ", err);
      push("/error");
    }
  };

  const saveCollection = () => {
    push("/save-collection");
  };

  return (
    <>
      <Main>
        <SideBar>
          <Title>
            <h1>Layers</h1>
          </Title>
          <LayerButton onClick={() => getImages("/background")}>
            <p>Background</p>
            <SubPar>4 items • 100% Rarity </SubPar>
          </LayerButton>
          <LayerButton onClick={() => getImages("/bonsai")}>
            <p>Bonsai</p>
            <SubPar> 8 items • 100% Rarity </SubPar>
          </LayerButton>
          <LayerButton onClick={() => getImages("/logo")}>
            <p>Logo</p>
            <SubPar> 5 items • 100% Rarity </SubPar>
          </LayerButton>
          <GenerateArea>
            <Input
              type="text"
              placeholder="How many NFTs?"
              onChange={(e) => setAmount(e.target.value)}
            />
            <GenerateButton onClick={() => generateNFTs(amount)}>
              <h2>Generate</h2>
            </GenerateButton>
          </GenerateArea>
        </SideBar>
        <Content>
          <Dots>
            <Title>
              {route === "/"}
              {route == "/background" && <BackgroundContent />}
              {route == "/bonsai" && <BonsaiContent />}
              {route == "/logo" && <LogoContent />}
              {route == "/generate" && <GeneratePage />}
              {route == "/mintable-collection" && <MintableCollectionPage />}
              {route == "/connect" && <ConnectWalletPage />}
            </Title>
          </Dots>
        </Content>
      </Main>
      {/* {collection && (
        <Footer>
          <Text>HELLO FOOTER</Text>
        </Footer>
      )} */}
    </>
  );
};

export default Body;

const Main = styled.div`
  position: relative;
  width: 100vw;
  height: calc(100vh - 90px);
  display: grid;
  grid-template-columns: 0.2fr 0.8fr;
  padding: 20px;
`;

const SideBar = styled.div`
  width: 100%;
  padding: 10px;
`;

const Title = styled.div`
  margin: 20px 0px 20px 0px;
  color: ${({ theme }) => `${theme.colors.text}`};
`;

const LayerButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  background: #151923;
  height: 60px;
  margin-top: 6px;
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

const Content = styled.div`
  width: 100%;
  position: relative;
`;

const SubPar = styled.div`
  margin-top: 7px;
  font-size: 12px;
  color: ${({ theme }) => `${theme.colors.secondaryText}`};
`;

const Dots = styled.div`
  padding: 40px 70px 30px 50px;
  position: absolute;
  top: 0;
  z-index: 1;
  margin-top: 60px;
  margin-left: 20px;
  margin-right: 20px;
  width: 1024px;
  height: 90%;
  background-color: transparent;
  background-image: radial-gradient(#ccc 1%, transparent 3%);
  background-size: 50px 50px;
  background-position: 0 0, 30px 30px;
  background-repeat: repeat;
`;

const GenerateArea = styled.div`
  width: 100%;
  margin-top: 30px;
`;

const GenerateButton = styled(LayerButton)`
  color: ${({ theme }) => `${theme.colors.quartiary}`};
  &:hover {
    background-color: ${({ theme }) => `${theme.colors.primary}`};
    color: ${({ theme }) => `${theme.colors.quintiary}`};
  }
`;

const SaveCollectionButton = styled(LayerButton)`
  color: ${({ theme }) => `${theme.colors.quintiary}`};
  &:hover {
    background-color: ${({ theme }) => `${theme.colors.primary}`};
    color: ${({ theme }) => `${theme.colors.tertiary}`};
  }
`;

const Input = styled.input`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  background: #151923;
  height: 60px;
  width: 100%;
  border: none;
  outline: none;
  border-radius: 6px;
  color: ${({ theme }) => `${theme.colors.text}`};
  ::placeholder {
    color: ${({ theme }) => `${theme.colors.tertiary}`};
  }
`;

const Text = styled.div`
  font-size: 20px;
  color: white;
`;
