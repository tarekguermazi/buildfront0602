import React from 'react'
import { i18n } from 'src/i18n';
import styled from 'styled-components'

export default function LeftSection() {
    return (
        <LeftLayout>
            <h3>{i18n("ContactPage.titlep")}</h3>

            <h3 className="sectionTitle">{i18n("ContactPage.ParTelephone")}</h3>
            <p>{i18n("ContactPage.Jour")}</p>

            <h3 className="sectionTitle">{i18n("ContactPage.Email")}</h3>
            <p>{i18n("ContactPage.contactp")}<a href="mailto:contact@al-forum.org">Contact@al-forum.org</a></p>

            <h3 className="sectionTitle">{i18n("ContactPage.ReseauxSociaux")}</h3>
            <p>SOCIAL_MEDIA_HERE</p>
        </LeftLayout>
    )
}

const LeftLayout = styled.section`
    h3{
        font-family: "Proxima Nova";
        text-transform: capitalize;
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