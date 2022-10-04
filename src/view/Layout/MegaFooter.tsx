import React from 'react'
import {
    facebook,
    logo__footer,
    twitter,
    youtube,
    down__footer,
    instagram,
} from "src/assets/images";
export default function MegaFooter() {
    return (
        <div className='app__footer'>

            <div className='footer'>
                <div className='footer__logo'>
                    <img className='lazyload' src={logo__footer} alt='' />
                    <div className='logo__detaills'>
                        Le Forum Tunsien pour les Droits Economiques et Sociaux est une
                        organisation non gouvernementale, neutre, indépendante de tout
                        parti politique et de toute institution religieuse.
                    </div>
                </div>
                <div className='footer__menu'>
                    <div>
                        <label> Menu </label>
                        <img className='lazyload' src={down__footer} id='arrow_down' alt='logo' />
                    </div>
                    <div className='menu__footer'>
                        <div className='left'>
                            <ul>
                                <li>A propos</li>
                                <li>Archive</li>
                                <li>Glossaire</li>
                                <li>Publications</li>
                            </ul>
                        </div>
                        <div className='right'>
                            <ul>
                                <li>Galerie</li>
                                <li>Entretiens</li>
                                <li>Evenements</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='footer__bar' />
                <div className='footer__socialmedia'>
                    <div>
                        <label> Suivez-nous </label>
                        <img
                            className='lazyload'
                            src={down__footer}
                            id='arrow_down'
                            alt=''
                        />
                    </div>
                    <div className='socialmedia__facebook'>
                        <img className='lazyload' src={facebook} alt='' />
                        Facebook
                    </div>
                    <div className='socialmedia__Twitter'>
                        <img className='lazyload' src={twitter} alt='' />
                        Twitter
                    </div>
                    <div className='socialmedia__Youtube'>
                        <img className='lazyload' src={youtube} alt='' />
                        Youtube
                    </div>
                    <div className='socialmedia__Instagram'>
                        <img className='lazyload' src={instagram} alt='' />
                        Instagram
                    </div>
                </div>
                <div className='footer__bar' />
                <div className='footer__contact'>
                    <div>
                        <label> Contact </label>
                        <img
                            className='lazyload'
                            src={down__footer}
                            id='arrow_down'
                            alt=''
                        />
                    </div>
                    <div className='contact__address'>
                        Adresse : 47, Avenue Farhat Hached <br />
                        2eme étage 1001 Tunis <br />
                        Tél. : 71 257 664 <br />
                        Email : contact@ftdes.net
                    </div>
                </div>
            </div>
        </div>
    )
}
