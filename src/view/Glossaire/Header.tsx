import React, { useEffect, useState } from "react";
import BreadCrumbs from "../shared/BreadCrumbs";
import Breadcrumb from "../shared/Breadcrumb";

import styled from "styled-components";
import AproposService from "src/modules/Apropos/AproposService";
import { i18n } from "src/i18n";

export default function Header() {
  const [glossaireDesc, setGlossaireDesc] = useState();
  const langue = localStorage.getItem("language");

  useEffect(() => {
    AproposService.list("", "", "", "").then((res) => {
      if (langue === "fr") {
        setGlossaireDesc(res.rows[0].glossaireDescFR);
      }
      if (langue === "ar") {
        setGlossaireDesc(res.rows[0].glossaireDescAR);
      }
      if (langue === "en") {
        setGlossaireDesc(res.rows[0].glossaireDescEN);
      }
    });
  }, []);
  return (
    <div>
      {/* <BreadCrumbs view="glossaire" /> */}
      <Breadcrumb
        title={i18n("menu.Glossaire")}
        items={[[i18n("dashboard.menu"), "/"], [i18n("menu.Glossaire")]]}
      />

      {/* DESCRIPTION PLACEHOLDER */}
      <DescriptionSection>
        <p>{glossaireDesc}</p>
      </DescriptionSection>
    </div>
  );
}

const DescriptionSection = styled.section`
  color: var(--violet);
  font-size: 1rem;
  font-weight: 400;
  margin: 1rem 0;
  text-align: justify;
`;
