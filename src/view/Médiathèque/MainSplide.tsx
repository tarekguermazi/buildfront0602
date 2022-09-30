import React from 'react'
import MainSplideStyles from './styles/MainSplideStyles';
// PACKAGES
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

// ICONS
import { GrTextAlignFull } from "react-icons/gr";
import { IoVideocamOutline } from "react-icons/io5";
import { CgLink } from "react-icons/cg";
import { BsCamera } from "react-icons/bs";
import { BiMicrophone, BiStats } from "react-icons/bi";
import { AiOutlineQuestion } from "react-icons/ai";
import { VscGraphScatter } from "react-icons/vsc";
import moment from 'moment';


export default function MainSplide({ data }) {

    // HELPER FUNCTIONS
    const pipeDate = date => {
        let d = date.split('T')[0];
        return moment(d).format('LL');
    };


    return (
        <MainSplideStyles>
            <Splide options={{
                perPage: 1,
                pagination: true,
                wheel: false
            }}>

                {
                    data?.map(post => {
                        return (
                            <SplideSlide key={post._id} className="horizontalPlayer">
                                <section>
                                    {
                                        post.photos?.length
                                            ?
                                            <div className="cardThumbnail" style={{ backgroundImage: "url(" + post.photos[0].downloadUrl + ")" }} ></div>
                                            :
                                            <div className="cardThumbnail hasNoThumbnail"></div>
                                    }
                                    <div>
                                        <div className="dateAndType">
                                            <div className="contentType">
                                                {
                                                    {
                                                        Texte: (
                                                            <GrTextAlignFull className='icon' />
                                                        ),
                                                        audio: (
                                                            <BiMicrophone className='icon' />
                                                        ),
                                                        videos: (
                                                            <IoVideocamOutline className='icon' />
                                                        ),
                                                        "lien web": <CgLink className='icon' />,
                                                        photo: <BsCamera className='icon' />,
                                                        infographie: (
                                                            <VscGraphScatter className='icon' />
                                                        ),
                                                        statistiques: (
                                                            <BiStats className='icon' />
                                                        ),
                                                        autres: (
                                                            <AiOutlineQuestion className='icon' />
                                                        ),
                                                    }[post.type]
                                                }{post.type}
                                            </div>
                                            <span className='contentDate'>
                                                {pipeDate(post.updatedAt)}
                                            </span>
                                        </div>
                                        <div className="textContent">
                                            <div className="horizontalPlayerTitle">
                                                {post.titleFR}
                                            </div>
                                            <div className="horizontalPlayerDescription">
                                                {post.descriptionFR}
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </SplideSlide>
                        )
                    })
                }

            </Splide>
        </MainSplideStyles>
    )
}
