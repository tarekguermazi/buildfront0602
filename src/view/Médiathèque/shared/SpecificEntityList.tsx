import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import "react-loading-skeleton/dist/skeleton.css";


// COMPONENTS
import BreadCrumbs from 'src/view/shared/BreadCrumbs';
import Skeleton from 'react-loading-skeleton';

export default function SpecificEntityList() {
    const params = useParams();
    const param = params.entity_type;

    return (
        <section>
            <div className='app__contenu'>
                <section className='wideContent'>
                    <h1>{param}</h1>
                    <BreadCrumbs view={"Médiathèques / " + param} />

                    <MainLoadingLayout>
                        <Skeleton height={300} width={270} />
                        <Skeleton height={300} width={270} />
                        <Skeleton height={300} width={270} />
                        <Skeleton height={300} width={270} />
                    </MainLoadingLayout>

                    <MainLayout>

                    </MainLayout>
                </section>
            </div>
        </section>
    )
}


const MainLoadingLayout = styled.section`
    width: 100%;
    margin: 2rem 0;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .react-loading-skeleton{
        width: 100%;
        height: 200px;
    }
`;

const MainLayout = styled.section`
    width: 100%;
    margin: 2rem 0;
`;