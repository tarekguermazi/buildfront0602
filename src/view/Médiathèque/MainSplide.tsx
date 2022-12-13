import React from "react";
import MainSplideStyles from "./styles/MainSplideStyles";
import EntityPlayerButton from "./styles/EntityPlayerButton";
// PACKAGES
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

// ICONS
import { GrTextAlignFull } from "react-icons/gr";
import { IoVideocamOutline } from "react-icons/io5";
import { CgLink } from "react-icons/cg";
import { BsCamera } from "react-icons/bs";
import { BiMicrophone, BiStats } from "react-icons/bi";
import { AiOutlineQuestion } from "react-icons/ai";
import { VscGraphScatter } from "react-icons/vsc";
import moment from "moment";
import Translate from "../shared/Translate";

export default function MainSplide({ data }) {
  // HELPER FUNCTIONS
  const pipeDate = (date) => {
    let d = date.split("T")[0];
    return moment(d).format("LL");
  };

  return (
    <MainSplideStyles>
      <Splide
        options={{
          perPage: 1,
          pagination: true,
          wheel: false,
        }}
        className='splide'>
        {data?.map((post) => {
          return (
            <SplideSlide
              key={post._id}
              className='horizontalPlayer'
              style={{
                background:
                  "linear-gradient(115.19deg, #2B2840 28.27%, rgba(43, 40, 64, 0) 68.81%), linear-gradient(0deg, rgba(43, 40, 64, 0.7), rgba(43, 40, 64, 0.7)), url(" +
                  post.photos[0]?.downloadUrl +
                  ")",
              }}>
              <section>
                <div>
                  {post.photos?.length ? (
                    <div
                      className='cardThumbnail'
                      style={{
                        backgroundImage:
                          "url(" + post.photos[0].downloadUrl + ")",
                      }}>
                      <EntityPlayerButton data={post} entity='main' />
                    </div>
                  ) : (
                    <div className='cardThumbnail hasNoThumbnail'>
                      <EntityPlayerButton data={post} entity='main' />
                    </div>
                  )}
                </div>
                <div>
                  <div className='dateAndType'>
                    <div className='contentType'>
                      {
                        {
                          Texte: <GrTextAlignFull className='icon' size={20} />,
                          audio: <BiMicrophone className='icon' size={20} />,
                          videos: (
                            <IoVideocamOutline className='icon' size={20} />
                          ),
                          "lien web": <CgLink className='icon' size={20} />,
                          photo: <BsCamera className='icon' size={20} />,
                          infographie: (
                            <VscGraphScatter className='icon' size={20} />
                          ),
                          statistiques: <BiStats className='icon' size={20} />,
                          autres: (
                            <AiOutlineQuestion className='icon' size={20} />
                          ),
                        }[post.type]
                      }
                      {post.type}
                    </div>
                    <span className='contentDate'>
                      {pipeDate(post.updatedAt)}
                    </span>
                  </div>

                  <div className='textContent'>
                    <div className='horizontalPlayerTitle'>
                      <p>{Translate.Trans("title", post)}</p>
                    </div>
                    <div className='horizontalPlayerDescription'>
                      {Translate.Trans("description", post)}
                    </div>
                  </div>
                </div>
              </section>
            </SplideSlide>
          );
        })}
      </Splide>
    </MainSplideStyles>
  );
}
