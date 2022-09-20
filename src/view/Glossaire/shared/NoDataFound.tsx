import React from 'react'
import styled from 'styled-components'
// ICONS
import { MdOutlineHourglassEmpty } from 'react-icons/md'
import { CgSmileNone } from 'react-icons/cg'


export default function NoDataFound() {
    return (
        <TabMessage>
            <CgSmileNone className='icon' />
            <span>Aucune catégorie trouvée</span>
        </TabMessage>
    )
}

const TabMessage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .icon{
        font-size: 2rem;
        color: var(--violet);
    }

    .loadingIcon{
        animation: spin infinite 2s ease-in-out;
    }

    span{
        margin-top: 1rem;
    }
`