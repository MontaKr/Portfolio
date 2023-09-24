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

    section {
      /* border: 1px solid red; */
      position: relative;
      width: 100%;
      height: 90vh;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      h2 {
        position: relative;
        color: #fff;
        font-size: 12em;
      }
    }
  }
`;

export const Img = styled.img``;
