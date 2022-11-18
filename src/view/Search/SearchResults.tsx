import React, { useContext } from 'react'
import styled from 'styled-components'
import SearchService from 'src/modules/Search/SearchService';
import { SearchContext } from './SearchContext';
// COMPONENTS
import SRPCard from './SRPCard';
import Skeleton from 'react-loading-skeleton';
import "react-loading-skeleton/dist/skeleton.css";
// ICONS
import { MdNavigateBefore, MdOutlineNavigateNext } from 'react-icons/md'
import { BsBox } from 'react-icons/bs'


export default function SearchResults() {

    // GLOBAL STATE
    const { isLoading, setIsLoading, SRP, setSRP, searchString } = useContext(SearchContext);

    // HANDLING SUB FILTER (date / name)
    const handleSubFilter = event => {
        setIsLoading(true);
        setSRP([]);
        const FILTER_STRING = `&orderBy=[${event.target.value}]`;
        // redo the search using chosen option
        SearchService.getSearchResultsForPublicationsBasedOnSearchString(searchString, FILTER_STRING)
            .then(res => {
                setSRP(SRP => SRP.concat(res));
                setIsLoading(false);
            })
    }

    // HELPER FUNCTION
    const getValidThumbnail = attachmentsArray => {
        const acceptableExtions = 'png, jpg, jpeg, gif';
        let fakeUrl = "https://via.placeholder.com/270x175";
        attachmentsArray.forEach(att => {
            const urlExtension = att.downloadUrl.substring((att.downloadUrl.lastIndexOf('.') + 1), att.downloadUrl.length);
            if (acceptableExtions.includes(urlExtension)) {
                fakeUrl = att.downloadUrl;
            }
        })
        return fakeUrl;
    }

    return (
        <SRPLayout>
            {
                (SRP.length >= 1) &&
                <SRPHeader>
                    <div>
                        <strong>{SRP[0].rows.length}</strong>
                        <span>résultat pour cette recherche</span>
                    </div>
                    <div id='filterContainer'>
                        <span>Trier par</span>
                        <select name="filterBy" id="filterBySelect" onChange={handleSubFilter}>
                            <option value="">--</option>
                            <option value="createdAt_DESC">Date ( Desc )</option>
                            <option value="createdAt_ASC">Date ( Asc )</option>
                            <option value="az">Name A-Z</option>
                            <option value="za">Name Z-A</option>
                        </select>
                    </div>
                </SRPHeader>
            }

            <SRPData>
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
                                // MAKE SURE THERE ARE DATA RETURNED
                                (SRP.length >= 1) &&
                                <section>
                                    {
                                        (SRP[0].rows.length >= 1)
                                            ?
                                            <section>
                                                {
                                                    SRP[0].rows.map((searchResult, index) => {
                                                        let thumbnail: any;
                                                        if (searchResult.supports.length >= 1) {
                                                            thumbnail = getValidThumbnail(searchResult.supports);
                                                            console.log("THMBNAIL ::: ", thumbnail);

                                                        }
                                                        return <SRPCard key={index} _id={searchResult._id} date={searchResult.createdAt} content={searchResult.descriptionFR} thumbnail={thumbnail} />
                                                    })
                                                }
                                            </section>
                                            :
                                            <h3 id='noDataFound'><BsBox />&nbsp;No data found !</h3>
                                    }
                                </section>
                            }
                        </section>
                }
            </SRPData>

            {
                // MAKE SURE THERE ARE DATA RETURNED
                (SRP.length >= 1) &&
                <section>
                    {
                        (SRP[0].rows.length >= 1) &&
                        <SRPFooter>
                            <button className='pageSkipper prevSkipper'>
                                <MdNavigateBefore className='icon prev' />
                                Précédent
                            </button>
                            <div id="pagination">
                                <button>1</button>
                                <button>2</button>
                                <button>3</button>
                            </div>
                            <button className='pageSkipper nextSkipper'>
                                Suivant
                                <MdOutlineNavigateNext className='icon next' />
                            </button>
                        </SRPFooter>
                    }
                </section>
            }

        </SRPLayout >
    )
}


const SRPLayout = styled.div`
    margin-top: 1rem;
`;

const SRPHeader = styled.div`
    width: 100%;
    padding: 1rem 0;
    font-size: 14px;
    
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    div{
        strong{
            margin-right: .4rem;
        }
        span, strong{
            font-family: 'Proxima Nova';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            margin-right: .5rem;
        }
    }

    #filterContainer{
        span{
            font-family: 'Proxima Nova';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            margin-right: .5rem;
        }

        select{
            padding: .5rem;
            font-family: 'Proxima Nova';
            font-style: normal;
            font-weight: 700;
            font-size: 14px;
            line-height: 17px;
            color: #2B2840;
        }
    }
`;

const SRPData = styled.div`
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

const SRPFooter = styled.div`
    width: 100%;
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;

    button{
        height: 35px;
        width: 100px;
        font-family: 'Proxima Nova';
        font-size: 12px;
        color: var(--violet);
        border: 1px solid #A3A3A9;
        background-color: transparent;

        &:hover{
            background-color: var(--violet);
            border: 1px solid var(--violet);
            color: #fff;
        }
        &:hover .icon{
            background-color: transparent;
        }
    }

    .pageSkipper{
        display: flex;
        align-items: center;
        justify-content: space-evenly;

        .next{
            /* margin-left: .2rem; */
            font-size: 1.3rem;
        }
    }

    .prevSkipper{
        color: #A3A3A9;

        .prev{
            /* margin-right: .2rem; */
            font-size: 1.3rem;
            color: #A3A3A9;
        }
    }

    #pagination{
        margin: 0 .5rem;
        width: 150px;
        display: flex;
        justify-content: space-evenly;

        button{
            display: inline-block;
            height: 35px;
            min-width: fit-content;
            width: 40px;
        }
    }
`;