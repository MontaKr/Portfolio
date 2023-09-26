import styled from "styled-components";

export const Wrap = styled.section`
  position: absolute;
  inset: 50px 50px 50px 150px;
  padding: 50px 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: rgba(192, 192, 192, 0.2);
  border-radius: 30px;

  .content {
    max-width: 800px;
    text-align: center;

    h2 {
      font-size: 80px;
      font-weight: 500;
      color: #fff;
    }
  }

  .container {
    /* border: 1px solid blue; */
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 100px;

    .contactInfo {
      width: 40%;
      display: flex;
      flex-direction: column;

      .box {
        margin-left: 40px;
        position: relative;
        padding: 20px 0;
        display: flex;
        align-items: center;

        .icon {
          min-width: 80px;
          height: 80px;
          background: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          font-size: 30px;
        }

        .text {
          display: flex;
          margin-left: 20px;
          font-size: 20px;
          color: #fff;
          flex-direction: column;
          font-weight: 300;

          h3 {
            font-weight: 500;
            color: #00bcd4;
          }

          .linkBx {
            width: 90px;
            display: flex;
            justify-content: space-between;

            .individual-icon {
              text-decoration: none;
              color: inherit;
            }

            .individual-icon:hover {
              color: #00bcd4;
            }
          }
        }
      }
    }

    .contactForm {
      width: 50%;
      padding: 40px;
      background: #fff;
      border-radius: 30px;

      h2 {
        font-size: 30px;
        color: #333;
        font-weight: 500;
      }

      .inputBox {
        position: relative;
        width: 100%;
        margin-top: 10px;

        input {
          width: 100%;
          padding: 5px 0;
          font-size: 16px;
          margin: 10px 0;
          border: none;
          border-bottom: 2px solid #333;
          outline: none;
          resize: none;
        }

        textarea {
          width: 100%;
          height: 30px;
          overflow: hidden;
          padding: 5px 0;
          font-size: 16px;
          margin: 10px 0;
          border: none;
          border-bottom: 2px solid #333;
          outline: none;
          resize: none;
        }

        span {
          position: absolute;
          left: 0;
          padding: 5px 0;
          font-size: 16px;
          margin: 10px 0;
          pointer-events: none;
          transition: 0.5s;
          color: #666;
        }

        input:focus ~ span,
        input:valid ~ span,
        textarea:focus ~ span,
        textarea:valid ~ span {
          color: #e91e63;
          font-size: 12px;
          transform: translateY(-20px);
        }

        input[type="submit"] {
          width: 100px;
          background: #00bcd4;
          color: #fff;
          border: none;
          cursor: pointer;
          padding: 10px;
          font-size: 18px;
          border-radius: 20px;
        }
      }
    }
  }

  @media (max-width: 1024px) {
    inset: 50px 50px 120px 50px;

    .container {
      width: 120%;
      justify-content: space-between;
    }
  }

  @media (max-width: 650px) {
    .content {
      display: none;
    }

    .container {
      flex-direction: column;
      margin-top: 0;
      width: 150%;

      .contactInfo {
        .box:nth-child(1),
        .box:nth-child(2) {
          display: none;
        }

        .box:nth-child(3) {
          .icon {
            display: none;
          }

          .text {
            margin-left: 0;
          }
        }
      }

      .contactForm {
        width: 100%;
      }
    }
  }
`;
