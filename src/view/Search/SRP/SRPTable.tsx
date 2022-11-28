import React, { useContext } from 'react'
import styled from 'styled-components'
import Skeleton from 'react-loading-skeleton';
import { SearchContext } from '../SearchContext';
// COMPONENTS
import SRPCard from '../SRPCard';
// ICONS
import { BsBox } from 'react-icons/bs'



export default function SRPTable({ currentPostsToShow }) {
    // GLOBAL STATE
    const { isLoading } = useContext(SearchContext);

    // HELPER FUNCTION
    const getValidThumbnail = attachmentsArray => {
        const acceptableExtions = 'png, jpg, jpeg, gif';
        let fakeUrl = "https://via.placeholder.com/270x175";
        attachmentsArray.forEach(att => {
            if (att.downloadUrl)
                if (att.downloadUrl.length >= 1) {
                    const urlExtension = att.downloadUrl.substring((att.downloadUrl.lastIndexOf('.') + 1), att.downloadUrl.length);
                    if (acceptableExtions.includes(urlExtension)) {
                        fakeUrl = att.downloadUrl;
                    }
                }
        })
        return fakeUrl;
    }


    return (
        <div>
            <SRPDataLayout>
                {
                    // ONCE LOADING IS DONE
                    (isLoading === true)
                        ?
                        <section>
                            <Skeleton height={170} />
                        </section>
                        :
                        <section>
                            {
                                (currentPostsToShow.length >= 1)
                                    ?
                                    <section>
                                        {
                                            currentPostsToShow.map((searchResult, index) => {
                                                console.log("SEARCH RESULT INSIDE MAP :: ", searchResult);

                                                let thumbnail: any;
                                                if (searchResult.supports.length >= 1) {
                                                    thumbnail = getValidThumbnail(searchResult.supports);
                                                }
                                                return (
                                                    <SRPCard
                                                        key={index}
                                                        _id={searchResult['_id'] ?? 0}
                                                        date={searchResult['createdAt']}
                                                        content={searchResult['descriptionFR'] ?? 'N.A'}
                                                        thumbnail={thumbnail}
                                                    />
                                                )
                                            })
                                        }
                                    </section>
                                    :
                                    <h3 id='noDataFound'><BsBox />&nbsp;No data found !</h3>
                            }
                        </section>
                }
            </SRPDataLayout>
        </div>
    )
}

const SRPDataLayout = styled.div`
    width: 100%;
    margin: 1rem 0;

    #noDataFound{
        font-family: 'Proxima Nova';
        font-style: normal;
        font-weight: 100;
        font-size: 1.5rem;
        text-align: center;
        color: #c7c6c6;

        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
`;