import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap");
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
  }
  :root {
    --bg : #2f323f
  }

  body {
    min-height: 100vh;
    background: var(--bg)
  }
`;

export const Wrap = styled.div`
  position: relative;
  z-index: 10;

  .navigation {
    position: fixed;
    inset: 120px 0 120px 20px;
    background: ${(props) =>
      props.isContactPage ? "rgba(192, 192, 192, 0.2)" : "rgba(0, 0, 0, 0.2)"};
    backdrop-filter: blur(20px);
    border-radius: 20px;
    width: 75px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s;

    ul {
      display: flex;
      flex-direction: column;
      width: 100%;

      li {
        list-style: none;
        position: relative;
        width: 100%;
        height: 76px;
        border-radius: 12px;
        border: 8px solid transparent;
        transition: 0.5s;

        &::before {
          content: "";
          position: absolute;
          top: -28px;
          right: -10px;
          width: 20px;
          height: 20px;
          background: transparent;
          border-bottom-right-radius: 20px;
          transform: scale(0);
          transform-origin: bottom right;
          transition: 0.5s;
        }

        &::after {
          content: "";
          position: absolute;
          bottom: -28px;
          right: -10px;
          width: 20px;
          height: 20px;
          background: transparent;
          border-top-right-radius: 20px;
          transform: scale(0);
          transform-origin: bottom right;
          transition: 0.5s;
        }

        &.active {
          transform: translateX(30px);
          background: rgba(0, 0, 0, 0.1);

          a {
            display: flex; // Set a to flex
            justify-content: center; // Center horizontally
            align-items: center;

            .icon {
              background: ${(props) => props.activeColor};
              color: #fff;

              &::before {
                opacity: 0.5;
              }
            }
          }
        }

        &.active::before {
          right: 22px;
          transform: scale(1);
        }

        &.active::after {
          right: 22px;
          transform: scale(1);
        }

        a {
          position: relative;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          width: 100%;
          text-align: center;

          .icon {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            min-width: 60px;
            height: 60px;
            border-radius: 10px;
            font-size: 1.75em;
            line-height: 60px;
            border: 6px solid transparent;
            transition: 0.5s;

            &:hover::before {
              content: attr(data-name);
              position: absolute;
              font-size: 12px;
              top: -20px;
              left: 50%;
              transform: translateX(-50%);
              padding: 5px;
              border-radius: 4px;
              color: white;
              background-color: rgba(0, 0, 0, 0.7);
              white-space: nowrap;
              z-index: 1000;
              width: auto;
              min-width: 50px;
              height: auto;
              text-align: center;
              line-height: normal;
            }

            &[data-clicked="true"]:hover::before {
              display: none; // hides the tooltip on hover for the clicked icon
            }

            &::after {
              content: "";
              position: absolute;
              top: 10px;
              left: -60px;
              width: 15px;
              height: 15px;
              background: ${(props) => props.activeColor};
              border: 8px solid #2f323f;
              border-radius: 50%;
            }
          }
        }
      }
    }
  }

  @media (max-width: 1024px) {
    .navigation {
      inset: auto 50px 20px 50px;
      width: auto;
      height: 75px;
      flex-direction: row;

      ul {
        flex-direction: row;
        justify-content: space-around;

        li {
          width: auto;
          height: 75px;

          &::before,
          &::after {
            display: none;
          }

          &.active {
            transform: translateY(-10px);

            .icon::after {
              display: none;
            }
          }

          a {
            .icon {
              min-width: auto;

              &:hover::before {
                top: auto;
                bottom: 30px;
              }
            }
          }

          .icon::after {
            display: none;
          }
        }
      }
    }
  }
`;
