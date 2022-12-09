import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import SearchService from "src/modules/Search/SearchService";
import { SearchContext } from "../SearchContext";

// COMPONENTS
import SRPTable from "./SRPTable";
import SRPFooter from "./SRPFooter";
import "react-loading-skeleton/dist/skeleton.css";
import { i18n } from "src/i18n";
import Breadcrumb from "src/view/shared/Breadcrumb";

export default function SearchResults({ location }) {
  // GLOBAL STATE
  const {
    setIsLoading,
    SRP,
    setSRP,
    searchString,
    publicationFilter,
    setcurrentPageIndex,
  } = useContext(SearchContext);

  const searchPublications = (SEARCH_STRING: string) => {
    setIsLoading(true);
    SearchService.getSearchResultsForPublicationsBasedOnSearchString(
      SEARCH_STRING,
      publicationFilter,
      0
    ).then((res) => {
      setcurrentPageIndex(0);
      setSRP(res);
      setIsLoading(false);
    });
  };
  console.log("SRP ==> ", SRP);
  // HANDLING SUB FILTER (date / name)
  const handleSubFilter = (event) => {
    setIsLoading(true);
    setSRP([]);
    const FILTER_STRING = `&orderBy=[${event.target.value}]`;
    // redo the search using chosen option
    SearchService.getSearchResultsForPublicationsBasedOnSearchString(
      searchString,
      FILTER_STRING,
      0
    )
      .then((res) => {
        setSRP((SRP) => SRP.concat(res));
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    searchPublications(location.HOME_SEARCH_STRING);
  }, []);
  let currentPostsToShow: any[] = [];
  if (SRP.length >= 1)
    if (SRP[0].rows.length >= 1) currentPostsToShow = SRP[0].rows;

  return (
    <SRPLayout>
      {/* SUB FILTER AND SRP METADA */}
      <SRPHeader>
        {SRP.length >= 1 && (
          <>
            <div>
              <strong>{SRP[0].count}</strong>
              <span>résultat pour cette recherche</span>
            </div>
            <div id="filterContainer">
              <span>Trier par</span>
              <select
                name="filterBy"
                id="filterBySelect"
                onChange={handleSubFilter}
              >
                <option value="">--</option>
                <option value="createdAt_DESC">Date ( Desc )</option>
                <option value="createdAt_ASC">Date ( Asc )</option>
                <option value="az">Name A-Z</option>
                <option value="za">Name Z-A</option>
              </select>
            </div>
          </>
        )}
      </SRPHeader>

      {/* RESULT CONTENT DISPLAYED IN ARRAY FORMAT */}
      <SRPTable currentPostsToShow={SRP} />

      {/* FOOTER WITH PAGINATION ENABLED */}
      <SRPFooter totalPosts={SRP.length >= 1 ? SRP[0].count : 0} />
    </SRPLayout>
  );
}

const SRPLayout = styled.div`
  margin-top: 1rem;
`;

const SRPHeader = styled.div`
  width: 100%;
  padding: 1rem 0;
  font-size: 14px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  div {
    strong {
      margin-right: 0.4rem;
    }
    span,
    strong {
      font-family: "Proxima Nova";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      margin-right: 0.5rem;
    }
  }

  #filterContainer {
    span {
      font-family: "Proxima Nova";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      margin-right: 0.5rem;
    }

    select {
      padding: 0.5rem;
      font-family: "Proxima Nova";
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 17px;
      color: #2b2840;
    }
  }
`;
