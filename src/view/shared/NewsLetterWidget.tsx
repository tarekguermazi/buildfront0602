import React from 'react'
import styled from 'styled-components'

// ICONS
import { BsEnvelope } from 'react-icons/bs'


export default function NewsLetterWidget({ envelope, layout }) {
    return (
        <div>
            {
                layout === 'minimal'
                    ?
                    <MiniNewsLetter className='newsLettre__right'>
                        <div className='archieve__header'>
                            <h2>Newsletter</h2>
                            <div className='satestique__bar' />
                        </div>
                        <div className='newsLettre__title'>LET’S KEEP IN TOUCH</div>
                        <div className='newsLettere__detaill'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                            cursus et augue id consequat. Suspendisse sodales est lectus.
                        </div>
                        <div className='newsLettre__formulaire'>
                            <form>
                                <label>
                                    <input type="text" placeholder='Votre adresse emaul' />
                                    <button type='submit'>
                                        <BsEnvelope className='icon' />
                                    </button>
                                </label>
                            </form>
                        </div>
                    </MiniNewsLetter>
                    :
                    <div className='newsLettre__right'>
                        <div className='archieve__header'>
                            <h2>Newsletter</h2>
                            <div className='satestique__bar' />
                        </div>
                        <div className='newsLettre__title'>LET’S KEEP IN TOUCH</div>
                        <div className='newsLettere__detaill'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                            cursus et augue id consequat. Suspendisse sodales est lectus.
                        </div>
                        <div className='newsLettre__formulaire'>
                            <img className='lazyload' src={envelope} alt='Envolope Image' />
                            <input type='text' placeholder=' Votre adresse email' />
                            <div className='button__newLettre'>Envoyer</div>
                        </div>
                    </div>
            }
        </div>
    )
}

const MiniNewsLetter = styled.div`
    width: 100%;
    padding: 1rem;
    margin: 2rem 0;

    .newsLettre__title{
        font-family: 'Bebas Neue Pro';
        font-style: normal;
        font-weight: 700;
        font-size: 25px;
        line-height: 25px;
        padding-top: 1.5rem;
    }

    .newsLettere__detaill{
        font-family: 'Proxima Nova';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 25px;
    }

    .newsLettre__formulaire{
        width: 100%;

        label{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            padding: 0;

            input{
                font-family: 'Proxima Nova';
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 25px;
                padding: 0;
            }

            button{
                border: none;
                background-color: red;
                color: #fff;
                padding: .2rem .5rem;
                
                .icon{
                    font-size: 1.5rem;
                }
            }
        }
    }
`;
