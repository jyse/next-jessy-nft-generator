import React from "react";
import ReactFlow, { Background } from "reactflow";
import "reactflow/dist/style.css";
import styled from "styled-components";

const Content = () => {
  return (
    <Main>
      <ReactFlow>
        <Background />
        <Image />
      </ReactFlow>
    </Main>
  );
};

export default Content;

const Main = styled.div`
  width: 100%;
`;

const Image = styled.div`
  background-color: purple;
  width: 200px;
  height: 200px;
`;
