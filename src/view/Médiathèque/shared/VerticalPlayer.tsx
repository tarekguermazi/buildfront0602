import React from "react";
import styled from "styled-components";
import EntityPlayerButton from "../styles/EntityPlayerButton";
import moment from "moment";

// ICONS
import { IoVideocamOutline } from "react-icons/io5";

export default function VerticalPlayer({ dataSource }) {
  // HELPER FUNCTIONS
  const pipeDate = (date) => {
    let d = date.split("T")[0];
    return moment(d).format("LL");
  };

  return (
    <VerticalPlayerCard key={dataSource._id} className='videoCardVertical'>
      {dataSource.photos?.length > 0 ? (
        <div
          className='cardThumbnail'
          style={{
            backgroundImage: "url(" + dataSource.photos[0].downloadUrl + ")",
          }}>
          <EntityPlayerButton data={dataSource} entity='mainGridPlayer' />
        </div>
      ) : (
        <div className='cardThumbnail hasNoThumbnail'>
          <EntityPlayerButton data={dataSource} entity='mainGridPlayer' />
        </div>
      )}
      <div className='dateAndType'>
        <div className='contentType'>
          <IoVideocamOutline className='icon' />
          {dataSource.type}
        </div>
        <span className='contentDate'>{pipeDate(dataSource.updatedAt)}</span>
      </div>
      <div className='verticalPlayerTitle'>
        <span>{dataSource.titleFR}</span>
      </div>
    </VerticalPlayerCard>
  );
}

const VerticalPlayerCard = styled.div`
  position: relative;
  height: 330px !important;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .cardThumbnail {
    width: 100%;
    height: 200px;
    background-size: cover;
    background-position: center;
    position: relative;
  }
  .hasNoThumbnail {
    background-image: url("https://imgur.com/N1ZiTM4.jpeg");
  }

  .dateAndType {
    height: 30px;
    color: #fff;

    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      color: #fff;
    }

    .contentType {
      width: 100px;
      border: 1px solid red;
      border-radius: 0.5rem;
      height: 30px;

      font-family: "Proxima Nova";
      font-style: normal;
      font-weight: 400;
      font-size: 1rem;
      line-height: 15px;
      color: red;
      padding: 0.3rem 0.5rem;

      display: flex;
      align-items: center;
      justify-content: space-evenly;

      .icon {
        margin-right: 5px;
      }
    }

    .contentDate {
      color: rgba(122, 122, 122, 1);
      font-size: 12px;

      font-family: "Proxima Nova";

      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 15px;
    }
  }

  .verticalPlayerTitle {
    height: 50px;

    span {
      width: 100%;
      font-family: "Proxima Nova";
      text-transform: capitalize !important;
      line-height: 1.5;
      font-weight: 700;
      font-size: 1rem;
      color: var(--violet);
    }
  }
`;
