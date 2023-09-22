import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
  height: 100vh;
}`;

export const Wrap = styled.div`
  background: #2f323f;
  position: relative;
  height: 100vh;

  .wrapper {
    overflow-x: hidden;
    position: relative;

    .container {
      display: flex;
      width: 300vw;

      svg {
        z-index: 100;
        position: absolute;
        top: 12em;
        left: 10vw;
        width: 25vw;
        transform-origin: top left;
        transform: rotate(90deg);

        .mask {
          width: 0;
        }
      }
    }
  }
`;
