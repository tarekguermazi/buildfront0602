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
   
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin:2rem 0 1rem 0;

    @media screen and (max-width: 1024px){ 
            flex-direction:column; 
            row-gap : 55px;
    }
`;