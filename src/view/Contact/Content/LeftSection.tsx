import React from 'react'
import styled from 'styled-components'

export default function LeftSection() {
    return (
        <LeftLayout>
            <h4>Echanger avec <br /> nous</h4>

            <h3 className="sectionTitle">Par téléphone</h3>
            <p>Du lundi au Vendredi de 8H à 16H au 71.325.109</p>

            <h3 className="sectionTitle">Par E-mail</h3>
            <p>Contactez-nous sur le <a href="mailto:contact@al-forum.org">Contact@al-forum.org</a></p>

            <h3 className="sectionTitle">Par réseaux sociaux</h3>
            <p>SOCIAL_MEDIA_HERE</p>
        </LeftLayout>
    )
}

const LeftLayout = styled.section`
    width: 500px;
    padding: 2rem 0;

    h4{
        font-family: "Proxima Nova";
        font-weight: bold;
        text-transform: capitalize;
        /* font-size: 1.2rem; */
        line-height: 1.5;
        color: var(--violet);
    }
    
    .sectionTitle{
        margin-top: 1rem;
        font-family: "Proxima Nova";
        text-transform: capitalize;
        font-size: 1.2rem;
        color: #E1011A;
    }
    
    p{
        font-family: "Proxima Nova";
        line-height: 1.5;
        font-size: 1rem;
        color: #000;
    }
`;