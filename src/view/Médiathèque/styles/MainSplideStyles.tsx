import styled from "styled-components";

const MainSplideStyles = styled.section`
  /* color: #fff; */
  width: var(--cerntered-content);
  height: 507px;
  background-color: #000;

  button {
    padding: 0 !important ;
  }

  .splide {
    /* position: relative; */
    /* background-color: yellow; */

    .splide__pagination__page {
      height: 10px;
      width: 10px;
      border-radius: 0;
    }

    .splide__arrow {
      height: 35px;
      width: 35px;
      position: absolute;
      bottom: 0;

      background-color: rgba(255, 255, 255, 0.3);
      border: 1px solid var(--gray3);
      border-radius: 0.2rem;

      svg {
        fill: #000;
      }
    }
  }

  .horizontalPlayer {
    width: 100% !important;
    height: 507px;
    display: flex;
    align-items: center;
    justify-content: center;

    background-size: cover;
    background-position: center;

    section {
      display: grid;
      grid-template-columns: 467px 500px;
      place-items: center;
      column-gap: 31px;

      .cardThumbnail {
        width: 467px !important;
        height: 350px;
        background-size: cover;
        background-position: center;
        filter: drop-shadow(0px 9px 14px rgba(0, 0, 0, 0.1));
      }
      .hasNoThumbnail {
        background-image: url("https://placehold.jp/467x350.png");
      }

      .textContent {
        width: 500px;
        font-family: "Bebas Neue Pro";
        line-height: 1.2;
        text-align: left;
        color: #fff;
        .horizontalPlayerTitle {
          border: 1px color #000;

          word-break: break-word;
          font-family: "Bebas Neue Pro";
          font-style: normal;
          font-weight: 700;
          font-size: 40px;
          line-height: 43px;
          text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        }

        .horizontalPlayerDescription {
          font-family: "Proxima Nova";
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 22px;
        }
      }

      .dateAndType {
        display: block;
        margin-bottom: 8px;

        span {
          color: #fff;
        }

        .contentType {
          width: 100px;
          height: 30px;
          border: 1px solid #e1011a;
          border-radius: 3px;
          margin-bottom: 1rem;
          font-family: "Proxima Nova";
          font-style: normal;
          font-weight: 400;
          font-size: 15px;
          line-height: 15px;
          color: red;
          padding: 0.3rem 0.5rem;
          display: flex;
          align-items: center;
          justify-content: space-evenly;
        }

        .contentDate {
          font-family: "Proxima Nova";
          font-style: normal;
          font-weight: 400;
          font-size: 12px;
          line-height: 15px;
          color: #ffffff;
        }
      }
    }
  }

  @media (max-width: 767px) {
    display: none;
  }
`;

export default MainSplideStyles;
