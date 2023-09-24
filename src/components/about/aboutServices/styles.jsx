import styled from "styled-components";

export const Wrap = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100%;
  background: #2f323f;

  .container {
    position: absolute;
    inset: 50px 50px 50px 150px;
    background: rgba(0, 0, 0, 0.8);
    border-radius: 30px;
    display: flex;
    flex-direction: column;

    .textBx {
      width: 100%;
      height: 22%;
      display: flex;
      justify-content: center;
      align-items: center;

      span {
        font-size: 7em;
        color: #fff;
        font-weight: 700;
      }
    }

    .serviceBx {
      width: 100%;
      height: 78%;
      display: flex;
      justify-content: center;
      align-items: center;

      .serviceWrap {
        /* border: 1px solid blue; */
        height: 90%;
        width: 90%;
        display: flex;
        justify-content: space-between;

        .cardBx {
          position: relative;
          height: 95%;
          width: 24vw;
          background: #2f323f;
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          transition: 0.5s;

          &:hover {
            transform: translateY(-20px);
          }

          .iconBx {
            /* background: white; */
            position: relative;
            margin-top: 50px;
            width: 100%;
            height: 25%;
            display: flex;
            justify-content: center;
            align-items: center;

            img {
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
              height: 100%;
              object-fit: contain;
            }
          }

          .nameBx {
            /* background: blue; */
            position: relative;
            width: 100%;
            height: 30%;
            display: flex;
            justify-content: center;
            align-items: center;

            span {
              color: #fff;
              font-size: 2.5em;
              font-weight: 600;
            }
          }

          .contentBx {
            /* background: red; */
            position: relative;
            margin-bottom: 50px;
            width: 100%;
            height: 50%;
            display: flex;
            justify-content: center;
            align-items: center;

            span {
              color: #fff;
              padding: 5px 30px;
              font-size: 1.7em;
              font-weight: 400;
              text-align: center;
              line-height: 1.2em;
            }
          }
        }
      }
    }
  }
`;
