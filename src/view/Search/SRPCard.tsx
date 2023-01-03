import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import parse from "html-react-parser";
import moment from "moment";
import { calendar, noData } from "src/assets/images";
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
        <div className="search__description">
          <div>
            <div className="evenement__left">
              {thumbnail ? (
                <img
                  className="lazyload"
                  style={{ width: 100, height: 100 }}
                  src={thumbnail}
                  alt=""
                />
              ) : (
                <img
                  className="lazyload"
                  style={{ width: 100, height: 100 }}
                  src={noData}
                  alt=""
                />
              )}
            </div>
            <div className="evenement__right">
              <div className="date">
                <div>
                  <img className="lazyload" src={calendar} alt="" srcSet="" />
                  {formattedDate}
                </div>
                {type ? (
                  <div className="cardHeader">
                    <span className="categoryBadge">{type}</span>
                  </div>
                ) : null}
              </div>
              {title ? (
                <div className="title">
                  {title.length > 100
                    ? parse(title.substring(0, 100) + "...")
                    : parse(title)}
                </div>
              ) : null}
              {content ? (
                <div className="right__footer">
                  {content.length > 100
                    ? parse(content.substring(0, 100) + "...")
                    : parse(content)}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </Link>
      <hr></hr>
    </CardLayout>
  );
}

const CardLayout = styled.div`
  /* LEFT SECTION */
  hr {
    height: 1px;
    background-color: #2b2840;
    border: none;
  }
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
