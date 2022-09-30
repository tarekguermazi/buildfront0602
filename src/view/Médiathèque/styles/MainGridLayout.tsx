import React from 'react'
import styled from 'styled-components'

// COMPONENTS
import NewsLetterWidget from 'src/view/shared/NewsLetterWidget';

// ICONS/Assets
import { envelope } from "src/assets/images";

export default function MainGridLayout() {
    return (
        <MainContentLayout>
            <section className='mainContentRightSection'>
                <h1>videos</h1>
                <h2>photos</h2>
            </section>
            {/* LEFT SECTION */}
            <section className='mainContentLeftSection'>
                <h2>Documentaires</h2>
                {/* NEWS LETTER COMPONENT */}
                <NewsLetterWidget envelope={envelope} layout='minimal' />
                <h2>Podcasts</h2>
            </section>
        </MainContentLayout>
    )
}

const MainContentLayout = styled.section`
    margin: auto;
    width: var(--cerntered-content);
    min-height: 200px;
    background-color: yellow;
    position: relative;
    top: -180px;

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;

    .mainContentRightSection{
        background-color: red;
        width: 100%;
    }

    .mainContentLeftSection{
        background-color: pink;
        width: 350px !important;
    }
`;
