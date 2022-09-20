import React from 'react'
import BreadCrumbs from './BreadCrumbs'

export default function Header() {
    return (
        <div>

            <BreadCrumbs view='glossaire' />

            {/* TITLE */}
            <div className='archieve__header'>
                <h2>GLOSSAIRE&nbsp;</h2>
                <div className='communiquer__bar'></div>
            </div>

            {/* DESCRIPTION PLACEHOLDER */}
            <section className='description'>
                <p>
                    Description lorem ipsum, dolor sit amet consectetur adipisicing
                    elit. Omnis voluptates deserunt optio maxime ad vero voluptatum
                    quibusdam laborum nulla
                </p>
            </section>
        </div>
    )
}
