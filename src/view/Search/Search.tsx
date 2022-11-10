import React from 'react'
// STYLES
import SearchLayout from './styles/SearchLayout'
// COMPONENTS
import SearchHeader from './SearchHeader'
import SearchFilter from './SearchFilter'
import SearchResults from './SearchResults'
// OTHER

export default function Search() {
    return (
        <SearchLayout>
            <section className='wideContent'>
                <SearchHeader />
                <SearchFilter />
                <SearchResults />
            </section>
        </SearchLayout>
    )
}
