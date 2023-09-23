import styled from "styled-components";

export const Wrap = styled.div`
  /* border: 1px solid orange; */
  position: relative;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .title {
    /* border: 1px solid blue; */
    color: #fff;
    font-size: 7em;
    font-weight: 900;
    align-items: center;
    flex-grow: 1.3;
    padding-top: 20px;
    position: relative;
    display: inline-flex;
    padding-bottom: 5px;

    &::before {
      content: "";
      position: absolute;
      height: 4px;
      background-color: white;
      bottom: 40px;
      width: 100%;
      left: 0;
    }
  }

  .container {
    /* border: 1px solid white; */
    max-width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1.1;
    /* margin-top: 100px; */

    ul {
      padding-bottom: 100px;
      /* border: 1px solid black; */
      width: 85%;
      height: 100%;
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
      transform: translateY(-100px) rotateZ(50deg);
    }
  }
`;
