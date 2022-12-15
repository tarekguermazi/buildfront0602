import React from "react";
import styled from "styled-components";
import PublicationService from "src/modules/publication/publicationService";
// ICONS
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import Translate from "../../Translate";

export default function Header({
  PUBLICATION_TITLE,
  PUBLICATION_CREATED_AT,
  PUBLICATION_TYPE,
}) {
  return (
    <HeaderLayout>
      <span className='categoryBadge'>
        {Translate.Trans("title", PUBLICATION_TYPE)}
      </span>

      <h1>{Translate.Trans("title", PUBLICATION_TITLE)}</h1>

      <div className='data'>
        <div className='dateAndOwner'>
          <span>
            Publié le {PublicationService.pipeDate(PUBLICATION_CREATED_AT)}
          </span>
        </div>
        <br />
        <div className='socials'>
          <span>Partager :</span>
          <button>
            <BsFacebook />
          </button>
          <button>
            <BsTwitter />
          </button>
          <button>
            <BsInstagram />
          </button>
          <button>
            <BsLinkedin />
          </button>
        </div>
      </div>
    </HeaderLayout>
  );
}

const HeaderLayout = styled.section`
  font-family: "Proxima Nova";
  font-style: normal;

  .categoryBadge {
    background: #f8d7da;
    border-radius: 3px;
    color: var(--dark--red);
    padding: 0.4rem 0.5rem;
    font-size: 12px;
    font-family: "Proxima Nova";
  }

  h1 {
    margin: 1rem 0;
    font-size: 40px;
    line-height: 43px;
    text-transform: uppercase;
    color: var(--violet);
  }

  .socials {
    margin-top: 1rem;
    width: 250px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      background-color: transparent;
      border-radius: 50%;
      color: var(--violet);
      font-size: 1.8rem;
    }
  }

  @media (max-width: 767px) {
    width: 100%;
    padding: 0 0.5rem;
  }
`;
