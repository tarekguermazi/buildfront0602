import React from 'react'
import BreadCrumbs from '../shared/BreadCrumbs'
import styled from 'styled-components'

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
            <DescriptionSection>
                <p>
                    Description lorem ipsum, dolor sit amet consectetur adipisicing
                    elit. Omnis voluptates deserunt optio maxime ad vero voluptatum
                    quibusdam laborum nulla
                </p>
            </DescriptionSection>
        </div>
    )
}

const DescriptionSection = styled.section`
    color: var(--violet);
    font-size: 1rem;
    font-weight: 400;
    margin: 1rem 0;
    text-align: justify;
`
