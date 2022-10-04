import React from 'react'
import NewContentStyles from './styles/NewContentStyles';
import EntityPlayerButton from './styles/EntityPlayerButton';
import VerticalPlayer from './shared/VerticalPlayer';

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
                        perPage: 4,
                        pagination: false,
                        wheel: true
                    }}>
                        {
                            data.rows?.map(post => {
                                return (
                                    <SplideSlide key={post._id} className="VerticlPlayer">
                                        {
                                            post.photos?.length
                                                ?
                                                <div className="cardThumbnail" style={{ backgroundImage: "url(" + post.photos[0].downloadUrl + ")" }} >
                                                    <EntityPlayerButton data={post} entity='' />
                                                </div>
                                                :
                                                <div className="cardThumbnail hasNoThumbnail"><EntityPlayerButton data={post} entity='' /></div>
                                        }
                                        <div className="dateAndType">
                                            <div className="contentType">
                                                {
                                                    {
                                                        documentaire: (
                                                            <GrTextAlignFull className='icon' />
                                                        ),
                                                        podcast: (
                                                            <BiMicrophone className='icon' />
                                                        ),
                                                        videos: (
                                                            <IoVideocamOutline className='icon' />
                                                        ),
                                                        autres: (
                                                            <BsCamera className='icon' />
                                                        ),
                                                    }[post.type]
                                                }
                                                {
                                                    post.type === 'autres'
                                                        ? 'photos'
                                                        : post.type
                                                }
                                            </div>
                                            <span className='contentDate'>
                                                {pipeDate(post.updatedAt)}
                                            </span>
                                        </div>
                                        <div className="verticalPlayerTitle">
                                            <span>{post.titleFR}</span>
                                        </div>
                                    </SplideSlide>
                                    // <VerticalPlayer dataSource={post} key={post._id} />
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
