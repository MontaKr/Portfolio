import styled from "styled-components";

export const Wrap = styled.div`
  /* position: absolute;
  border: 1px solid white;
  min-height: 100vh;
  inset: 50px 50px 50px 150px;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 30px; */

  height: 90vh;
  min-height: 90vh;
  margin-left: 150px;
  margin-right: 50px;
  margin-top: 50px;

  background: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 30px;

  .text {
    color: #fff;
    font-size: 6vw;
    font-weight: 900;
    flex-grow: 1;
    display: flex;
    align-items: center;
  }

  .container {
    flex-grow: 1.3;

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
