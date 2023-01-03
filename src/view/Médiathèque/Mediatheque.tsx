import React from "react";
// COMPONENTS
import styled from "styled-components";
import HeroSection from "./HeroSection";
import MainGridLayout from "./styles/MainGridLayout";
import { i18n } from "src/i18n";
import Breadcrumb from "../shared/Breadcrumb";
function Mediatheque() {
	return (
		<Media>
			<Breadcrumb
				title={i18n("entities.mediatique.label")}
				items={[[i18n("app.title"), "/"], [i18n("entities.mediatique.label")]]}
			/>
			<HeroSection />
			<MainGridLayout />
		</Media>
	);
}

const Media = styled.div`
	@media (max-width: 1071px) {
		margin: 160px auto 0 auto;
	}
`;

export default Mediatheque;
