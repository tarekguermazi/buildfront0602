import React, { useState } from "react";
import { SearchContext } from "./SearchContext";
import styled from "styled-components";
// COMPONENTS
import SearchHeader from "./SearchHeader";
import SearchFilter from "./SearchFilter";
import SearchResults from "./SRP/SearchResults";
// OTHER

export default function Search({ location }) {
  console.log("location", location);
  // GLOBAL STATE
  const [isLoading, setIsLoading] = useState(false);
  const [searchString, setSearchString] = useState("");
  const [SRP, setSRP] = useState([]);
  const [publicationFilter, setpublicationFilter] = useState("autre");
  // PAGINATION LOGIC
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
          {/* <SearchHeader location={location} /> */}
          {/* <SearchFilter /> */}
          <SearchResults location={location} />
        </section>
      </SearchLayout>
    </SearchContext.Provider>
  );
}

const SearchLayout = styled.section`
  height: 100%;
  .wideContent {
    padding: 0 7rem;
  }
`;
