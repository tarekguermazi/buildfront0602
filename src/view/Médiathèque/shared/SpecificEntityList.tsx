import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import "react-loading-skeleton/dist/skeleton.css";
import MediathequeService from "src/modules/mediatheque/MediathequeService";

// COMPONENTS
import Skeleton from "react-loading-skeleton";
import VerticalPlayer from "./VerticalPlayer";
import Breadcrumb from "../../shared/Breadcrumb";
import { i18n } from "../../../i18n";

export default function SpecificEntityList() {
	const params = useParams();
	let param = params.entity_type;

	switch (param) {
		case "photos":
			param = "autres";
			break;
		case "documentaires":
			param = "documentaire";
			break;
		case "podcasts":
			param = "podcast";
			break;

		default:
			break;
	}
	const routeExtension = `?filter[type]=${param}`;

	const [entities, setEntities] = useState([]);
	const [entityIsLoading, setEntityIsLoading] = useState(true);

	const fetchTypeEntities = (routeExtension) => {
		MediathequeService.getMediathequesBasedOnType(routeExtension).then(
			(value) => {
				value.rows?.map((entry) => {
					setEntities((entities) => entities.concat(entry));
				});
				setEntityIsLoading(false);
			},
		);
	};

	useEffect(() => {
		fetchTypeEntities(routeExtension);
	}, []);

	return (
		<section>
			<section className="wideContent">
				<Breadcrumb
					title={i18n(`${param}`)}
					items={[
						[i18n("dashboard.menu"), "/"],
						[i18n("entities.mediatique.label")],
					]}
				/>
				{entityIsLoading ? (
					<MainLoadingLayout>
						<Skeleton height={300} width={270} />
						<Skeleton height={300} width={270} />
						<Skeleton height={300} width={270} />
						<Skeleton height={300} width={270} />
					</MainLoadingLayout>
				) : (
					<MainLayout>
						{entities?.map((ent, index) => {
							return (
								<VerticalPlayer dataSource={ent} key={index} />
								// END OF MAP RETURN
							);
						})}
					</MainLayout>
				)}
			</section>
		</section>
	);
}

const MainLoadingLayout = styled.section`
	width: 100%;
	margin: 2rem 0;

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;

	.react-loading-skeleton {
		width: 100%;
		height: 200px;
	}
`;

const MainLayout = styled.section`
	width: 100%;
	margin: 2rem 0;

	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
	grid-gap: 1rem;

	@media (max-width: 767px) {
		padding: 0 0.5rem;
	}
`;
