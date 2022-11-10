import React from 'react'
// STYLES
import SearchLayout from './styles/SearchLayout'
// COMPONENTS
import SearchHeader from './SearchHeader'
// OTHER

export default function Search() {
    return (
        <SearchLayout>
            <section className='wideContent'>
                <SearchHeader />
            </section>
        </SearchLayout>
    )
}
