import styled from "styled-components";

export const Box = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100%;
  background: #2f323f;

  .container {
    position: absolute;
    inset: 50px 50px 50px 150px;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 30px;

    .skillContainer {
      width: 100%;
      display: flex;
      align-items: center;
      height: 15vh;
      padding: 0px 40px;

      ul {
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-around;
        align-items: center;
        width: 100%;

        li {
          background: #fff;
          border-radius: 50px;
          width: 17vw;
          height: 10vh;
          display: flex;
          justify-content: center;
          align-items: center;
          opacity: 0;
          transform: translateX(-20px);
          box-shadow: 10px 10px 2px rgba(255, 255, 255, 0.2);

          .icon {
            position: relative;
            top: 3px;
            font-size: 25px;
          }

          span {
            font-size: 1.5vw;
            font-weight: 500;
            margin-left: 20px;
          }
        }
      }
    }
  }

  @media (max-width: 1024px) {
    .container {
      inset: 50px 50px 120px 50px;
    }
  }

  @media (max-width: 870px) {
    .container .skillContainer ul {
      flex-direction: column;

      li {
        width: 80%;
        margin-bottom: 15px;
        height: 6vh;
        flex-wrap: nowrap;
      }
    }
  }
`;

export const Wrap = styled.div`
  position: relative;
  top: 15px;
  display: grid;
  place-items: center;
  width: 26vw;
  height: 26vw;
  opacity: 0;
  transform: translateY(-50px);

  &::before {
    content: "MontaKr";
    position: absolute;
    bottom: 0;
    font-size: 1vw;
    right: 15px;
    color: #fff;
  }

  .neon,
  .border {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    overflow: hidden;
  }

  .neon {
    filter: blur(10px);
    opacity: 0.5;
    z-index: 1;
  }

  .border {
    z-index: 2;
  }

  .gradient {
    position: absolute;
    inset: -200px;
    background: conic-gradient(
      from 0deg at var(--gradient-pos-x) var(--gradient-pos-y),
      #1e87ff,
      #5c13c4,
      #ff0033,
      #ffda00,
      #64bc26,
      #1e87ff
    );
    border-radius: 50%;
    animation: rotate 4s linear infinite;
  }

  .imgContainer {
    position: relative;
    width: 25vw;
    height: 25vw;
    z-index: 3;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
    }
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @media (max-width: 701px) {
    width: 200px;
    height: 200px;

    .imgContainer {
      width: 180px;
      height: 180px;
    }
  }
`;
