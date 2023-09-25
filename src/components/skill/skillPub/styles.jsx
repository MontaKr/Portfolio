import styled from "styled-components";

export const Wrap = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .title {
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
      bottom: 1.5vw;
      width: 100%;
      left: 0;
    }
  }

  .container {
    max-width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1.1;

    ul {
      padding-bottom: 100px;
      width: 85%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  @media (max-width: 1024px) {
    .title {
      text-align: center;

      &::before {
        display: none;
      }
    }

    .container {
      margin-bottom: 100px;
    }
  }

  @media (max-width: 540px) {
    .title {
      text-align: center;
      font-size: 6em;
    }

    .container {
      margin-bottom: 100px;
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
