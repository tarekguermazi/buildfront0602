import moment from "moment";
import React, { useEffect, useState } from "react";
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import Skeleton from "react-loading-skeleton";
import { useParams } from "react-router-dom";
import { i18n } from "src/i18n";
import GlossaireService from "src/modules/Glossaire/GlossaireService";
import TenantService from "src/modules/Tenant/TenantService";
import styled from "styled-components";

import BreadCrumbs from "../shared/BreadCrumbs";

export default function ViewDetails() {
  const params = useParams();
  let entityID = params.id;
  const langue = localStorage.getItem("language");

  // FETCH DETAILS OF THAT ONE ENETITY
  const [entity, setEntity] = useState({});
  const [entityIsLoading, setEntityIsLoading] = useState(true);

  const fetchTypeEntitYDetails = (entityID) => {
    GlossaireService.getGloassaireById(entityID).then((value) => {
      setEntity((entity) => ({ ...entity, ...value }));
      setEntityIsLoading(false);

      // fetching user's data once entity is loaded
      TenantService.getTenant(value.tenant).then((userDetails) => {});
    });
  };

  useEffect(() => {
    fetchTypeEntitYDetails(entityID);
  }, []);

  return (
    <section>
      <section className="wideContent">
        <BreadCrumbs view="Glossaire" />
        <MainLayout>
          <section className="rightSection">
            {entityIsLoading ? (
              <Skeleton height={500} />
            ) : (
              <div className="cardContent">
                {langue === "fr" ? (
                  <>
                    <div className="dateAndOwner">
                      <span>
                        {i18n("common.published")}{" "}
                        {moment(entity["createdAt"]).format("l")}
                      </span>
                      <br />
                      <span>
                        {i18n("common.by")}&nbsp;
                        {<strong>{entity["createdBy"]["fullName"]}</strong>}
                      </span>
                    </div>
                    <div className="cardHeader">
                      <span className="categoryBadge">
                        {entity["categorie"]["titleFR"]}
                      </span>
                      <span className="categoryBadgeTheme">
                        {entity["thematique"]["titleFR"]}
                      </span>
                    </div>
                    <span className="titre">
                      {i18n("entities.glossaire.fields.nom")}
                    </span>
                    <span>{entity["nomFR"]}</span>
                    <br />
                    <span className="titre">
                      {i18n("entities.glossaire.fields.abreviation")}
                    </span>
                    <span>{entity["abreviationFR"]}</span>
                    <br />
                    <span className="titre">
                      {i18n("entities.glossaire.fields.definition")}
                    </span>
                    <div className="cardContent">{entity["definitionFR"]}</div>
                    <br />
                  </>
                ) : langue === "ar" ? (
                  <>
                    <div className="dateAndOwner">
                      <span>
                        {i18n("common.published")}{" "}
                        {moment(entity["createdAt"]).format("l")}
                      </span>
                      <br />
                      <span>
                        {i18n("common.by")}&nbsp;
                        {<strong>{entity["createdBy"]["fullName"]}</strong>}
                      </span>
                    </div>
                    <div className="cardHeader">
                      <span className="categoryBadge">
                        {entity["categorie"]["titleAR"]}
                      </span>
                      <span className="categoryBadgeTheme">
                        {entity["thematique"]["titleAR"]}
                      </span>
                    </div>
                    <span className="titre">
                      {i18n("entities.glossaire.fields.nom")}
                    </span>
                    <span>{entity["nomAR"]}</span>
                    <br />
                    <span className="titre">
                      {i18n("entities.glossaire.fields.abreviation")}
                    </span>
                    <span>{entity["abreviationAR"]}</span>
                    <br />
                    <span className="titre">
                      {i18n("entities.glossaire.fields.definition")}
                    </span>
                    <div className="cardContent">{entity["definitionAR"]}</div>
                    <br />
                  </>
                ) : (
                  <>
                    <div className="dateAndOwner">
                      <span>
                        {i18n("common.published")}{" "}
                        {moment(entity["createdAt"]).format("l")}
                      </span>
                      <br />
                      <span>
                        {i18n("common.by")}&nbsp;
                        {<strong>{entity["createdBy"]["fullName"]}</strong>}
                      </span>
                    </div>
                    <div className="cardHeader">
                      <span className="categoryBadge">
                        {entity["categorie"]["titleEN"]}
                      </span>
                      <span className="categoryBadgeTheme">
                        {entity["thematique"]["titleEN"]}
                      </span>
                    </div>
                    <span className="titre">
                      {i18n("entities.glossaire.fields.nom")}
                    </span>
                    <span>{entity["nomEN"]}</span>
                    <br />
                    <span className="titre">
                      {i18n("entities.glossaire.fields.abreviation")}
                    </span>
                    <span>{entity["abreviationEN"]}</span>
                    <br />
                    <span className="titre">
                      {i18n("entities.glossaire.fields.definition")}
                    </span>
                    <div className="cardContent">{entity["definitionEN"]}</div>
                    <br />
                  </>
                )}
              </div>
            )}
            <div className="socials">
              <span>{i18n("common.Partager")}</span>
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
          </section>
        </MainLayout>
        {/* <RelatedContent type={entity["categorie"]} /> */}
      </section>
    </section>
  );
}

const MainLayout = styled.section`
  width: var(--cerntered-content);
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: 1rem auto;

    .rightSection{
        width: 100%;
        /* margin-right: 2.5rem; */

        .socials{
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

    @media (max-width: 767px){
        width: 100%; 
    }
    .cardContent {
        flex-grow: 1;
        height: 100%;
        padding-left: 1rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    
        .cardHeader {
          width: 100%;
          display: flex;
          justify-content: space-between;
          font-size: 12px;
          font-family: "Proxima Nova";
    
          .categoryBadge {
            background: #f8d7da;
            border-radius: 3px;
            color: var(--dark--red);
            padding: 0.4rem 0.5rem;
            font-size: 12px;
            font-family: "Proxima Nova";
          }
          .categoryBadgeTheme {
            background: #d7f8de;
            border-radius: 3px;
            color: #00380c;
            padding: 0.4rem 0.5rem;
            font-size: 12px;
            font-family: "Proxima Nova";
          }
        }
        .titre {
            color: var(--gray3);
        }
        .title {
          margin-top: 1.5rem;
          color: var(--violet);
    
          span {
            font-family: "Bebas Neue Pro";
            font-style: normal;
            font-weight: 700;
            font-size: 23px;
            line-height: 24px;
          }
        }
      }
`;
