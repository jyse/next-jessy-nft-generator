import styled from "styled-components";

export default function Home() {
  return (
    <MainContainer>
      <Title>HELLO NFT GENERATOR</Title>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  background-color: #0e0f1a;
`;

const Title = styled.div`
  color: blue;
`;
