import React from "react";
import styled from "styled-components";

const Gallery = ({ children }) => {
  return <Grid>{children}</Grid>;
};

export default Gallery;

const Grid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 25px;
`;
