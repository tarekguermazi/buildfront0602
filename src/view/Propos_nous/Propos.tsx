import React from "react";
import styled from "styled-components";

import Content from "./Content";
import Breadcrumb from "../shared/Breadcrumb";
import { i18n } from "src/i18n";

function Propos() {
  return (
    <ProposLayout>
      <Breadcrumb
        title={i18n("menu.propos")}
        items={[[i18n("app.title"), "/"], [i18n("menu.propos")]]}
      />
      <Content />
    </ProposLayout>
  );
}

export default Propos;

const ProposLayout = styled.section`
  max-width: 1170px;
  margin: 2rem auto;
  font-family: "Proxima Nova";
  font-style: normal;
`;
