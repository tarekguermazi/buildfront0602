import React, { useContext, useEffect, useState } from "react";
import { Etudes, search__archeive } from "src/assets/images";
import { i18n } from "../../i18n";
import Breadcrumb from "../shared/Breadcrumb";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SearchService from "src/modules/Search/SearchService";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Archives() {
	// HANDLING SEARCH LOGIC
	let advanced = {
		statut: "archive",
		thematique: "",
		category: "",
	};
	const langue = localStorage.getItem("language");

	const [archiveSearchString, setArchiveSearchString] = useState("");
	const [archiveFilter, setarchiveFilter] = useState(advanced);

	const handleChange = (event) => {
		setArchiveSearchString(event.target.value);
	};

	const handleRadioChange = (event) => {
		setarchiveFilter(event.target.value);
	};

	// DYNAMIC CATEGORY LIST
	const [categoriesList, setCategoriesList] = useState<any[]>([]);
	const [categoriesListIsLoading, setCategoriesListIsLoading] = useState(true);

	const searchPath = {
		pathname: "/SearchArchive",
		archiveSearchString: archiveSearchString,
		archiveFilter: archiveFilter,
	};
	// HELPER FUNCTION

	const getCategoriesList = async () => {
		await SearchService.getCategoriesList()
			.then((res) => {
				setCategoriesListIsLoading(true);
				setCategoriesList((categoriesList) => categoriesList.concat(res));
				setCategoriesListIsLoading(false);
			})
			.catch((err) => {
				console.error(err);
			});
	};

	useEffect(() => {
		getCategoriesList();
	}, []);

	return (
		<>
			<Breadcrumb
				title={i18n("common.Archives")}
				items={[[i18n("app.title"), "/"], [i18n("common.Archives")]]}
			/>
			<div className="app__archieve__page">
				<div className="archeive">
					<div className="archieve__content">
						<div className="archieve__left">
							<div className="left__search">
								<input
									type="text"
									placeholder={i18n("common.archiveSearch")}
									onChange={handleChange}
									value={archiveSearchString}
								/>
								{archiveSearchString.length >= 1 ? (
									<Link to={searchPath}>
										<div className="button__search">
											<i className="fa-solid fa-magnifying-glass" />
											{i18n("common.search")}
										</div>
									</Link>
								) : (
									<div className="button__search">
										<i className="fa-solid fa-magnifying-glass" />
										{i18n("common.search")}
									</div>
								)}
								{/* <div className="search__advanced">Recherche avancée</div> */}
							</div>
							<div className="mobile__archeiveSearch">
								<div className="archeiveSearch__form">
									<input
										type="text"
										placeholder={i18n("common.archiveSearch")}
									/>
									<div className="button_search">
										<img
											className="lazyload"
											src={search__archeive}
											alt="Search Archeive ICon"
											srcSet=""
										/>
									</div>
								</div>
								{/* <div className="search__advanced">Recherche avancée</div> */}
							</div>
							<FilterLayout onChange={handleRadioChange}>
								{categoriesListIsLoading === false && (
									<>
										<Link to={searchPath}>
											<label className="filterArchiveContianer" htmlFor="all">
												<input
													type="radio"
													name="archiveFilter"
													value="autre"
													id="all"
												/>
												<div className="contentContainer">
													<div>
														<img
															className="lazyload"
															src={Etudes}
															alt="Etudes Icon"
														/>
													</div>
													<div>
														<h4>{i18n("common.all")}</h4>
													</div>
												</div>
											</label>
										</Link>
										{categoriesList.length >= 1 && (
											<>
												{categoriesList[0]["rows"].map((category: any) => {
													return (
														<Link
															to={{
																pathname: "/SearchArchive",
																archiveSearchString: archiveSearchString,
																archiveFilter: {
																	statut: "archive",
																	thematique: "",
																	category: category._id,
																},
															}}>
															<label
																className="filterArchiveContianer"
																htmlFor={category._id}
																key={category._id}>
																<input
																	type="radio"
																	name="archiveFilter"
																	value="etude"
																	id={category._id}
																/>
																<div className="contentContainer">
																	<div>
																		<img
																			className="lazyload"
																			src={Etudes}
																			alt="Etudes Icon"
																		/>
																	</div>
																	<div>
																		{langue === "fr" ? (
																			<h4>{category.titleFR}</h4>
																		) : langue === "ar" ? (
																			<h4>{category.titleAR}</h4>
																		) : (
																			<h4>{category.titleEN}</h4>
																		)}
																	</div>
																</div>
															</label>
														</Link>
													);
												})}
											</>
										)}
									</>
								)}
								{/* LOADING ... */}
								{categoriesListIsLoading === true && (
									<>
										{[...Array(5)].map((x, i) => (
											<Skeleton key={i} height={172} width={275} />
										))}
									</>
								)}
							</FilterLayout>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Archives;

const FilterLayout = styled.div`
	width: 100%;
	margin-top: 1.5rem;
	display: grid;
	grid-gap: 1rem;
	grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));

	.contentContainer {
		width: 275px;
		height: 172px;
		background-color: #fff;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		img {
			margin-bottom: 2rem;
		}

		&:hover {
			cursor: pointer;
			background-color: #f7f7f7;
		}
	}
	.resultContainer {
		width: 275px;
		height: 172px;
		background-color: #fff;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		img {
			margin-bottom: 2rem;
		}

		&:hover {
			cursor: pointer;
			background-color: #f7f7f7;
		}
	}
	input[type="radio"] {
		display: none;

		&:checked ~ .contentContainer {
			border: 1px solid #e1011a;
			h4 {
				color: #e1011a;
			}
		}
	}
`;
