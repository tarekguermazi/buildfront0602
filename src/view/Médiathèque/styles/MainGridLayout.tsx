import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import MediathequeService from 'src/modules/mediatheque/MediathequeService';

// COMPONENTS
import Videos from '../sub-sections/Videos';
import Photos from '../sub-sections/Photos';
import Podcasts from '../sub-sections/Podcasts';
import Docs from '../sub-sections/Docs';
import VoirPlusButton from '../shared/VoirPlusButton';

// ICONS/Assets
import Skeleton from 'react-loading-skeleton';

export default function MainGridLayout() {
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
        let videosCOunt = 0;
        let audioCOunt = 0;
        let photosCOunt = 0;
        let docsCOunt = 0;
        MediathequeService.getLatestMediatheques()
            .then((value) => {
                // getting videos only
                value.rows?.map((entry, index) => {
                    if (entry.type === 'videos') {
                        if (videosCOunt < 8) {
                            setVideos(videos => videos.concat(entry));
                            videosCOunt += 1;
                        }
                    }

                    if (entry.type === 'autres') {
                        if (photosCOunt < 8) {
                            setPhotos(photos => photos.concat(entry));
                            photosCOunt += 1;
                        }
                    }

                    if (entry.type === 'podcast') {
                        if (audioCOunt < 2) {
                            setPodcats(podcast => podcast.concat(entry));
                            audioCOunt += 1;
                        }
                    }

                    if (entry.type === 'documentaire') {
                        if (docsCOunt < 2) {
                            setDocs(docs => docs.concat(entry));
                            docsCOunt += 1;
                        }
                    }
                })
                setVideoIsLoading(false);
                setPhotoIsLoading(false);
                setPodcastIsLoading(false);
                setDocIsLoading(false);
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
                        :
                        <section>
                            {
                                (videos.length > 0)
                                    ?
                                    <section>
                                        <Videos videosList={videos} />
                                        <VoirPlusButton contentType='videos' />
                                    </section>
                                    :
                                    <h2>No videos were found</h2>
                            }
                        </section>
                }
                {
                    photoIsLoading
                        ? <Skeleton height={300} />
                        :
                        <section>
                            {
                                (photos.length > 0)
                                    ?
                                    <section>
                                        <Photos photosList={photos} />
                                        <VoirPlusButton contentType='photos' />
                                    </section>
                                    :
                                    <h2>No photos were found</h2>
                            }
                        </section>
                }
            </section>
            {/* LEFT SECTION */}
            <section className='mainContentRightSection'>
                {
                    docIsLoading
                        ? <Skeleton height={300} />
                        :
                        <section>
                            {
                                (docs.length > 0)
                                    ?
                                    <section>
                                        <Docs docstList={docs} />
                                        <VoirPlusButton contentType='documentaires' />
                                    </section>
                                    :
                                    <h2>No Docs were found</h2>
                            }
                        </section>
                }
                {
                    podcastIsLoading
                        ? <Skeleton height={300} />
                        :
                        <section>
                            {
                                (podcast.length > 0)
                                    ?
                                    <section>
                                        <Podcasts podcastList={podcast} />
                                        <VoirPlusButton contentType='podcasts' />
                                    </section>
                                    :
                                    <h2>No podcasts were found</h2>
                            }
                        </section>
                }
            </section>
        </MainContentLayout>
    )
}

const MainContentLayout = styled.section`
    margin: 1rem auto;
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
