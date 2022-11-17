import React, { useState } from 'react'
// STYLES
import SearchLayout from './styles/SearchLayout'
// COMPONENTS
import SearchHeader from './SearchHeader'
import SearchFilter from './SearchFilter'
import SearchResults from './SearchResults'
// OTHER

export default function Search() {

    // GLOBAL STATE
    const [isLoading, setIsLoading] = useState(false);
    const [SRP, setSRP] = useState([]);


    return (
        <SearchLayout>
            <section className='wideContent'>
                <SearchHeader setIsLoading={setIsLoading} isLoading={isLoading} setSRP={setSRP} />
                <SearchFilter />
                <SearchResults isLoading={isLoading} SRP={SRP} />
            </section>
        </SearchLayout>
    )
}
