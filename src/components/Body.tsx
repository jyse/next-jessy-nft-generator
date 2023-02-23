import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import Welcome from "./Welcome";
import Image from "next/image";

type Props = {
  children: React.ReactNode;
};

const Body = ({ children }: Props) => {
  const [active, setActive] = useState(true);
  const { route, push } = useRouter();
  const [amount, setAmount] = useState();
  const [data, setData] = useState();

  type routeProps = {
    route: string;
  };

  const getImages = (route) => {
    push(route);
  };

  const generateImages = async () => {
    // Perform API call
    push("/generate");

    // const result = await fetch("/api/generate", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     amount: 5
    //   })
    // });

    // const data = await result.json();

    setData(data);

    // if (amount) {

    // }
    // push("/generate");
  };

  return (
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
          <GenerateButton onClick={() => generateImages()}>
            <h1>Generate</h1>
          </GenerateButton>
        </GenerateArea>
      </SideBar>
      <Content>
        <Dots>
          <Title>
            {route === "/" && <Welcome />}
            {route == "/background" && <h1>Background</h1>}
            {route == "/bonsai" && <h1>Bonsai</h1>}
            {route == "/logo" && <h1>Logo</h1>}
            {/* <Image
              src={data?.result ?? ""}
              alt="generatedImg"
              width="100"
              height="100"
            /> */}
          </Title>
          <Gallery>{children}</Gallery>
        </Dots>
      </Content>
    </Main>
  );
};

export default Body;

const Main = styled.div`
  width: 100vw;
  height: 100vh;
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
  margin-top: 10px;
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

const Gallery = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 25px;
`;

const SubPar = styled.div`
  margin-top: 7px;
  font-size: 12px;
  color: ${({ theme }) => `${theme.colors.secondaryText}`}; ;
`;

const Dots = styled.div`
  padding: 40px 70px 40px 50px;
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

const GenerateArea = styled.div`
  width: 100%;
  margin-top: 150px;
`;

const GenerateButton = styled(LayerButton)`
  color: ${({ theme }) => `${theme.colors.quartiary}`};
  &:hover {
    background-color: ${({ theme }) => `${theme.colors.primary}`};
    color: ${({ theme }) => `${theme.colors.quintiary}`};
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
