import React from "react";
import styled from "styled-components";
import MediathequeService from "src/modules/mediatheque/MediathequeService";
// ICONS
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
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

export default function Header({ entity, user, userIsLoading }) {
  return (
    <HeaderLayout>
      <span className='categoryBadge'>{entity["type"]}</span>
      <h1>{Translate.Trans("title", entity)}</h1>

      <div
        className='detail__author'
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
        <div className='author__left'>
          <div className='left__author__date'>
            {Date.DetaillDate(entity?.updatedAt)}
          </div>
        </div>
        <div className='detaillEvenement__socialMedia'>
          <div className='socialMedia__title'>{i18n("common.Partager")} :</div>
          <Image src={Facebook} />
          <Image src={twitter} />
          <Image src={Instagramm} />
          <Image src={Linkedin} />
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

  @media (max-width: 767px) {
    width: 100%;
    padding: 0 0.5rem;
  }
`;
