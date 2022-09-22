import React from 'react'
import styled from 'styled-components'

// ICONS
import { VscChromeClose } from 'react-icons/vsc'

export default function ModalLabel({ label }) {
    return (
        <Label>{label}</Label>
    )
}


const Label = styled.div`
    width: fit-content;
    margin: 1rem 0;
    padding: .5rem 1rem;
    font-size: 1rem;
    font-weight: 400;
    text-transform: capitalize;
    color: red;
    background-color: rgba(225,1,26, .06);
    border-radius: .2rem;
`