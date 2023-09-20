import styled from "styled-components";

export const Wrap = styled.div`
  svg {
    position: absolute;
    top: 12em;
    left: 10vw;
    width: 30vw;
    transform-origin: top left;
    transform: rotate(90deg);

    .mask {
      width: 0;
    }
  }
`;
