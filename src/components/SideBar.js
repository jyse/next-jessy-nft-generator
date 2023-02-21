import React from "react";
import styled from "styled-components";
import { theme } from "@/styles/Theme";

const SideBar = () => {
  return (
    <Container>
      <Title>
        <h1>Layers</h1>
      </Title>
      <LayerButton>
        <p>Background</p>
        <ItemsText>4 items • 100% Rarity </ItemsText>
      </LayerButton>
      <LayerButton>
        <p>Face</p>
        <ItemsText> 8 items • 100% Rarity </ItemsText>
      </LayerButton>
      {/* <Button>
        <p>Preview</p>
      </Button> */}
    </Container>
  );
};

export default SideBar;

const Container = styled.div`
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
`;

const ItemsText = styled.div`
  margin-top: 5px;
  font-size: 12px;
  color: ${({ theme }) => `${theme.colors.secondaryText}`}; ;
`;

const Button = styled.div`
  background-color: ${({ theme }) => `${theme.colors.secondary}`};
  width: 100px;
  height: 40px;
  margin-left: 40px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => `${theme.colors.quartiary}`};
`;
