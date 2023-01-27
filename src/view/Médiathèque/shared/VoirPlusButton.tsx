import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { i18n } from "src/i18n";

export default function VoirPlusButton({ contentType }) {
  return (
    <LinkLayout>
      <Link to={"/Mediatheque/type/" + contentType}>
        <div className="plus__button">{i18n("common.voirPlus")}</div>
      </Link>
    </LinkLayout>
  );
}

const LinkLayout = styled.div`
  margin-top: 1rem;
  margin-bottom: 2rem;
  width: 100%;
  text-align: center;
  span {
    font-family: "Proxima Nova";
    font-size: 1rem;
    font-weight: thin;
    text-decoration-line: underline;
    text-transform: uppercase;
    color: #e1011a !important;
  }
`;
