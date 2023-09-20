import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    /* overflow-x: hidden; */
  }`;

export const Wrap = styled.div`
  background: #2f323f;
  position: relative;
  display: flex;
  align-items: center;
  width: 300vw;

  .bar {
    z-index: 10;
    position: absolute;
    bottom: 50px;
    width: 60%;
    left: 25vw;
  }
`;
