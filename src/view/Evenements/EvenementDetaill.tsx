import React from "react";
import Breadcrumb from "../shared/Breadcrumb";
import { i18n } from "../../i18n";
import { AiOutlineCalendar } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import Image from "../shared/Image";
import { BsPlayFill } from "react-icons/bs";
import { Facebook, Instagramm, Linkedin, Twitter } from "../../assets/images";

function EvenementDetaill() {
  return (
    <>
      <Breadcrumb
        items={[[i18n("dashboard.menu"), "/"], [i18n("common.Evènements")]]}
      />
      <div className='page__evenement'>
        <div className='evenment__header'>
          <Image
            width={1170}
            height={404}
            src='https://placehold.jp/1170x404.png'
            alt='Placeholder'
          />

          <div className='evenement__message'>
            <div className='messageEvenement__left'>
              <div className='left__number'>15</div>
              <div className='left__months'>Avril</div>
            </div>
            <div className='messageEvenement__right'>
              <div className='messageEvenement__title'>
                Atelier de restitution de l’événement Echange des Jeunes du
                projet Justice Environnementale
              </div>
              <div className='messageEvenement__description'>
                <div>par FTDES</div>
                <div>
                  <AiOutlineCalendar /> 14 octobre 2022
                </div>
                <div>
                  <MdLocationOn /> Tunis
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='detaill__evenement'>
          <div className='detaillEvenement__left'>
            <div className='left__description'>
              <div className='title__detaillEvenemet'>Description</div>
              <div className='description__detaillEvenement'>
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
            <div className='left__date'>
              <div className='title__detaillEvenemet'>Date</div>
              <div className='description__detaillEvenement'>
                <b> Dimanche, 15 avril 2022</b> <br /> Hoarraire :{" "}
                <b> 08:00 - 18:00</b>
              </div>
            </div>

            <div className='left__photos'>
              <div className='title__detaillEvenemet'>Photos</div>
              <div className='photos__gallery'>
                {Array.from({ length: 8 }).map((item) => (
                  <Image
                    width={165}
                    height={159}
                    src='https://placehold.jp/165x159.png'
                    alt='Placeholder'
                  />
                ))}
              </div>
              <div className='plus__button'>Voir toutes les photos</div>
            </div>

            <div className='left__videos'>
              <div className='title__detaillEvenemet'>Videos</div>
              <div className='photos__gallery'>
                {Array.from({ length: 2 }).map((item) => (
                  <div className='videos__list'>
                    <Image
                      width={349}
                      height={240}
                      src='https://placehold.jp/349x240.png'
                      alt='Placeholder'
                    />
                    <div className='videos__button'>
                      <BsPlayFill color='red' fontSize={40} />
                    </div>
                  </div>
                ))}
              </div>
              <div className='plus__button'>Voir toutes les photos</div>
            </div>

            <div className='left__contact'>
              <div className='title__detaillEvenemet'>Contact</div>
              <div className='description__detaillEvenement'>
                <b> John Doe </b> <br /> Lorem ipsum dolor sit amet, consectetur
                adipiscing elit: <br /> <b> 70 123 675 </b>
                <br /> <b>55 236 456</b> <br />
                consectetur adipiscing elit : www.ftdes.com/contact
              </div>
            </div>
          </div>
          <div className='detailEvenement__right'>
            <div className='title__detaillEvenemet'>Lieu</div>
            <div>
              <Image
                width={398}
                height={386}
                src='https://placehold.jp/398x386.png'
                alt='Placeholder'
              />
            </div>
            <div className='detaillEvenement__socialMedia'>
              <div className='socialMedia__title'>Partager :</div>

              <Image src={Facebook} />
              <Image src={Twitter} />
              <Image src={Instagramm} />
              <Image src={Linkedin} />
            </div>
          </div>
        </div>

        <div className='evenment__venir'>
          <div className='venir'>
            <div className='archieve__header'>
              <h2>événements à venir</h2>
              <div className='satestique__bar'></div>
            </div>
            <div className='venir__content'>
              {Array.from({ length: 3 }).map((item, index) => (
                <div>
                  <div className='contentVenir__top'>
                    <Image
                      width={370}
                      height={220}
                      src='https://placehold.jp/370x220.png'
                      alt=''
                    />
                    <div className='venir__clendar'>
                      <div className='calendar__number'>15</div>
                      <div className='calendar__months'>Avril</div>
                    </div>
                  </div>
                  <div className='contentVenir__bottom'>
                    <div className='venir__localistaion'>
                      <MdLocationOn /> Tunis
                    </div>
                    <div className='venir__description'>
                      Atelier de restitution de l’événement Echange des Jeunes
                      du projet Justice Environnementale
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className='plus__button'>Voir plus</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EvenementDetaill;
