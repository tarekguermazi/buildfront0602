import React from "react";
import { Link } from "react-router-dom";
import { PageNotFound } from "../../../assets/images";
import Image from "../Image";
import styled from "styled-components";
function Error404Page() {
  return (
    <Display>
      <Image src={PageNotFound} height={500} width={500} />
      <h2>Désolé, la page que vous avez visitée n'existe pas </h2>
      <div>
        <Link to='/'>
          <h3> Retour </h3>
        </Link>
      </div>
    </Display>
  );
}

export default Error404Page;

const Display = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  justify-content: center;
  align-items: center;
  max-width: 1170px;
  height: 100vh;
  margin: auto;
`;
