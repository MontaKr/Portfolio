import styled from "styled-components";

export const Wrap = styled.div`
  /* border: 2px solid blue; */
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
    flex-grow: 1;
    padding-bottom: 10px;
    position: relative;
    display: inline-flex;
    padding-bottom: 5px;

    &::before {
      content: "";
      position: absolute;

      height: 4px;
      background-color: white;
      bottom: 50px;
      /* width: 120%;
      left: 50%;
      transform: translateX(-50%); */
      width: 100%;
      left: 0;
    }
  }

  .container {
    /* border: 1px solid red; */
    position: relative;
    max-width: 70%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-grow: 1.4;
    padding-bottom: 100px;
  }
`;

export const Card = styled.div`
  position: relative;
  width: 280px;
  height: 280px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;

  &:hover {
    width: 500px;
    transition-delay: 0.5s;

    .circle {
      &::before {
        transition-delay: 0.5s;
        width: 100%;
        height: 100%;
        border-radius: 20px;
        background: #f40103;
        background: ${(props) => props.clr};
      }

      .logo {
        transform: scale(0);
        transition-delay: 0s;
      }
    }

    .product_img {
      transition-delay: 0.75s;
      top: 25%;
      left: 72%;
      height: 300px;
      transform: translate(-50%, -50%) scale(0.7) rotate(15deg);
    }

    .content {
      transition-delay: 0.75s;
      opacity: 1;
      visibility: visible;
      left: 20px;
    }
  }

  .circle {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    &::before {
      content: "";
      position: absolute;
      top: 10;
      left: 12;
      width: 350px;
      height: 350px;
      border-radius: 50%;
      background: #201e1e;
      border: 8px solid ${(props) => props.clr};
      filter: drop-shadow(0 0 10px ${(props) => props.clr})
        drop-shadow(0 0 40px ${(props) => props.clr});
      transition: 0.5s, background 0.5s;
      transition-delay: 0.75s, 1s;
    }

    .logo {
      position: relative;
      width: 300px;
      transition: 0.5s;
      transition-delay: 0.5s;
    }
  }

  .product_img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0) rotate(315deg);
    height: 300px;
    transition: 0.5s ease-in-out;
  }

  .content {
    position: absolute;
    width: 50%;
    left: 20%;
    padding: 20px 20px 20px 40px;
    opacity: 0;
    transition: 0.5s;
    visibility: hidden;

    h2 {
      color: #fff;
      text-transform: uppercase;
      font-size: 3.2em;
      line-height: 1em;
    }

    p {
      margin-top: 20px;
      color: #fff;
      font-size: 1.5em;
      line-height: 1.5em;
      white-space: nowrap;
    }
  }
`;
