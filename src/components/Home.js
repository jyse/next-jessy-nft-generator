import React from "react";
import styled from "styled-components";
import Header from "./Header";
import SideBar from "./SideBar";
import Content from "./Content";

const Home = () => {
  return (
    <Main>
      <Header />
      <Body>
        <SideBar />
        <Content />
      </Body>
    </Main>
  );
};

export default Home;

const Main = styled.div`
  display: flex;
  flex-direction: column;
`;

const Body = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 0.2fr 0.8fr;
`;
