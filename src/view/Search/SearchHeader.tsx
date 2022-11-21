import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import SearchService from 'src/modules/Search/SearchService';
import { SearchContext } from './SearchContext';
// ICONS
import { IoSearchOutline } from 'react-icons/io5'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { VscChromeClose } from 'react-icons/vsc'

export default function SearchHeader({ location }) {

    // GLOBAL STATE
    const { isLoading, setIsLoading, setSRP, searchString, setSearchString } = useContext(SearchContext);

    // SEARCH_STRING HANDLER
    const handleChange = event => {
        setSearchString(event.target.value);
    }

    // HANDLING FORM SUBMIT
    const handleSubmit = event => {
        event.preventDefault();
        setSRP([]);
        searchPublications(searchString);
    }

    // FETCH DATA
    const searchPublications = (SEARCH_STRING: string) => {
        setIsLoading(true);
        SearchService.getSearchResultsForPublicationsBasedOnSearchString(SEARCH_STRING, '')
            .then(res => {
                setSRP(SRP => SRP.concat(res));
                setIsLoading(false);
            })
    }

    // RESET SEARCH INPUT TO EMPTY
    const cancelSearch = _ => {
        setSearchString('');
    }

    // 
    // AUTO SEARCH IF COMMING FRO HOME SEARCH_BAR
    useEffect(() => {
        // COMMING FROM THE HOME SEARCH BAR
        if (location.HOME_SEARCH_STRING) {
            if (location.HOME_SEARCH_STRING.length >= 1) {
                setSearchString(location.HOME_SEARCH_STRING);
                setSRP([]);
                searchPublications(location.HOME_SEARCH_STRING);
            }
        }

        // COMMING FROM THE ARCHIVE SECTION
        if (location.ARCHIVE_SEARCH_STRING) {
            if (location.ARCHIVE_SEARCH_STRING.length >= 1) {
                setSearchString(location.ARCHIVE_SEARCH_STRING);
                setSRP([]);
                searchPublications(location.ARCHIVE_SEARCH_STRING);
            }
        }
    }, []);

    return (
        <HeaderLayout>
            <form onSubmit={handleSubmit}>
                <SearchBox>
                    <input type="text" value={searchString} onChange={handleChange} />
                    {
                        (searchString.length >= 1) &&
                        <button type='reset' id='resetButton' onClick={cancelSearch}>
                            <VscChromeClose />
                        </button>
                    }
                    {/* 
                        Show submit button 
                        once search action triggers, show loading button till result has been returned
                    */}
                    {
                        (!isLoading)
                            ?
                            <button type="submit" className='searchButton'>
                                <IoSearchOutline />
                                <span>Chercher</span>
                            </button>
                            :
                            <div id='loadingButton' className='searchButton'>
                                <AiOutlineLoading3Quarters className='loadingIcon' />
                                <span>loading</span>
                            </div>
                    }
                </SearchBox>
            </form>
        </HeaderLayout>
    )
}

const HeaderLayout = styled.div`
    margin-top: 1rem;
`;

const SearchBox = styled.div`
    width: 100%;
    height: 60px;
    padding: 0 .3rem;
    background-color: #F1F1F1;
    /* background-color: #F1F1F1; */

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: relative;
    
    input{
        background-color: #F1F1F1;
        font-size: 1rem;
        font-weight: bold;
        height: 50px;
        width: 100%;
        margin-right: .5rem;
        color: #000;
        padding-left: 1rem;
    }

    .searchButton{
        height: 50px;
        padding: 0 1rem;
        color: #fff;
        text-transform: uppercase;
        font-size: 1.5rem;
        background-color: red;

        display: flex;
        flex-direction: row;
        align-items: center;

        span{
            color: #fff;
            margin-left: .5rem;
        }
    }

    #loadingButton{
        background-color: #E0E0E0;
        color: #000;

        .loadingIcon{
            animation: spin .7s linear infinite;
        }
    }

    #resetButton{
        height: 1.8rem;
        width: 1.8rem;

        position: absolute;
        right: 11rem;
        
        font-size: 1rem;
        color: var(--gray3);
        background-color: #E0E0E0;

        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
    }

    @keyframes spin {
        from {transform:rotate(0deg);}
        to {transform:rotate(360deg);}
    }
`;