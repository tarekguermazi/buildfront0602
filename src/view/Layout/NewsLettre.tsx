import React from "react";
import { envelope } from "../../assets/images";

function NewsLettre() {
  return (
    <div className='app__newsLettre'>
      <div className='newsLettre'>
        <div className='newsLettre__right'>
          <div className='archieve__header'>
            <h2>Newsletter</h2>
            <div className='satestique__bar' />
          </div>
          <div className='newsLettre__content'>
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
        </div>
      </div>
    </div>
  );
}

export default NewsLettre;
