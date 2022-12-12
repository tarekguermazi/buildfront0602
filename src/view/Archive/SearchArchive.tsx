import React, { useContext, useEffect, useState } from "react";
import { Etudes, search__archeive } from "src/assets/images";
import { i18n } from "../../i18n";
import Breadcrumb from "../shared/Breadcrumb";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SearchService from "src/modules/Search/SearchService";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import SRPCard from "../Search/SRPCard";
import { BsBox } from "react-icons/bs";

function SearchArchive({ location }) {
  const langue = localStorage.getItem("language");

  const [publications, setPublications] = useState([]);
  const [loading, setLoading] = useState(false);

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
  const getArchivePublications = async () => {
    try {
      setLoading(true);
      let result = await SearchService.getArchivePublications(
        location.archiveSearchString,
        location.archiveFilter,
        0
      );
      setPublications(result.rows);
      console.log("result search", result);
      setLoading(false);
    } catch (error) {
      console.log("err", error);
      setLoading(false);
    }
  };
  useEffect(() => {
    getArchivePublications();
  }, []);

  return (
    <>
      <Breadcrumb
        title={i18n("common.Archives")}
        items={[[i18n("dashboard.menu"), "/"], [i18n("common.Archives")]]}
      />
      <div className="app__archieve__page">
        {loading ? (
          <section>
            <Skeleton height={170} />
          </section>
        ) : (
          <div className="archeive">
            <div className="archieve__content">
              <div className="archieve__left">
                <SearchArchiveLayout>
                  <div>
                    {publications.length > 0 ? (
                      <div>
                        {publications.map((searchResult, index) => {
                          console.log("supports", searchResult["supports"]);
                          let thumbnail: any;
                          if (searchResult["supports"]) {
                            thumbnail = getValidThumbnail(
                              searchResult["supports"]
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
                                date={searchResult["date"]}
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
                                date={searchResult["date"]}
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
                                date={searchResult["date"]}
                                content={searchResult["descriptionEN"]}
                                thumbnail={thumbnail}
                              />
                            );
                          }
                        })}
                      </div>
                    ) : (
                      <h3 id="noDataFound">
                        <BsBox />
                        &nbsp;{i18n("common.noData")}
                      </h3>
                    )}
                  </div>
                </SearchArchiveLayout>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
export default SearchArchive;

const SearchArchiveLayout = styled.div`
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
