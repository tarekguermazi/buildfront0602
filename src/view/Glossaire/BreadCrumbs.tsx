import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function BreadCrumbs({ view }) {

    const capitalize = text => {
        return text.charAt(0).toUpperCase() + text.slice(1)
    }

    return (
        <div>
            {/* BREADCRUMBS */}
            <BreadCrumbsHeader>
                <Link to='/' className="homeLinkInBC">Accueil</Link> <span className="currentView">/ {capitalize(view)}</span>
            </BreadCrumbsHeader>
        </div>
    )
}

const BreadCrumbsHeader = styled.div`
    margin: 1rem 0;
    font-size: '1rem';

    .currentView{
        color: var(--gray3);
    }

    .homeLinkInBC{
        text-decoration: none;
        color: var(--gray2);
        
        &:hover{
            text-decoration: underline;
        }
    }
`
