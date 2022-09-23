import React from 'react'
import styled from 'styled-components'
// ICONS
import { MdOutlineHourglassEmpty } from 'react-icons/md'


export default function LoadingData() {
    return (
        <TabMessage>
            <MdOutlineHourglassEmpty className='icon loadingIcon' />
            <span>Chargement des données</span>
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

    @keyframes spin {
        from {transform:rotate(0deg);}
        to {transform:rotate(360deg);}
    }
`