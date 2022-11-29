import React from 'react'
import styled from 'styled-components'
// COMPONENTS
import FormHeader from './FormHeader';
import FormBody from './FormBody';

export default function RightSection() {
    return (
        <RightLayout>
            <FormHeader />
            <FormBody />
        </RightLayout>
    )
}

const RightLayout = styled.section`
    width: 700px;
    position: relative;
`;