import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import MediathequeService from 'src/modules/mediatheque/MediathequeService';
// COMPONENTSS
import SectionHeader from './shared/SectionHeader';


export default function RelatedContent({ type }) {

    // Fetching related entities based on type
    const [related, setRelated] = useState<any[]>([]);
    const [entityIsLoading, setEntityIsLoading] = useState(true);

    const fetchRelatedContent = type => {
        const routeExtension = `?filter[type]=${type}`;
        MediathequeService.getMediathequesBasedOnType(routeExtension)
            .then((value) => {

                value.rows?.map(entry => {
                    setRelated(related => related.concat(entry));
                });
                setEntityIsLoading(false);
            });
    }
    useEffect(() => { fetchRelatedContent(type) }, [type]);

    // HELPER FUNCTION
    const getDate = d => {
        return (d?.split('T')[0]);
    }


    return (
        <RelatedCOntentLayout>
            <SectionHeader title='publications qui peuvent vous intéresser' />
            {
                entityIsLoading
                    ?
                    <section>
                        <h4>Loading related content...</h4>
                    </section>
                    :
                    <div className="gridLayout">

                        {
                            related?.map(entity => {
                                return (
                                    <HorizontalCard key={entity['_id']}>
                                        {
                                            (entity['photos'].length > 0)
                                                ?
                                                <div className="cardImage cardThumbnail" style={{ backgroundImage: "url(" + entity['photos'][0].downloadUrl + ")" }} >
                                                </div>
                                                :
                                                <div className="cardImage cardThumbnail hasNoThumbnail">
                                                </div>
                                        }
                                        <div className="cardContent">
                                            <div className="cardHeader">
                                                <span className="categoryBadge">{entity['type']}</span>
                                                <span>{getDate(entity['createdAt'])}</span>
                                            </div>
                                            <span className="title">{entity['titleFR']}</span>
                                        </div>
                                    </HorizontalCard>
                                )
                            })
                        }
                    </div>
            }
        </RelatedCOntentLayout>
    )
}

// S T Y L E S
const RelatedCOntentLayout = styled.section`
    margin: 3rem 0;
    width: 100%;

    .gridLayout{
        margin-top: 2rem;
        width: 100%;
        display: grid;
        grid-gap: 1rem;
        grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    }
`;

const HorizontalCard = styled.div`
    height: 200px;

    display: flex;
    flex-direction: row;
    align-items: center;


    /* LEFT SECTION */
    .cardThumbnail{
        width: 100%;
        height: 200px;
        background-size: cover;
        background-position: center;
        position: relative;
    }
    .hasNoThumbnail{
        background-image: url('https://imgur.com/N1ZiTM4.jpeg');
    }
    .cardImage{
        width: 200px;
        min-width: 200px !important;
        height: 100%;
        overflow: hidden;
    }

    /* LEFT SECTION */
    .cardContent{
        flex-grow: 1;
        height: 100%;
        padding-left: 1rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        .cardHeader{
            width: 100%;
            display: flex;
            justify-content: space-between;

            .categoryBadge{
                background: #f8d7da;
                border-radius: 3px;
                color: var(--dark--red);
                padding: .4rem .5rem;
                font-size: 12px;
                font-family: 'Proxima Nova';
            }
        }

        .title{
            margin-top: 1.5rem;
            color: var(--violet);
            font-family: 'Bebas Neue Pro';
            font-style: normal;
            font-weight: 700;
            font-size: 23px;
            line-height: 24px;
        }
    }
`;