import React from 'react'
import NewContentStyles from './styles/NewContentStyles';

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



export default function NewContent({ data }) {
    console.log(data);

    // HELPER FUNCTIONS
    const pipeDate = date => {
        let d = date.split('T')[0];
        return moment(d).format('LL');
    };

    return (
        <NewContentStyles>
            <section className='wideContent'>
                <header>
                    <h1>A LA UNE</h1>
                </header>
                <main>
                    <Splide options={{
                        gap: '.5rem',
                        perPage: 3,
                        pagination: false,
                        wheel: true
                    }}>
                        {
                            data.rows?.map(post => {
                                return (
                                    <SplideSlide key={post._id} className="VerticlPlayer">
                                        <div className="dardThumbnail"></div>
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
                                        <div className="verticalPlayerTitle">
                                            {post.titleFR}
                                        </div>
                                    </SplideSlide>
                                )
                            })
                        }
                        {/* end of cards */}
                    </Splide>
                </main>
            </section>
        </NewContentStyles>
    )
}
