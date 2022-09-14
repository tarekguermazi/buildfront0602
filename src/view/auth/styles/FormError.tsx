import React from 'react'
import styled from 'styled-components'

export default function FormError(props) {
    const { message } = props;
    return (
        <Alert>
            {message}
        </Alert>
    )
}

const Alert = styled.div`
    width : 100%;
    padding: 1rem 1rem;
    margin: 1rem 0;
    color: #721c24;
    background-color: #f8d7da;
    border-color: #f5c6cb;
    border-radius: .5rem;
`;