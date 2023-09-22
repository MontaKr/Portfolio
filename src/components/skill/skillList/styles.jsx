import styled from "styled-components";

export const Wrap = styled.div`
  /* border: 2px solid green; */
  position: relative;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    display: flex;
    justify-content: center;

    .box {
      position: relative;
      width: 200px;
      height: 200px;
      transform-style: preserve-3d;
      transition: 1.5s;
      transform: perspective(1000px) rotateY(${(props) => props.degree}deg);
    }

    .btns {
      position: absolute;
      bottom: 100px;
      display: flex;
      gap: 30px;

      .btn {
        position: relative;
        width: 60px;
        height: 60px;
        border: 2px solid #fff;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        &::before {
          content: "";
          position: absolute;
          width: 15px;
          height: 15px;
          border-top: 3px solid #fff;
          border-right: 3px solid #fff;
          transform: rotate(45deg) translate(-2.5px, 2.5px);
        }

        &.prev::before {
          transform: rotate(225deg) translate(-2.5px, 2.5px);
        }

        &:active {
          background: #fff;

          &::before {
            border-top: 3px solid #000;
            border-right: 3px solid #000;
          }
        }
      }
    }
  }
`;

export const Span = styled.span`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform-origin: center;
  transform-style: preserve-3d;
  transform: ${(props) => `rotateY(${props.num * 45}deg)`} translateZ(300px);
  -webkit-box-reflect: below 0px
    linear-gradient(transparent, transparent, #0004);

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    user-select: none;
  }

  span {
    position: absolute;
    padding: 10px 20px;
    bottom: -20px;
    background: #fff;
    border-radius: 20px;
    font-size: 15px;
    color: #000;
  }
`;
