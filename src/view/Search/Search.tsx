import React, { useEffect, useState } from "react";
import { SearchContext } from "./SearchContext";
import styled from "styled-components";

// COMPONENTS

import SearchResults from "./SRP/SearchResults";
// OTHER

export default function Search({ location }) {
  // GLOBAL STATE
  const [isLoading, setIsLoading] = useState(false);
  const [searchString, setSearchString] = useState(location.HOME_SEARCH_STRING);
  const [SRP, setSRP] = useState([]);
  const [publicationFilter, setpublicationFilter] = useState("autre");
  // PAGINATION LOGIC
  console.log("first ", location);
  const [currentPageIndex, setcurrentPageIndex] = useState(0);
  const [numberOfPostsPerPage, setnumberOfPostsPerPage] = useState(5);

  return (
    <SearchContext.Provider
      value={{
        isLoading,
        setIsLoading,
        SRP,
        setSRP,
        searchString,
        setSearchString,
        publicationFilter,
        setpublicationFilter,
        currentPageIndex,
        setcurrentPageIndex,
        numberOfPostsPerPage,
        setnumberOfPostsPerPage,
      }}
    >
      <SearchLayout>
        <section className="wideContent">
          <SearchResults location={location} />
        </section>
      </SearchLayout>
    </SearchContext.Provider>
  );
}

const SearchLayout = styled.section`

  max-width: 1170px;
  margin: auto;
  .wideContent {
  display:flex; 
  justify-content : flex-start;
   
  }
`;
