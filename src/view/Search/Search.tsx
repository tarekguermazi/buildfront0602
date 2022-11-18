import React, { useState } from 'react'
import { SearchContext } from './SearchContext'
import styled from 'styled-components'
// COMPONENTS
import SearchHeader from './SearchHeader'
import SearchFilter from './SearchFilter'
import SearchResults from './SRP/SearchResults'
// OTHER

export default function Search({ location }) {

    // GLOBAL STATE
    const [isLoading, setIsLoading] = useState(false);
    const [searchString, setSearchString] = useState('');
    const [SRP, setSRP] = useState([]);

    return (
        <SearchContext.Provider value={{ isLoading, setIsLoading, SRP, setSRP, searchString, setSearchString }}>
            <SearchLayout>
                <section className='wideContent'>
                    <SearchHeader location={location} />
                    <SearchFilter />
                    <SearchResults />
                </section>
            </SearchLayout>
        </SearchContext.Provider>
    )
}

const SearchLayout = styled.section`
    height: 100%;
    .wideContent{
        padding: 0 7rem;
    }

`;