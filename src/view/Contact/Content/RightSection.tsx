import React, { useState } from 'react'
import styled from 'styled-components'
// COMPONENTS
import FormHeader from './FormHeader';
import FormBody from './FormBody';

export default function RightSection() {
    // SIMPLE FORM SATTES
    // SIMPLE FORM REQUIRES SIMPLE LOGIC
    // PLEASE CONCIDER REFACTORING IF FORM GETS MORE COMPLICATED
    const [sender, setSender] = useState('chercheur/se');
    const [type, setType] = useState(null);
    const [explanation, setExplanation] = useState('');

    return (
        <RightLayout>
            <FormHeader setUserType={setSender} />
            <FormBody
                sender={sender}
                type={type} setType={setType}
                explanation={explanation} setExplanation={setExplanation}
            />
        </RightLayout>
    )
}

const RightLayout = styled.section`
    width: 700px;
    position: relative;
`;