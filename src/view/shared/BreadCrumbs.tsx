import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { i18n } from "src/i18n";

export default function BreadCrumbs({ view }) {
  const capitalize = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  return (
    <div>
      {/* BREADCRUMBS */}
      <BreadCrumbsHeader>
        <Link to="/" className="homeLinkInBC">
          {i18n("menu.Tableau")}
        </Link>{" "}
        <span className="currentView">/ {capitalize(view)}</span>
      </BreadCrumbsHeader>
    </div>
  );
}

const BreadCrumbsHeader = styled.div`
  margin: 0.7rem 0;
  font-size: "1rem";
  font-family: "Proxima Nova";

  .currentView {
    color: var(--gray3);
  }

  .homeLinkInBC {
    text-decoration: none;
    color: var(--gray2);

    &:hover {
      text-decoration: underline;
    }
  }
`;
