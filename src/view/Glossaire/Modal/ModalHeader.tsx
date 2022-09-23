import React from 'react'
import styled from 'styled-components'

// ICONS
import { VscChromeClose } from 'react-icons/vsc'

export default function ModalHeader({ title, setIsShowing }) {
    return (
        <Header>
            <h1>{title}</h1>
            <span
                className="closeTrigger"
                onClick={() => setIsShowing(false)}
            >
                <VscChromeClose />
            </span>
        </Header>
    )
}


const Header = styled.div`
    width: 100%;
    height: 50px;
    font-size: 2.1rem;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--violet);

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .closeTrigger{
        font-size: 3rem;
        cursor: pointer;
        
        &:hover{
            color: red;
        }
    }
`