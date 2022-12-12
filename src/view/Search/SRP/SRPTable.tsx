import React, { useContext } from "react";
import styled from "styled-components";
import Skeleton from "react-loading-skeleton";
import { SearchContext } from "../SearchContext";
// COMPONENTS
import SRPCard from "../SRPCard";
// ICONS
import { BsBox } from "react-icons/bs";
import Breadcrumb from "src/view/shared/Breadcrumb";
import { i18n } from "src/i18n";

export default function SRPTable({ currentPostsToShow }) {
  // GLOBAL STATE
  const { isLoading } = useContext(SearchContext);
  const langue = localStorage.getItem("language");
  console.log("currentPostsToShow", currentPostsToShow);
  // HELPER FUNCTION
  const getValidThumbnail = (attachmentsArray) => {
    const acceptableExtions = "png, jpg, jpeg, gif";
    let fakeUrl = "https://via.placeholder.com/270x175";
    attachmentsArray.forEach((att) => {
      if (att.downloadUrl)
        if (att.downloadUrl.length >= 1) {
          const urlExtension = att.downloadUrl.substring(
            att.downloadUrl.lastIndexOf(".") + 1,
            att.downloadUrl.length
          );
          if (acceptableExtions.includes(urlExtension)) {
            fakeUrl = att.downloadUrl;
          }
        }
    });
    return fakeUrl;
  };

  return (
    <div>
      <SRPDataLayout>
        {
          // ONCE LOADING IS DONE
          isLoading === true ? (
            <section>
              <Skeleton height={170} />
            </section>
          ) : (
            <section>
              {currentPostsToShow.count > 0 ? (
                <section>
                  {currentPostsToShow.rows.rowsEvent.length > 0 ? (
                    <>
                      <Breadcrumb
                        title={i18n("menu.Evènements")}
                        items={
                          [
                            // [i18n("dashboard.menu"), "/"],
                            // [i18n("menu.Evènements")],
                          ]
                        }
                      />
                      {currentPostsToShow.rows.rowsEvent.map(
                        (searchResult, index) => {
                          let thumbnail: any;
                          if (searchResult.supports.length >= 1) {
                            thumbnail = getValidThumbnail(
                              searchResult.supports
                            );
                          }
                          if (langue === "fr") {
                            return (
                              <SRPCard
                                type={searchResult["category"]["titleFR"]}
                                title={searchResult["titleFR"]}
                                entite={"Evenements"}
                                key={index}
                                _id={searchResult["_id"] ?? 0}
                                date={searchResult["updatedAt"]}
                                content={searchResult["descriptionFR"]}
                                thumbnail={thumbnail}
                              />
                            );
                          } else if (langue === "ar") {
                            return (
                              <SRPCard
                                type={searchResult["category"]["titleAR"]}
                                title={searchResult["titleAR"]}
                                entite={"Evenements"}
                                key={index}
                                _id={searchResult["_id"] ?? 0}
                                date={searchResult["updatedAt"]}
                                content={searchResult["descriptionAR"]}
                                thumbnail={thumbnail}
                              />
                            );
                          } else if (langue === "en") {
                            return (
                              <SRPCard
                                type={searchResult["category"]["titleEN"]}
                                title={searchResult["titleEN"]}
                                entite={"Evenements"}
                                key={index}
                                _id={searchResult["_id"] ?? 0}
                                date={searchResult["updatedAt"]}
                                content={searchResult["descriptionEN"]}
                                thumbnail={thumbnail}
                              />
                            );
                          }
                        }
                      )}
                    </>
                  ) : null}
                  {currentPostsToShow.rows.rowsPublication.length > 0 ? (
                    <>
                      <Breadcrumb
                        title={i18n("menu.Publications")}
                        items={
                          [
                            // [i18n("dashboard.menu"), "/"],
                            // [i18n("menu.Publications")],
                          ]
                        }
                      />
                      {currentPostsToShow.rows.rowsPublication.map(
                        (searchResult, index) => {
                          let thumbnail: any;
                          if (searchResult.supports.length >= 1) {
                            thumbnail = getValidThumbnail(
                              searchResult.supports
                            );
                          }
                          if (langue === "fr") {
                            return (
                              <SRPCard
                                type={searchResult["category"]["titleFR"]}
                                title={searchResult["titleFR"]}
                                entite={"Publications"}
                                key={index}
                                _id={searchResult["_id"] ?? 0}
                                date={searchResult["updatedAt"]}
                                content={searchResult["descriptionFR"]}
                                thumbnail={thumbnail}
                              />
                            );
                          } else if (langue === "ar") {
                            return (
                              <SRPCard
                                type={searchResult["category"]["titleAR"]}
                                title={searchResult["titleAR"]}
                                entite={"Publications"}
                                key={index}
                                _id={searchResult["_id"] ?? 0}
                                date={searchResult["updatedAt"]}
                                content={searchResult["descriptionAR"]}
                                thumbnail={thumbnail}
                              />
                            );
                          } else if (langue === "en") {
                            return (
                              <SRPCard
                                type={searchResult["category"]["titleEN"]}
                                title={searchResult["titleEN"]}
                                entite={"Publications"}
                                key={index}
                                _id={searchResult["_id"] ?? 0}
                                date={searchResult["updatedAt"]}
                                content={searchResult["descriptionEN"]}
                                thumbnail={thumbnail}
                              />
                            );
                          }
                        }
                      )}
                    </>
                  ) : null}
                  {currentPostsToShow.rows.rowsGlosaire.length > 0 ? (
                    <>
                      <Breadcrumb
                        title={i18n("menu.Glossaire")}
                        items={
                          [
                            // [i18n("dashboard.menu"), "/"],
                            // [i18n("menu.Glossaire")],
                          ]
                        }
                      />
                      {currentPostsToShow.rows.rowsGlosaire.map(
                        (searchResult, index) => {
                          let thumbnail: any;
                          // if (searchResult.supports.length >= 1) {
                          //   thumbnail = getValidThumbnail(
                          //     searchResult.supports
                          //   );
                          // }
                          if (langue === "fr") {
                            return (
                              <SRPCard
                                type={searchResult["categorie"]["titleFR"]}
                                title={searchResult["nomFR"]}
                                entite={"Glossaire"}
                                key={index}
                                _id={searchResult["_id"] ?? 0}
                                date={searchResult["updatedAt"]}
                                content={searchResult["definitionFR"]}
                                thumbnail={thumbnail}
                              />
                            );
                          } else if (langue === "ar") {
                            return (
                              <SRPCard
                                type={searchResult["categorie"]["titleAR"]}
                                title={searchResult["nomAR"]}
                                entite={"Glossaire"}
                                key={index}
                                _id={searchResult["_id"] ?? 0}
                                date={searchResult["updatedAt"]}
                                content={searchResult["definitionAR"]}
                                thumbnail={thumbnail}
                              />
                            );
                          } else if (langue === "en") {
                            return (
                              <SRPCard
                                type={searchResult["categorie"]["titleEN"]}
                                title={searchResult["nomEN"]}
                                entite={"Glossaire"}
                                key={index}
                                _id={searchResult["_id"] ?? 0}
                                date={searchResult["updatedAt"]}
                                content={searchResult["definitionEN"]}
                                thumbnail={thumbnail}
                              />
                            );
                          }
                        }
                      )}
                    </>
                  ) : null}
                  {currentPostsToShow.rows.rowsMediatheque.length > 0 ? (
                    <>
                      <Breadcrumb
                        title={i18n("menu.Médiathèque")}
                        items={
                          [
                            // [i18n("dashboard.menu"), "/"],
                            // [i18n("menu.Médiathèque")],
                          ]
                        }
                      />
                      {currentPostsToShow.rows.rowsMediatheque.map(
                        (searchResult, index) => {
                          let thumbnail: any;
                          // if (searchResult.supports.length >= 1) {
                          //   thumbnail = getValidThumbnail(
                          //     searchResult.supports
                          //   );
                          // }
                          if (langue === "fr") {
                            return (
                              <SRPCard
                                type={searchResult["type"]}
                                title={searchResult["titleFR"]}
                                entite={"Mediatheque/entity"}
                                key={index}
                                _id={searchResult["_id"] ?? 0}
                                date={searchResult["updatedAt"]}
                                content={searchResult["descriptionFR"]}
                                thumbnail={thumbnail}
                              />
                            );
                          } else if (langue === "ar") {
                            return (
                              <SRPCard
                                type={searchResult["type"]}
                                title={searchResult["titleAR"]}
                                entite={"Mediatheque/entity"}
                                key={index}
                                _id={searchResult["_id"] ?? 0}
                                date={searchResult["updatedAt"]}
                                content={searchResult["descriptionAR"]}
                                thumbnail={thumbnail}
                              />
                            );
                          } else if (langue === "en") {
                            return (
                              <SRPCard
                                type={searchResult["type"]}
                                title={searchResult["titleEN"]}
                                entite={"Mediatheque/entity"}
                                key={index}
                                _id={searchResult["_id"] ?? 0}
                                date={searchResult["updatedAt"]}
                                content={searchResult["descriptionEN"]}
                                thumbnail={thumbnail}
                              />
                            );
                          }
                        }
                      )}
                    </>
                  ) : null}
                </section>
              ) : (
                <h3 id="noDataFound">
                  <BsBox />
                  &nbsp;No data found !
                </h3>
              )}
            </section>
          )
        }
      </SRPDataLayout>
    </div>
  );
}

const SRPDataLayout = styled.div`
  width: 100%;
  margin: 1rem 0;

  #noDataFound {
    font-family: "Proxima Nova";
    font-style: normal;
    font-weight: 100;
    font-size: 1.5rem;
    text-align: center;
    color: #c7c6c6;

    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;
