import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";


export default function VoirPlusButton({ contentType }) {
    return (
        <LinkLayout>
            <Link to={'/Mediatheque/' + contentType}>
                <span>voir plus de {contentType}</span>
            </Link>
        </LinkLayout>
    )
}


const LinkLayout = styled.div`
    margin-top: 1rem;
    margin-bottom: 2rem;
    width: 100%;
    text-align: center;
    span{
        font-family: 'Bebas Neue';
        font-size: 1rem;
        font-weight: 100;
        text-decoration-line: underline;
        color: #E1011A !important;
    }
`;