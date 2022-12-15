import React from "react";
import styled from "styled-components";
// COMPONENTS
import Content from "./Content/Content";
import Breadcrumb from "../shared/Breadcrumb";
import { i18n } from "src/i18n";
function Contact() {
  return (
    <>
      <ContactLayout>
        <Breadcrumb
          title={i18n("menu.Contact")}
          items={[[i18n("dashboard.menu"), "/"], [i18n("menu.Contact")]]}
        />
      </ContactLayout>
      <WideContent>
        <Content />
      </WideContent>
    </>
  );
}

export default Contact;

const ContactLayout = styled.section`
  max-width: 1170px;
  margin: 1rem auto;
  font-family: "Proxima Nova";
  font-style: normal;
`;

const WideContent = styled.section`
  max-width: 100%;
  margin-top: 2rem;
  /* background-color: var(--gray6); */
  /* border-top: 5px solid var(--violet); */
`;
