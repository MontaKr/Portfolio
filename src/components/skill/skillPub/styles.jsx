import styled from "styled-components";

export const Wrap = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;

  .container {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 100px;

    ul {
      width: 95%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

export const List = styled.li`
  -webkit-box-reflect: below -20px linear-gradient(transparent, transparent, #0004);

  img {
    width: 20vw;
    transition: 1s;

    &:hover {
      transform: rotateZ(50deg);
    }
  }
`;
