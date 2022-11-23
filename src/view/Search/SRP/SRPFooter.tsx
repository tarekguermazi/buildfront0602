import React, { useContext } from 'react'
import styled from 'styled-components'
import SearchService from 'src/modules/Search/SearchService';
import { SearchContext } from '../SearchContext';

// ICONS
import { MdNavigateBefore, MdOutlineNavigateNext } from 'react-icons/md'

export default function SRPFooter({ totalPosts, numberOfPostsPerPage, currentPageIndex, setcurrentPageIndex }) {


    // GLOBAL STATE
    const { setIsLoading, setSRP, searchString } = useContext(SearchContext);

    let pages: any[] = [];
    for (let index = 0; index < Math.ceil(totalPosts / numberOfPostsPerPage); index++) {
        pages.push(index);
    }

    const handlePageChange = (pageNumber: number, action: string) => {
        console.log("pageNumber ::: ", pageNumber, "|| Action :: ", action, "|| currentPageIndex :: ", currentPageIndex);
        setIsLoading(true);
        if (pageNumber !== currentPageIndex) {
            if (action === "next")
                setcurrentPageIndex(pageNumber + 1);
            else
                setcurrentPageIndex(pageNumber - 1);
        }
        setSRP([]);
        SearchService.getSearchResultsForPublicationsBasedOnSearchString(searchString, 'autre', (currentPageIndex * 5))
            .then(res => {
                setSRP(SRP => SRP.concat(res));
                setIsLoading(false);
            })
            .catch(err => { console.error(err) });
    }

    return (
        <FooterLayout>
            {/* PREVIOUS BUTTON */}
            {
                (currentPageIndex > 1)
                    ?
                    <button
                        className='pageSkipper prevSkipper'
                        onClick={() => handlePageChange((currentPageIndex - 1), 'prev')}
                    >
                        <MdNavigateBefore className='icon prev' />
                        Précédent
                    </button>
                    :
                    <button className='pageSkipper diabled' disabled>
                        <MdNavigateBefore className='icon prev' />
                        Précédent
                    </button>
            }

            {/* DYNAMIC BUTTONS BASED ON ITEMS COUNT */}
            <div id="pagination">
                {pages.map((pageNumber, index) => {
                    return (
                        <button
                            key={index}
                            className={(pageNumber === currentPageIndex) ? 'activeIndex' : ''}
                            onClick={() => handlePageChange(pageNumber, 'next')}
                        >
                            {pageNumber + 1}
                        </button>
                    )
                })}
            </div>
            {/* NEXT BUTTON */}
            {
                (currentPageIndex < (totalPosts / numberOfPostsPerPage))
                    ?
                    <button
                        className='pageSkipper nextSkipper'
                        onClick={() => handlePageChange(currentPageIndex, 'next')}
                    >
                        Suivant
                        <MdOutlineNavigateNext className='icon next' />
                    </button>
                    :
                    <button className='pageSkipper diabled' disabled>
                        Suivant
                        <MdOutlineNavigateNext className='icon next' />
                    </button>
            }
        </FooterLayout >
    )
}


const FooterLayout = styled.div`
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
        color: var(--violet);
        .next{
            /* margin-left: .2rem; */
            font-size: 1.3rem;
        }

        .prev{
            /* margin-right: .2rem; */
            font-size: 1.3rem;
            
        }
    }
    .diabled{ 
        color: #A3A3A9;
        &:hover{
            background-color: transparent;
            color: #A3A3A9;
            border: 1px solid #A3A3A9;
            cursor: default;
        }
    }

    #pagination{
        margin: 0 .5rem;
        width: calc(fit-content + 100px);
        display: flex;
        justify-content: space-between;

        button{
            display: inline-block;
            width: 40px;
            min-width: fit-content;
            height: 35px;
            margin: 0 .2rem;

        }

        .activeIndex{
            background-color: var(--violet);
            color: #fff;
        }
    }
`;