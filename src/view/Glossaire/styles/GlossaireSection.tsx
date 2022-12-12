import styled from "styled-components";

const GlossaireSection = styled.section`
  width: 100%;
  padding: 1rem 0;

  .sectionHeader {
    span {
      color: var(--violet);
      font-size: 2rem;
      font-weight: 700;

            &:after{
                content: '';
                display: block;
                width: 100%;
                height: 1px;
                background-color: red;
                margin: 1rem 0;
            }
        }
    }
  }

  .sectionBody {
    .glossaireLink {
      display: block;
      width: auto;
      height: 30px;
      padding: 0.4rem 0;
      margin: 1rem 0;

      text-align: left;
      font-weight: 600;
      font-size: 1rem;

      background-color: transparent;
      border: none;
      color: var(--violet);

      &:hover {
        color: red;
        border-bottom: 1px solid red;
      }
    }
  }
`;

export default GlossaireSection;
