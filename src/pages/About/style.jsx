import styled from "styled-components";

export const Wrap = styled.div`
  border: 1px solid blue;
  height: 100vh; /* or set it to another appropriate value */
  overflow: hidden;

  .containerWrap {
    border: 1px solid red;
    min-height: 300vh;
    background: #2f323f;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
