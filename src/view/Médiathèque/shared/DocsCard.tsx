import React from "react";
import styled from "styled-components";
import Translate from "../../shared/Translate";

export default function DocsCard({ dataSource }) {
  return (
    <DocsCardLayout>
      {dataSource.photos?.length > 0 ? (
        <div
          className='cardThumbnail'
          style={{
            background:
              "linear-gradient(180deg, rgba(43, 40, 64, 0) 30.73%, rgba(43, 40, 64, 0.7) 100%), url(" +
              dataSource.photos[0].downloadUrl +
              ")",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
          <div className='cardTitle'>
            <span>{Translate.Trans("title", dataSource)}</span>
          </div>
        </div>
      ) : (
        <div className='cardThumbnail hasNoThumbnail'>
          <div className='cardTitle'>
            <span className='text__wrap__height'>
              {Translate.Trans("title", dataSource)}
            </span>
          </div>
        </div>
      )}
    </DocsCardLayout>
  );
}

const DocsCardLayout = styled.div`
  height: 200px !important;

  .cardThumbnail {
    width: 100%;
    height: 200px;
    padding: 1rem;
    display: flex;
    align-items: flex-end;
  }
  .hasNoThumbnail {
    background: linear-gradient(
        180deg,
        rgba(43, 40, 64, 0) 30.73%,
        rgba(43, 40, 64, 0.7) 100%
      ),
      url("https://imgur.com/N1ZiTM4.jpeg");
    background-size: cover;
    background-position: center;
  }

  .cardTitle {
    background: linear-gradient(
      180deg,
      rgba(43, 40, 64, 0) 30.73%,
      rgba(43, 40, 64, 0.7) 100%
    );
    span {
      font-family: "Bebas Neue Pro";
      font-style: normal;
      font-weight: 700;
      font-size: 23px;
      line-height: 24px;
      color: #e7e3ff;
      text-transform: lowercase !important;
      width: 230px;
      /**Major Properties**/
      overflow: hidden;
      max-height: 6rem;
      -webkit-box-orient: vertical;
      display: block;
      display: -webkit-box;
      overflow: hidden !important;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;
    }
  }
`;
