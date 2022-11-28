import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import styled from 'styled-components';
// SERVICES
import GlossaireService from 'src/modules/Glossaire/GlossaireService';


export default function ShowGlossaire() {
    // GET Glosssaire id
    const params = useParams();
    const GLOSSAIRE_ID = params.id;

    const [glossaire, setglossaire] = useState({});
    const getOneGlossaire = GLOSSAIRE_ID => {
        GlossaireService.getOneGloassaire(GLOSSAIRE_ID)
            .then((res: any) => {
                setglossaire(res);
            })
    }


    useEffect(() => {
        getOneGlossaire(GLOSSAIRE_ID);
    }, []);


    return (
        <div>
            <ShowOneGlosaireLayout>
                {
                    (glossaire)
                    &&
                    <>
                        <ShowOneGlosaireHeaderLayout>
                            {glossaire['nomFR'] ?? "N.A"}
                            <div className='label'>{glossaire["categorie"]?.titleFR ?? "N.A"}</div>
                        </ShowOneGlosaireHeaderLayout>

                        <ShowOneGlosaireContentLayout>
                            {glossaire['definitionFR'] ?? "N.A"}
                        </ShowOneGlosaireContentLayout>
                    </>
                }
            </ShowOneGlosaireLayout>
        </div>
    )
}

const ShowOneGlosaireLayout = styled.section`
    max-width: 1170px;
    margin: 2rem auto;

    font-family: "Proxima Nova";
    font-style: normal;
`;

const ShowOneGlosaireHeaderLayout = styled.section`
    width: 100%;
    font-size: 2.1rem;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--violet);

    .label{
        width: fit-content;
        margin: 1rem 0;
        padding: .5rem 1rem;
        font-size: 1rem;
        font-weight: 400;
        text-transform: capitalize;
        color: red;
        background-color: rgba(225,1,26, .06);
        border-radius: .2rem;
    }
`;

const ShowOneGlosaireContentLayout = styled.section`
    margin-top: 2rem;
    width: 100%;
    font-size: 1rem;
    line-height: 1.5;
    font-weight: 400;
    color: var(--violet);
    text-align: justify;
`;