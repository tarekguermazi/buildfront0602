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
          items={[[i18n("app.title"), "/"], [i18n("menu.Contact")]]}
        />
        <Content />
      </ContactLayout>
    </>
  );
}

export default Contact;

const ContactLayout = styled.section`
max-width:1170px ;
margin: auto;
  @media screen and (max-width : 1024px){ 
    margin : 0 10px ;
  }
 
`;


