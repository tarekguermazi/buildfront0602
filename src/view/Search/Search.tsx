import React from 'react'
// STYLES
import SearchLayout from './styles/SearchLayout'
// COMPONENTS
import SearchHeader from './SearchHeader'
import SearchFilter from './SearchFilter'
// OTHER

export default function Search() {
    return (
        <SearchLayout>
            <section className='wideContent'>
                <SearchHeader />
                <SearchFilter />
            </section>
        </SearchLayout>
    )
}
