import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import MediathequeService from 'src/modules/mediatheque/MediathequeService'

// COMPONENTS
import Footer from 'src/view/Layout/Footer'
import MegaFooter from 'src/view/Layout/MegaFooter'
import BreadCrumbs from 'src/view/shared/BreadCrumbs'
import { envelope } from "src/assets/images";
import NewsLetterWidget from 'src/view/shared/NewsLetterWidget'

// ICONS
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs'

export default function ShowPublication() {

    // GET entity id
    const params = useParams();
    let entityID = params.entity_id;

    // FETCH DETAILS OF THAT ONE ENETITY
    const [entity, setEntity] = useState({});
    const [entityIsLoading, setEntityIsLoading] = useState(true);

    const fetchTypeEntitYDetails = entityID => {
        MediathequeService.getOneMediatheque(entityID)
            .then((value) => {
                setEntity(entity => ({ ...entity, ...value }));
                setEntityIsLoading(false);
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
                <BreadCrumbs view="publication" />
                <MainLayout>
                    <section className='rightSection'>

                        <header>
                            <span className="categoryBadge">{entity['type']}</span>
                            <h1>{entity['titleFR']}</h1>
                            <div className="data">
                                <div className="dateAndOwner">
                                    <span>Publié le {getDate(entity['createdAt'])} à {getTime(entity['createdAt'])}</span>
                                    <span>Par <strong>John Doe</strong></span>
                                </div>
                                <div className="socials">
                                    <span>Partager :</span>
                                    <button><BsFacebook /></button>
                                    <button><BsTwitter /></button>
                                    <button><BsInstagram /></button>
                                    <button><BsLinkedin /></button>
                                </div>
                            </div>
                        </header>

                        <main>
                            <p>{entity['descriptionFR']}</p>
                        </main>

                        <footer>
                            <div className="data">
                                <div className="socials">
                                    <span>Partager :</span>
                                    <button><BsFacebook /></button>
                                    <button><BsTwitter /></button>
                                    <button><BsInstagram /></button>
                                    <button><BsLinkedin /></button>
                                </div>
                            </div>
                            <div className="owner">
                                <img src="https://c4.wallpaperflare.com/wallpaper/303/418/410/women-redhead-freckles-face-wallpaper-preview.jpg" alt="profilePicture" />
                                <div className="info">
                                    <strong>Jhon Doe</strong>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse et est consectetur provident, veniam pariatur optio ducimus omnis non libero!</p>
                                </div>
                            </div>
                        </footer>

                        {/* END OF RIGHT SECTION */}
                    </section>

                    <section className='leftSection'>
                        <NewsLetterWidget envelope={envelope} layout='' />
                    </section>
                </MainLayout>
            </section>
            <MegaFooter />
            <Footer />
        </section>
    )
}


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
        header{
            .categoryBadge{
                background: #f8d7da;
                border-radius: 3px;
                color: var(--dark--red);
                padding: .4rem .5rem;
                font-size: 12px;
                font-family: 'Proxima Nova';
            }

            h1{
                font-family: 'Bebas Neue Pro';
                font-style: normal;
                font-weight: 700;
                font-size: 40px;
                line-height: 43px;
                text-transform: uppercase;
                color: var(--violet);
                margin: 1rem 0;
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

        main{
            margin-top: 2rem;
            p{
                text-align: justify;
                color: var(--gray2);
                font-family: 'Proxima Nova';
                font-style: normal;
                font-weight: 700;
                font-size: 16px;
                line-height: 25px;
            }
        }

        footer{
            .owner{
                background-color: #F1F1F1;
                padding: 1rem;
                display: flex;
                align-items: flex-start;
                justify-content: space-between;

                .info{
                    font-family: 'Proxima Nova';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 25px;
                    color: #4F4F4F;

                    strong{
                        font-family: 'Bebas Neue Pro';
                        font-style: normal;
                        font-weight: 700;
                        font-size: 20px;
                        line-height: 43px;
                        text-transform: uppercase;
                        color: #2B2840;
                    }
                }

                img{
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    margin-right: 1rem;
                }
            }
        }
    }

    .leftSection{
        width: 400px;
        background-color: pink;
    }
`;