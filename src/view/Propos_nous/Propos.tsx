import React from "react";
import styled from 'styled-components'
// COMPONENTS
import Header from "./Header";
import Content from "./Content";

function Propos() {
  return (
    <ProposLayout>
      <Header />
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