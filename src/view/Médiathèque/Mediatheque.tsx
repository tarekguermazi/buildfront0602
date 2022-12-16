import React from "react";
// COMPONENTS
import HeroSection from "./HeroSection";
import MainGridLayout from "./styles/MainGridLayout";
import { i18n } from "src/i18n";
import Breadcrumb from "../shared/Breadcrumb";
function Mediatheque() {
  return (
    <section>
      <Breadcrumb
        title={i18n("entities.mediatique.label")}
        items={[[i18n("app.title"), "/"], [i18n("entities.mediatique.label")]]}
      />
      <HeroSection />
      <MainGridLayout />
    </section>
  );
}

export default Mediatheque;
