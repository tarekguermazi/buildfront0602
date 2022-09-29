import React, { useState, useEffect } from 'react'

// SERVICE
import MediathequeService from 'src/modules/mediatheque/MediathequeService';

// COMPONENTS
import HeroSectionStyle from './styles/HeroSectionStyle';
import NewContent from './NewContent';

// PACKAGES
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { AiOutlineLoading3Quarters } from 'react-icons/ai';


export default function HeroSection() {

    const loaders = ["a", "a", "a"];

    // STATES
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);


    // FETCHING LATEST POSTS (ALL TYPES)
    const getLatestContent = () => {
        MediathequeService.getLatestMediatheques()
            .then((value) => {
                setPosts(value);
                setLoading(false);
            });
    };

    useEffect(() => {
        getLatestContent();
    }, []);


    return (
        <HeroSectionStyle>
            {/* SLIDER */}
            <section className='splideContent'>
            </section>
            {/* GRID RIGHT UNDER THE SLIDER */}
            <section className='bottomGrid'>
                {
                    loading
                        ?
                        <div className="loaderPlaceholder">
                            {
                                loaders.map((loader, index) => {
                                    return (
                                        <div key={index}>
                                            <Skeleton height={350} className='customLoader' />
                                        </div>
                                    )
                                })
                            }
                        </div>
                        :
                        <NewContent data={posts} />
                }
            </section>
        </HeroSectionStyle>
    )
}
