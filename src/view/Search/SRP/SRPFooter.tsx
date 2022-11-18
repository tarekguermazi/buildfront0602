import React from 'react'
import styled from 'styled-components'

// ICONS
import { MdNavigateBefore, MdOutlineNavigateNext } from 'react-icons/md'

export default function SRPFooter({ totalPosts, numberOfPostsPerPage, currentPageIndex, setcurrentPageIndex }) {

    let pages: any[] = [];
    for (let index = 0; index < Math.ceil(totalPosts / numberOfPostsPerPage); index++) {
        pages.push(index);
    }

    return (
        <FooterLayout>
            {/* PREVIOUS BUTTON */}
            {
                (currentPageIndex > 1)
                    ?
                    <button
                        className='pageSkipper prevSkipper'
                        onClick={() => setcurrentPageIndex(currentPageIndex - 1)}
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
                            className={pageNumber === (currentPageIndex - 1) ? 'activeIndex' : ''}
                            onClick={() => setcurrentPageIndex(pageNumber + 1)}
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
                        onClick={() => setcurrentPageIndex(currentPageIndex + 1)}
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
        width: 150px;
        display: flex;
        justify-content: space-evenly;

        button{
            display: inline-block;
            height: 35px;
            min-width: fit-content;
            width: 40px;
        }

        .activeIndex{
            background-color: var(--violet);
            color: #fff;
        }
    }
`;