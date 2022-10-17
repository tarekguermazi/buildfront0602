import React from "react";
import {
  facebook,
  logo__footer,
  twitter,
  youtube,
  down__footer,
  instagram,
} from "src/assets/images";
import CopyWrite from "./CopyWrite";
import NewsLettre from "./NewsLettre";
export default function MegaFooter() {
  return (
    <>
      <NewsLettre />
      <div className='app__footer'>
        <div className='footer'>
          <div className='footer__logo'>
            <img src={logo__footer} alt='' />
            <div className='footer__content detaill__footer'>
              Le Forum Tunsien pour les Droits Economiques et Sociaux est une
              organisation non gouvernementale, neutre, indépendante de tout
              parti politique et de toute institution religieuse.
            </div>
          </div>
          <div className='hr__bar'></div>
          <div className='footer__menu'>
            <div className='label__footer'>Menu</div>
            <div className='footer__content content__menu'>
              <div>
                <ul>
                  <li>A propos</li>
                  <li>Archive</li>
                  <li>Glossaire</li>
                  <li>Publications</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>Galerie</li>
                  <li>Entretiens</li>
                  <li>Evenements</li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='hr__bar'></div>
          <div className='footer__socialmedia'>
            <div className='label__footer'> Social media</div>
            <div className='footer__content content__socialmedia'>
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
          </div>
          <div className='hr__bar'></div>
          <div className='footer__contact'>
            <div className='label__footer'> Contact</div>
            <div className='footer__content contact__desctioption'>
              Adresse : 47, Avenue Farhat Hached 2eme étage 1001 Tunis Tél. : 71
              257 664 Email : contact@ftdes.net
            </div>
          </div>
        </div>
      </div>
      <CopyWrite />
    </>
  );
}
