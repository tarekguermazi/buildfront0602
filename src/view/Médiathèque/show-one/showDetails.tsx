import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

// SERVICES
import MediathequeService from 'src/modules/mediatheque/MediathequeService'
import TenantService from 'src/modules/Tenant/TenantService'

// COMPONENTS
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import BreadCrumbs from 'src/view/shared/BreadCrumbs'

import Header from './Header'
import Main from './Main'
import FooterSection from './Footer'

import RelatedContent from './RelatedContent'
import Footer from 'src/view/Layout/Footer'
import MegaFooter from 'src/view/Layout/MegaFooter'





export default function ShowPublication() {
    // GET entity id
    const params = useParams();
    let entityID = params.entity_id;

    // FETCH DETAILS OF THAT ONE ENETITY
    const [entity, setEntity] = useState({});
    const [entityIsLoading, setEntityIsLoading] = useState(true);
    const [data, setData] = useState([]);
    const [user, setUser] = useState({});
    const [userIsLoading, setUserIsLoading] = useState(true);

    const fetchTypeEntitYDetails = entityID => {
        MediathequeService.getOneMediatheque(entityID)
            .then((value) => {
                setEntity(entity => ({ ...entity, ...value }));
                setEntityIsLoading(false);

                // loadig photos to be used in the grid
                value.photos?.map(p => {
                    setData(data => data.concat(p.downloadUrl));
                })

                // fetching user's data once entity is loaded
                TenantService.getTenant(value.tenant)
                    .then(userDetails => {
                        setUser(user => ({ ...user, ...userDetails }));
                        setUserIsLoading(false);
                    })
            });
    }

    useEffect(() => { fetchTypeEntitYDetails(entityID) }, []);

    const getDate = d => {
        return (d?.split('T')[0]);
    }
    const getTime = d => {
        return (d?.split('T')[1]);
    }


    return (
        <section>
            <section className='wideContent'>
                <BreadCrumbs view="Médiathéque" />
                <MainLayout>

                    <section className='rightSection'>
                        <Header entity={entity} getDate={getDate} getTime={getTime} user={user} userIsLoading={userIsLoading} />
                        {
                            entityIsLoading
                                ?
                                <Skeleton height={500} />
                                :
                                <Main entity={entity} data={data} />
                        }
                        <FooterSection userIsLoading={userIsLoading} user={user} />
                    </section>
                </MainLayout>
                <RelatedContent type={entity['type']} />
            </section>
            <MegaFooter />
            <Footer />
        </section>
    )
}

// =========== STYLES ===========
const MainLayout = styled.section`
    width: var(--cerntered-content);
    height: auto;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin: 1rem auto;

    .rightSection{
        width: 100%;
        margin-right: 2.5rem;

        .socials{
            width: fit-content;
            display: flex;
            justify-content: space-evenly;
            align-items: center;

            button{
                background-color: transparent;
                border-radius: 50%;
                color: var(--violet);
                font-size: 1.8rem;
            }
        }

        .data{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 1rem 0;


            font-family: 'Proxima Nova';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 25px;
            color: var(--gray2);

            .dateAndOwner{
                span{
                    display: block;
                }
            }
        }
    }
`;