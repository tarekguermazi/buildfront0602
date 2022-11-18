import React, { useState } from 'react'
import { SearchContext } from './SearchContext'
// STYLES
import SearchLayout from './styles/SearchLayout'
// COMPONENTS
import SearchHeader from './SearchHeader'
import SearchFilter from './SearchFilter'
import SearchResults from './SearchResults'
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
