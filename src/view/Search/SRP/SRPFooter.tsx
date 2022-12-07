import React, { useContext } from 'react'
import styled from 'styled-components'
import SearchService from 'src/modules/Search/SearchService';
import { SearchContext } from '../SearchContext';

// ICONS
import { MdNavigateBefore, MdOutlineNavigateNext } from 'react-icons/md'

export default function SRPFooter({ totalPosts }) {


    // GLOBAL STATE
    const {
        setIsLoading,
        setSRP,
        searchString,
        numberOfPostsPerPage,
        currentPageIndex,
        setcurrentPageIndex
    } = useContext(SearchContext);

    let pages: any[] = [];
    for (let index = 0; index < Math.ceil(totalPosts / numberOfPostsPerPage); index++) {
        pages.push(index);
    }

    const changePagesUsingArrows = (pageNumber: number, action: string) => {
        setIsLoading(true);
        setSRP([]);
        if (action === 'prev') {
            setcurrentPageIndex(pageNumber - 1);
            fetchData(pageNumber - 1);
        }
        if (action === 'next') {
            setcurrentPageIndex(pageNumber + 1);
            fetchData(pageNumber + 1);
        }
    }

    const loadCOntentOfCurrentPage = (index: number) => {
        setIsLoading(true);
        setcurrentPageIndex(index);
        setSRP([]);
        fetchData(index);
    }

    const fetchData = index => {
        SearchService.getSearchResultsForPublicationsBasedOnSearchString(searchString, 'autre', (index * 5))
            .then(res => {
                setSRP(SRP => SRP.concat(res));
                setIsLoading(false);
            })
            .catch(err => { console.error(err) });
    }

    return (
        <FooterLayout>
            {/* 
                PREVIOUS BUTTON
                Enable if not in first page (0)
                page number must be >=1
             */}
            {
                (currentPageIndex >= 1)
                    ?
                    <button
                        className='pageSkipper prevSkipper'
                        onClick={() => changePagesUsingArrows(currentPageIndex, 'prev')}
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
                {
                    pages.map((index) => {
                        return (
                            <button
                                key={index}
                                className={(index === currentPageIndex) ? 'activeIndex' : ''}
                                onClick={() => loadCOntentOfCurrentPage(index)}
                            >
                                {index + 1}
                            </button>
                        )
                    })
                }
            </div>
            {/* NEXT BUTTON */}
            {
                (currentPageIndex < (totalPosts / numberOfPostsPerPage) - 1)
                    ?
                    <button
                        className='pageSkipper nextSkipper'
                        onClick={() => changePagesUsingArrows(currentPageIndex, 'next')}
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