import React, { useState, useEffect } from 'react'

// SERVICE
import MediathequeService from 'src/modules/mediatheque/MediathequeService';

// COMPONENTS
import HeroSectionStyle from './styles/HeroSectionStyle';
import NewContent from './NewContent';
import MainSplide from './MainSplide';

// PACKAGES
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


export default function HeroSection() {

    const loaders = ["a", "a", "a"];

    // STATES
    const [posts, setPosts] = useState([]);
    const [hotPosts, setHotPosts] = useState([]);
    const [loading, setLoading] = useState(true);


    // FETCHING LATEST POSTS (ALL TYPES)
    const getLatestContent = () => {
        MediathequeService.getLatestMediatheques()
            .then((value) => {
                setPosts(value);
                // getting hot 3 posts (latest)
                value.rows?.map((entry, index) => {
                    if (index < 3)
                        setHotPosts(hotPosts => hotPosts.concat(entry));
                })
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
                {
                    loading
                        ?
                        <Skeleton height={507} />
                        :
                        <MainSplide data={hotPosts} />
                }
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
