import React from "react";
import NewContentStyles from "./styles/NewContentStyles";
import EntityPlayerButton from "./styles/EntityPlayerButton";
// SERVICES
import MediathequeService from "src/modules/mediatheque/MediathequeService";
// PACKAGES
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
// ICONS
import { GrTextAlignFull } from "react-icons/gr";
import { IoVideocamOutline } from "react-icons/io5";
import { BsCamera } from "react-icons/bs";
import { BiMicrophone } from "react-icons/bi";
import Translate from "../shared/Translate";
import Date from "../shared/Date";
import { i18n } from "src/i18n";

export default function NewContent({ data }) {
  return (
    <NewContentStyles>
      <section className="wideContent">
        <header>
          <div className="archieve__header">
            <h2 style={{ color: "#fff" }}>{i18n("common.laUne")}</h2>
            <div className="satestique__bar"></div>
          </div>
        </header>
        <main>
          <Splide
            options={{
              gap: ".5rem",
              perPage: 1,
              pagination: false,
              wheel: true,
            }}
          >
            {data.rows?.map((post) => {
              return (
                <SplideSlide key={post._id} className="VerticlPlayer">
                  {post.photos?.length ? (
                    <div
                      className="cardThumbnail"
                      style={{
                        backgroundImage:
                          "url(" + post.photos[0].downloadUrl + ")",
                      }}
                    >
                      <EntityPlayerButton data={post} entity="" />
                    </div>
                  ) : (
                    <div className="cardThumbnail hasNoThumbnail">
                      <EntityPlayerButton data={post} entity="" />
                    </div>
                  )}
                  <div className="dateAndType">
                    <div className="contentType">
                      {
                        {
                          documentaire: <GrTextAlignFull className="icon" />,
                          podcast: <BiMicrophone className="icon" />,
                          videos: <IoVideocamOutline className="icon" />,
                          autres: <BsCamera className="icon" />,
                        }[post.type]
                      }
                      {post.type === "autres"
                        ? i18n(`entities.mediatique.enumerators.type.photos`)
                        : i18n(
                            `entities.mediatique.enumerators.type.${post.type}`
                          )}
                    </div>
                    <span className="contentDate">
                      {Date.pipeDate(post.updatedAt)}
                    </span>
                  </div>
                  <div className="verticalPlayerTitle text__wrap">
                    <span style={{ color: "#fff" }}>
                      {Translate.Trans("title", post)}
                    </span>
                  </div>
                </SplideSlide>
                // <VerticalPlayer dataSource={post} key={post._id} />
              );
            })}
            {/* end of cards */}
          </Splide>
        </main>
      </section>
    </NewContentStyles>
  );
}
