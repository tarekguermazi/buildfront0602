import React from 'react'
import styled from 'styled-components'

export default function SectionHeader({ title }) {
    return (
        <HeaderLayout>
            <header>
                <span>{title}</span>
            </header>
        </HeaderLayout>
    )
}

const HeaderLayout = styled.div`
    header{
        width: 100%;
        margin-bottom: 1rem;

        span{
            font-size: 2.5rem;
            text-transform: uppercase;
            font-family: 'Bebas Neue Pro';

            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;

            &:after{
                content: '';
                display: inline-block;
                height: 3px;
                width: 89%;
                background-color: red;
            }
        }
    }

`;