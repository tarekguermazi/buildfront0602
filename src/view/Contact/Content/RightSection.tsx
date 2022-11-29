import React, { useState } from 'react'
import styled from 'styled-components'
// COMPONENTS
import FormHeader from './FormHeader';
import FormBody from './FormBody';

export default function RightSection() {
    const [userType, setUserType] = useState('chercheur/se');

    return (
        <RightLayout>
            <FormHeader setUserType={setUserType} />
            <FormBody userType={userType} />
        </RightLayout>
    )
}

const RightLayout = styled.section`
    width: 700px;
    position: relative;
`;