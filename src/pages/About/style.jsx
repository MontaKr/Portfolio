import styled from "styled-components";

export const Wrap = styled.div`
  height: 100vh; /* or set it to another appropriate value */
  overflow: hidden;

  .containerWrap {
    min-height: 300vh;
    background: #2f323f;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
