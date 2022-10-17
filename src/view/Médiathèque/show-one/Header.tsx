import React from 'react'
import styled from 'styled-components'
import MediathequeService from 'src/modules/mediatheque/MediathequeService'
// ICONS
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs'

export default function Header({ entity, user, userIsLoading }) {
    return (
        <HeaderLayout>
            <span className="categoryBadge">{entity['type']}</span>
            <h1>{entity['titleFR']}</h1>
            <div className="data">
                <div className="dateAndOwner">
                    <span>Publié le {MediathequeService.getDate(entity['createdAt'])} à {MediathequeService.getTime(entity['createdAt'])}</span>
                    <span>
                        Par&nbsp;
                        {
                            userIsLoading
                                ?
                                <span>loading...</span>
                                :
                                <strong>{user['name']}</strong>
                        }
                    </span>
                </div>
                <div className="socials">
                    <span>Partager :</span>
                    <button><BsFacebook /></button>
                    <button><BsTwitter /></button>
                    <button><BsInstagram /></button>
                    <button><BsLinkedin /></button>
                </div>
            </div>
        </HeaderLayout>
    )
}


const HeaderLayout = styled.section`
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
`;