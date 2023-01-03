import React, { useState, useEffect } from "react";
import styled from "styled-components";
import GlossaireService from "src/modules/Glossaire/GlossaireService";

// COMPONENTS
import Header from "./Header";
import Filter from "./Filter";
import GloassaireList from "./GloassaireList";
import LoadingData from "./shared/LoadingData";
import NoDataFound from "./shared/NoDataFound";
import Footer from "../Layout/CopyWrite";

// Packages
var groupArray = require("group-array");

function Glossaire() {
	// state to hold a copy of the glossaire list (with all data)
	const [glossaireList, setGlossaireList] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const langue = localStorage.getItem("language");
	// FETCHING initial data from DB
	const getGlossaire = () => {
		GlossaireService.getGloassaireList().then((gl) => {
			setGlossaireList(gl.rows);
			setIsLoading(false);
		});
	};
	useEffect(() => {
		getGlossaire();
	}, []);

	// passing grouped data (category)
	const [groupByCategory, setGroupByCategory] = useState(false);

	return (
		<>
			<GlossaireLayout>
				<Header />
				<Filter setGroupByCategory={setGroupByCategory} />
				{isLoading ? (
					<LoadingData />
				) : (
					<section>
						{!glossaireList.length ? (
							<NoDataFound />
						) : (
							<>
								{groupByCategory ? (
									<GloassaireList
										data={
											langue === "fr"
												? groupArray(glossaireList, "categorie.titleFR")
												: langue === "ar"
												? groupArray(glossaireList, "categorie.titleAR")
												: groupArray(glossaireList, "categorie.titleEN")
										}
										criteria="category"
									/>
								) : (
									<GloassaireList data={glossaireList} criteria="letter" />
								)}
							</>
						)}
					</section>
				)}
			</GlossaireLayout>
		</>
	);
}

export default Glossaire;

const GlossaireLayout = styled.section`
	max-width: 1170px;
	margin: 2rem auto;

	font-family: "Proxima Nova";
	font-style: normal;

	@media screen and (max-width: 1071px) {
		padding: 0 10px;
		margin: 160px auto 0 auto;
	}
`;
