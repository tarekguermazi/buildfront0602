import React from 'react'
// COMPONENTS
import BreadCrumbs from '../shared/BreadCrumbs'
import HeroSection from './HeroSection'

export default function Header() {
    return (
        <section>
            <h1>Médiathèques</h1>
            <BreadCrumbs view="Médiathèques" />
        </section>
    )
}
