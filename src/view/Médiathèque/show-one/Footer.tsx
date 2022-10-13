import React from 'react'
import styled from 'styled-components'

// ICONS
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs'

export default function FooterSection({ userIsLoading, user }) {
    return (
        <FooterLayout>
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
                {
                    userIsLoading
                        ?
                        <span>loading...</span>
                        :
                        <div className="info">
                            <strong>{user['name']} ({user['planStatus']})</strong>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse et est consectetur provident, veniam pariatur optio ducimus omnis non libero!</p>
                        </div>
                }
            </div>
        </FooterLayout>
    )
}

const FooterLayout = styled.section`
    margin-top: 5rem;
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
`;