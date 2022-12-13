import React from "react";
import styled from "styled-components";
// HELPER PACKAGES
import ReactPlayer from "react-player/lazy";
import Photogrid from "react-facebook-photo-grid";
import Translate from "../../shared/Translate";

export default function Main({ entity, data }) {
  return (
    <MainLayout>
      {entity["videos"]?.length > 0 && (
        <VideoPlayersLayout>
          {entity["videos"].map((vid) => {
            return (
              <ReactPlayer
                key={vid._id}
                url={vid["downloadUrl"]}
                loop={true}
                controls={true}
                className='hiThereMotherFucker'
              />
            );
          })}
        </VideoPlayersLayout>
      )}
      <p>{Translate.Trans("description", entity)}</p>
      {/* RENDERING IMAGES (if there are any) */}
      {entity["photos"]?.length > 0 && (
        <PhotoPlayersLayout>
          <section className='gridSection'>
            {<Photogrid images={data} maxWidth='100%' key={0}></Photogrid>}
          </section>
        </PhotoPlayersLayout>
      )}
    </MainLayout>
  );
}

const MainLayout = styled.section`
  margin: 2rem 0;
  p {
    text-align: justify;
    color: var(--gray2);
    font-family: "Proxima Nova";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 25px;
  }

  .hiThereMotherFucker {
    width: 350px !important;
    height: 350px !important;
  }

  @media (max-width: 767px) {
    width: 100%;
    padding: 0 0.5rem;
  }
`;
const VideoPlayersLayout = styled.section`
  margin: 3rem 0;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  audio {
    height: 70px !important;
  }

  @media (max-width: 767px) {
    video {
      width: 90% !important;
    }
  }
`;
const PhotoPlayersLayout = styled.section`
  margin-top: 1rem;

  .gridSection {
    width: 100%;
    display: block;
    &:before {
      content: "( Double click to open a photo )";
      display: block;
      font-family: "Proxima Nova";
      font-style: normal;
      font-size: 1rem;
      margin-bottom: 1rem;
    }
  }

  img {
    width: 100%;
  }
`;
