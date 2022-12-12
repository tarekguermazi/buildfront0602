import React from "react";
import { i18n } from "src/i18n";
import {
  calendar__bttom,
  Facebook,
  Instagramm,
  Linkedin,
  twitter,
} from "../../../assets/images";
import Breadcrumb from "../Breadcrumb";
import Image from "../Image";
import "./components/style.css";

function detail() {
  return (
    <>
      <div className='publication__page'>
        <div className='app__calendar'>
          <img src={calendar__bttom} alt='' />
        </div>
        <Breadcrumb
          items={[
            [i18n("dashboard.menu"), "/"],
            [i18n("entities.publication.label")],
          ]}
        />

        <div className='page__detaill'>
          <div className='header__left'>
            <p>Migration </p>
          </div>

          <div className='detail'>
            <div className='detail__left'>
              <div className='detail__title'>
                Immigration clandestine : le ftdes critique l’approche de l’Etat
              </div>

              <div className='detail__author'>
                <div className='author__left'>
                  <div className='left__author__date'>
                    Publié le 24/09/2022 à 10:32
                  </div>
                  <div>
                    Par <b> John Doe </b>
                  </div>
                </div>
                <div className='detaillEvenement__socialMedia'>
                  <div className='socialMedia__title'>
                    {i18n("common.Partager")} :
                  </div>
                  <Image src={Facebook} />
                  <Image src={twitter} />
                  <Image src={Instagramm} />
                  <Image src={Linkedin} />
                </div>
              </div>

              <div className='detail__description'>
                Il a indiqué, lors d'une conférence de presse organisée par le
                FTDS au siège du syndicat national des journalistes tunisiens
                (SNJT), que de nombreuses difficultés ont été constatées au
                niveau de l'obtention des chiffres réels des opérations de
                franchissement illégal des frontières et la répartition des
                migrants selon les catégories d'âge et de genre. Selon le
                rapport de la FTDS sur la migration non réglementaire qui a été
                présenté par le porte-parole du forum, 13500 émigrés ont rejoint
                illicitement l'Italie depuis le mois de janvier jusqu'à ce jour.
                Selon les nationalités, les migrants irréguliers se répartissent
                entre 42% de tunisiens et 57% de plusieurs autres nationalités
                notamment d'Afrique subsaharienne a-t-il relevé, ajoutant que
                2600 mineurs et 640 femmes ont atteint les côtes du nord de la
                méditerranée.
                <Image src='https://placehold.jp/670x333.png' />
                Il a indiqué, lors d'une conférence de presse organisée par le
                FTDS au siège du syndicat national des journalistes tunisiens
                (SNJT), que de nombreuses difficultés ont été constatées au
                niveau de l'obtention des chiffres réels des opérations de
                franchissement illégal des frontières et la répartition des
                migrants selon les catégories d'âge et de genre. Selon le
                rapport de la FTDS sur la migration non réglementaire qui a été
                présenté par le porte-parole du forum, 13500 émigrés ont rejoint
                illicitement l'Italie depuis le mois de janvier jusqu'à ce jour.
                Selon les nationalités, les migrants irréguliers se répartissent
                entre 42% de tunisiens et 57% de plusieurs autres nationalités
                notamment d'Afrique subsaharienne a-t-il relevé, ajoutant que
                2600 mineurs et 640 femmes ont atteint les côtes du nord de la
                méditerranée.
              </div>
            </div>
            <div>
              <div className='archieve__header'>
                <h2> Les dernières news</h2>
                <div className='satestique__bar'></div>
              </div>
              <div className='manification__images'>
                {Array.from({ length: 3 }).map((item) => (
                  <div>
                    <img
                      src='https://placehold.jp/120x78.png'
                      width='120'
                      height='78'
                      alt=''
                    />
                    <div className='list__detaill'>
                      <div className='detaill__header'>
                        <div className='header__left'>
                          <p>Migration </p>
                        </div>
                        <div className='header__right'>10h32</div>
                      </div>
                      <div
                        className='detaill__content text__wrap'
                        style={{ width: "233px" }}>
                        Karbaï: Les conditions de vie des migrants à Lampedusa
                        inhumaines inhumaines inhumaines
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className='publication__interest'>
            <div className='archieve__header'>
              <h2>PUBLICATIONS QUI PEUVENT VOUS INTÉRESSER</h2>
              <div className='satestique__bar'></div>
            </div>

            <div className='interest__detaill'>
              {Array.from({ length: 4 }).map((item) => (
                <div>
                  <img
                    src='https://placehold.jp/120x78.png'
                    width='182'
                    height='147'
                    alt=''
                  />
                  <div className='list__detaill'>
                    <div className='detaill__header'>
                      <div className='header__left'>
                        <p>Migration </p>
                      </div>
                      <div className='header__right'>10h32</div>
                    </div>
                    <div
                      className='detaill__content text__wrap'
                      style={{ width: "369px" }}>
                      Karbaï: Les conditions de vie des migrants à Lampedusa
                      inhumaines inhumaines inhumaines
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default detail;
