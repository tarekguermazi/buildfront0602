import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import MediathequeService from 'src/modules/mediatheque/MediathequeService';

// COMPONENTS
import NewsLetterWidget from 'src/view/shared/NewsLetterWidget';
import Videos from '../Videos';
import Photos from '../Photos';
import Podcasts from '../Podcasts';
import Docs from '../Docs';

// ICONS/Assets
import { envelope } from "src/assets/images";
import Skeleton from 'react-loading-skeleton';

export default function MainGridLayout() {

    // fetch data and group into different types
    // then pass each group to its component
    // STATES
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    // vids
    const [videos, setVideos] = useState([]);
    const [videoIsLoading, setVideoIsLoading] = useState(true);

    // photos
    const [photos, setPhotos] = useState([]);
    const [photoIsLoading, setPhotoIsLoading] = useState(true);

    // podcast
    const [podcast, setPodcats] = useState([]);
    const [podcastIsLoading, setPodcastIsLoading] = useState(true);

    // documentaire
    const [docs, setDocs] = useState([]);
    const [docIsLoading, setDocIsLoading] = useState(true);

    const getLatestContent = () => {
        MediathequeService.getLatestMediatheques()
            .then((value) => {
                setPosts(value);

                // getting videos only
                value.rows?.map((entry, index) => {
                    if (entry.type === 'videos')
                        setVideos(videos => videos.concat(entry));

                    if (entry.type === 'autres')
                        setPhotos(photos => photos.concat(entry));

                    if (entry.type === 'podcast')
                        setPodcats(podcast => podcast.concat(entry));

                    if (entry.type === 'documentaire')
                        setDocs(docs => docs.concat(entry));
                })
                setVideoIsLoading(false);
                setPhotoIsLoading(false);
                setPodcastIsLoading(false);
                setDocIsLoading(false);



                setLoading(false);
            });
    };

    useEffect(() => {
        getLatestContent();
    }, []);



    return (
        <MainContentLayout>
            <section className='mainContentLeftSection'>
                {
                    videoIsLoading
                        ? <Skeleton height={300} />
                        : <Videos videosList={videos} />
                }
                {
                    photoIsLoading
                        ? <Skeleton height={300} />
                        : <Photos photosList={photos} />
                }
            </section>
            {/* LEFT SECTION */}
            <section className='mainContentRightSection'>
                {
                    docIsLoading
                        ? <Skeleton height={300} />
                        : <Docs docstList={docs} />
                }
                {/* NEWS LETTER COMPONENT */}
                <NewsLetterWidget envelope={envelope} layout='minimal' />
                {
                    podcastIsLoading
                        ? <Skeleton height={300} />
                        : <Podcasts podcastList={podcast} />
                }
            </section>
        </MainContentLayout>
    )
}

const MainContentLayout = styled.section`
    margin: auto;
    width: var(--cerntered-content);
    min-height: 200px;
    position: relative;
    top: -180px;

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;

    .mainContentRightSection{
        width: 350px !important;
        margin-left: 2rem;
    }
    
    .mainContentLeftSection{
        width: 100%;
    }
`;
