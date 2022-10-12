import styled from "styled-components";

const HeroSectionStyle = styled.section`
  color: #fff;
  height: auto;

  .bottomGrid {
    height: 704px;
    width: 100%;
    padding-top: calc(704px - 450px);
    border-top: 5px solid red;
    background-color: var(--violet-dark);
    position: relative;
    top: -200px;

    .loaderPlaceholder {
      width: var(--cerntered-content);
      margin: auto;
      height: 330px;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      .customLoader {
        width: 350px;
      }
    }
  }

  .splideContent {
    width: var(--cerntered-content);
    height: 507px;
    margin: auto;
    background-color: transparent;
    position: relative;
    z-index: 4;
  }
`;

export default HeroSectionStyle;
