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
	const { setIsLoading, SRP, setSRP, searchString, setcurrentPageIndex } =
		useContext(SearchContext);

	const searchPublications = (SEARCH_STRING: string) => {
		setIsLoading(true);
		SearchService.getSearchResultsForPublicationsBasedOnSearchString(
			SEARCH_STRING,
			0,
		).then((res) => {
			setcurrentPageIndex(0);
			setSRP(res);
			setIsLoading(false);
		});
	};
	// HANDLING SUB FILTER (date / name)
	// const handleSubFilter = (event) => {
	//   setIsLoading(true);
	//   setSRP([]);
	//   const FILTER_STRING = `&orderBy=[${event.target.value}]`;
	//   // redo the search using chosen option
	//   SearchService.getSearchResultsForPublicationsBasedOnSearchString(
	//     searchString,
	//     0
	//   )
	//     .then((res) => {
	//       setSRP((SRP) => SRP.concat(res));
	//       setIsLoading(false);
	//     })
	//     .catch((err) => {
	//       console.error(err);
	//     });
	// };
	useEffect(() => {
		searchPublications(location.HOME_SEARCH_STRING);
	}, []);
	let currentPostsToShow: any[] = [];
	if (SRP.length >= 1)
		if (SRP[0].rows.length >= 1) currentPostsToShow = SRP[0].rows;

	return (
		<SRPLayout>
			{/* SUB FILTER AND SRP METADA */}
			{/* <SRPHeader>
        {SRP.length >= 1 && (
          <>
            <div>
              <strong>{SRP[0].count}</strong>
              <span>résultat pour cette recherche</span>
            </div>
            <div id='filterContainer'>
              <span>Trier par</span>
              <select
                name='filterBy'
                id='filterBySelect'
                onChange={handleSubFilter}>
                <option value=''>--</option>
                <option value='createdAt_DESC'>Date ( Desc )</option>
                <option value='createdAt_ASC'>Date ( Asc )</option>
                <option value='az'>Name A-Z</option>
                <option value='za'>Name Z-A</option>
              </select>
            </div>
          </>
        )}
      </SRPHeader> */}

			{/* RESULT CONTENT DISPLAYED IN ARRAY FORMAT */}
			<SRPTable currentPostsToShow={SRP} />

			{/* FOOTER WITH PAGINATION ENABLED */}
			{/* <SRPFooter totalPosts={SRP.length >= 1 ? SRP[0].count : 0} /> */}
		</SRPLayout>
	);
}

const SRPLayout = styled.div`
	margin-top: 1rem;
`;
