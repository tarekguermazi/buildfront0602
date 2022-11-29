import React from "react";
import styled from 'styled-components'
// COMPONENTS
import Header from "./Header";
import Content from "./Content/Content";

function Contact() {
  return (
    <>
      <ContactLayout>
        <Header />
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
  margin-top: 5rem;
  /* background-color: var(--gray6); */
  /* border-top: 5px solid var(--violet); */
`;