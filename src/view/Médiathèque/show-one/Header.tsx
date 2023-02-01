import React from "react";
import styled from "styled-components";
// ICONS
import Translate from "../../shared/Translate";
import Image from "../../shared/Image";
import {
  Facebook,
  Instagramm,
  Linkedin,
  twitter,
} from "../../../assets/images";
import Date from "../../shared/Date";
import { i18n } from "src/i18n";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

export default function Header({ entity, user, userIsLoading }) {
  return (
    <HeaderLayout>
      <span className="categoryBadge">
        {i18n(`entities.mediatique.enumerators.type.${entity["type"]}`)}
      </span>
      <h1>{Translate.Trans("title", entity)}</h1>

      <div
        className="detail__author"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div className="author__left">
          <div className="left__author__date">
            {Date.DetaillDate(entity?.updatedAt)}
          </div>
        </div>
        <div className="detaillEvenement__socialMedia">
          <div className="socialMedia__title">{i18n("common.Partager")} :</div>
          <div className="detaillEvenement__socialMedia">
            <div>
              <FacebookShareButton url={window.location.href}>
                <FacebookIcon size={35} round />
              </FacebookShareButton>
            </div>

            <div>
              <TwitterShareButton url={window.location.href}>
                <TwitterIcon size={35} round />
              </TwitterShareButton>
            </div>
            <div>
              <LinkedinShareButton url={window.location.href}>
                <LinkedinIcon size={35} round />
              </LinkedinShareButton>
            </div>
          </div>
        </div>
      </div>
    </HeaderLayout>
  );
}

const HeaderLayout = styled.section`
  .categoryBadge {
    background: #f8d7da;
    border-radius: 3px;
    color: var(--dark--red);
    padding: 0.4rem 0.5rem;
    font-size: 12px;
    font-family: "Proxima Nova";
  }
  .author__left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-family: "Proxima Nova";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 25px;
    color: #4f4f4f;
  }

  h1 {
    font-family: "Bebas Neue Pro";
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 43px;
    text-transform: uppercase;
    color: var(--violet);
    margin: 1rem 0;
  }

  @media (max-width: 1171px) {
    h1 {
      font-size: clamp(25px, 5vw, 40px);
      line-height: 1.2;
    }
  }
  .detaillEvenement__socialMedia {
    display: flex;
    padding: 0;
    align-items: center;
    column-gap: 24px;
  }
  @media (max-width: 767px) {
    width: 100%;
    padding: 0 0.5rem;
  }
`;
