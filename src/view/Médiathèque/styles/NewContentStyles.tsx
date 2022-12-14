import styled from "styled-components";

const NewContentStyles = styled.section`
  header {
    margin-bottom: 3rem;

    h1 {
      width: 100%;
      font-size: 2rem;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-end;
      color: #fff;
      line-height: 0.7;

      &:after {
        content: "";
        display: inline-block;
        flex-grow: 1;
        height: 1px;
        background-color: red;
      }
    }
  }

  main {
    width: 100%;
    position: relative;

    /* STYLING THE SPLIDE ARROWS ! */
    .splide__arrow {
      height: 35px;
      width: 35px;
      position: absolute;
      top: -80px;

      background-color: transparent;
      border: 1px solid var(--gray3);
      border-radius: 0.2rem;

      svg {
        fill: #fff;
      }
    }
    button {
      &:nth-child(1) {
        position: relative;
        float: right;
        margin-right: 1rem;
      }
    }

    .VerticlPlayer {
      width: 270px !important;
      height: 330px !important;
      overflow: hidden;

      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .cardThumbnail {
        width: 100%;
        height: 200px;
        background-size: cover;
        background-position: center;
      }
      .hasNoThumbnail {
        background-image: url("https://imgur.com/N1ZiTM4.jpeg");
      }

      .dateAndType {
        height: 30px;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: space-between;

        span {
          color: #fff;
        }

        .contentType {
          width: 100px;
          height: 30px;
          border: 1px solid #e1011a;
          border-radius: 3px;
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

          .icon {
            margin-right: 5px;
          }
        }

        .contentDate {
          color: rgba(255, 255, 255, 1);
          font-family: "Proxima Nova";
          font-style: normal;
          font-weight: 400;
          font-size: 12px;
          line-height: 15px;
          color: #ffffff;
        }
      }

      .verticalPlayerTitle {
        height: 70px;

        span {
          font-family: "Bebas Neue Pro";
          font-style: normal;
          font-weight: 700;
          font-size: 23px;
          line-height: 24px;
          color: #fff !important;
        }
      }
    }
  }

  @media (max-width: 767px) {
    padding: 1rem 0.5rem;
    header {
      h1 {
        font-size: 1.6rem;
      }
    }
    main {
      padding: 0;
      .splide__arrow {
        display: none;
      }
    }
  }
`;

export default NewContentStyles;
