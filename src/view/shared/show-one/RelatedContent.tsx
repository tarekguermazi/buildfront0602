import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// SERVICES
import PublicationService from "src/modules/publication/publicationService";
// COMPONENTSS
import SectionHeader from "./components/SectionHeader";
import Translate from "../Translate";
import { i18n } from "src/i18n";

export default function RelatedContent({ type }) {
  // Fetching related entities based on type
  const [related, setRelated] = useState<any[]>([]);
  const [entityIsLoading, setEntityIsLoading] = useState(true);

  const fetchRelatedContent = (type) => {
    PublicationService.getRelated(type).then((value) => {
      value.rows?.map((entry) => {
        setRelated((related) => related.concat(entry));
      });
      setEntityIsLoading(false);
    });
  };
  useEffect(() => {
    fetchRelatedContent(type);
  }, [type]);

  return (
    <RelatedCOntentLayout>
      <SectionHeader title="publications qui peuvent vous intéresser" />
      {entityIsLoading ? (
        <section>
          <h4>{i18n("table.loadingContent")}</h4>
        </section>
      ) : (
        <div className="gridLayout">
          {related?.map((entity) => {
            return (
              <HorizontalCard key={entity["_id"]}>
                {entity["photos"].length > 0 ? (
                  <img src={entity["photos"][0].downloadUrl} alt="" />
                ) : (
                  <div className="cardImage cardThumbnail hasNoThumbnail"></div>
                )}
                <div className="cardContent">
                  <div className="cardHeader">
                    <span className="categoryBadge">{entity["type"]}</span>
                    <span>
                      {PublicationService.pipeDate(entity["updatedAt"])}
                    </span>
                  </div>
                  <Link
                    to={"/Mediatheque/entity/" + entity["_id"]}
                    className="title text__wrap"
                    style={{ maxWidth: 370 }}
                  >
                    <span>{Translate.Trans("title", entity)}</span>
                  </Link>
                </div>
              </HorizontalCard>
            );
          })}
        </div>
      )}
    </RelatedCOntentLayout>
  );
}

// S T Y L E S
const RelatedCOntentLayout = styled.section`
  margin: 5rem 0;
  width: 100%;

  .gridLayout {
    margin-top: 2rem;
    width: 100%;
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  }

  @media (max-width: 767px) {
    width: 100%;
    padding: 0 0.5rem;
  }
`;
const HorizontalCard = styled.div`
  height: 200px;

  display: flex;
  flex-direction: row;
  align-items: center;

  /* LEFT SECTION */
  .cardThumbnail {
    width: 100%;
    height: 200px;
    background-size: cover;
    background-position: center;
    position: relative;
  }
  .hasNoThumbnail {
    background-image: url("https://imgur.com/N1ZiTM4.jpeg");
  }
  .cardImage {
    width: 200px;
    min-width: 200px !important;
    height: 100%;
    overflow: hidden;
  }

  /* LEFT SECTION */
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
