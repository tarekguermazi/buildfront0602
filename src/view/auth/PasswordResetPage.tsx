import React from "react";
import { logo_svg } from "src/assets/images";
import AuthWrapper from "../Profile/styles/AuthWrapper";
import { Link } from "react-router-dom";

function PasswordResetPage() {
  return (
    <div className='app__resetPassword'>
      <img className='lazyload' src={logo_svg} alt='' srcSet='' />

      <AuthWrapper>
        <div className='app__signin'>
          <div className='app__login'>
            <div className='archieve__header'>
              <h2>RÉINITIALISER&nbsp;VOTRE&nbsp;MOT&nbsp;DE&nbsp;PASSE</h2>
              <div className='communiquer__bar'></div>
            </div>
            <div className='Login__container'>
              <div className='form__oublier'>
                <div className=''>
                  Entrez vos identifiants pour retrouver votre compte
                </div>
              </div>
              <div className='container__form'>
                <div className='form__group'>
                  <label htmlFor='Login'>Email</label>
                  <input type='text' />
                </div>

                <div className='form__button'>Suivant</div>
                <div className='form__link'>
                  <div className='link__account right__reset_password '>
                    <Link to='/auth/signin' className='reset'>
                      <i
                        className='fa-solid fa-chevron-left'
                        style={{ paddingRight: 11 }}
                      />
                      Retour
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AuthWrapper>
    </div>
  );
}

export default PasswordResetPage;
