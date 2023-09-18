import styled from "styled-components";

export const Wrap = styled.div`
  height: calc(100vh - 100px);
  margin-left: 150px;
  margin-right: 50px;
  margin-top: 50px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .box {
    position: relative;
    width: 48.5%;
    height: 100%;
    border-radius: 30px;
    background: rgba(0, 0, 0, 0.8);
  }
`;
