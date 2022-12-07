import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import parse from "html-react-parser";
import moment from "moment";

export default function SRPCard({
  _id,
  date,
  content,
  thumbnail,
  title,
  entite,
  type,
}) {
  const formattedDate = moment(date).format("l");
  return (
    <CardLayout>
      <Link to={"/" + entite + "/" + _id}>
        <div className="cardContent">
          <div className="cardHeader">
            <span className="categoryBadge">{type}</span>
            <span>{formattedDate}</span>
          </div>

          <span>{title}</span>
          {content ? (
            <div className="cardContent">
              {content.length > 100
                ? parse(content.substring(0, 100) + "...")
                : parse(content)}
            </div>
          ) : null}
        </div>
      </Link>
      <hr></hr>
    </CardLayout>
  );
}

const CardLayout = styled.div`
  /* LEFT SECTION */
  .cardContent {
    flex-grow: 1;
    height: 100%;
    padding-left: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .cardHeader {
      width: 100%;
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      font-family: "Proxima Nova";

      .categoryBadge {
        background: #f8d7da;
        border-radius: 3px;
        color: var(--dark--red);
        padding: 0.4rem 0.5rem;
        font-size: 12px;
        font-family: "Proxima Nova";
      }
    }

    .title {
      margin-top: 1.5rem;
      color: var(--violet);

      span {
        font-family: "Bebas Neue Pro";
        font-style: normal;
        font-weight: 700;
        font-size: 23px;
        line-height: 24px;
      }
    }
  }
  hr {
    margin-top: 10px;
    margin-bottom: 5px;
  }
`;
