import React from 'react'
import styled from 'styled-components'

// COMPOENNTS
import RightSection from './RightSection';
import LeftSection from './LeftSection';

export default function Content() {
    return (
        <MainLayout>
            <LeftSection />
            <RightSection />
        </MainLayout>
    )
}

const MainLayout = styled.section`
    margin: 0 auto;
    margin-bottom: 1rem;
    max-width: 1170px;
    margin:auto;
    min-height: 200px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media screen and (max-width: 1024px){ 
            flex-direction:column; 
            row-gap : 55px;
    }
`;