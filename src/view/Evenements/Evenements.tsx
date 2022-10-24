import React from "react";
import Breadcrumb from "../shared/Breadcrumb";
import { i18n } from "../../i18n";
import Skeletons from "../shared/Skeletons";
import Image from "../shared/Image";
import { AiOutlineCalendar } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";
import Slider from "../shared/Slider/Slider";
function Evenements() {
  return (
    <>
      <Breadcrumb
        title={i18n("common.Evènements")}
        items={[[i18n("dashboard.menu"), "/"], [i18n("common.Evènements")]]}
      />
      <div className='page__evenement'>
        <div className='evenment__header'>
          <Slider height={404} width={1170} label='slider' />
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
        <div className='evenment__venir'>
          <div className='venir'>
            <div className='archieve__header'>
              <h2>événements à venir</h2>
              <div className='satestique__bar'></div>
            </div>
            <div className='venir__content'>
              {Array.from({ length: 6 }).map((item, index) => (
                <div>
                  <Link to='/Evenements/12'>
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
                  </Link>
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
        <div className='evenment__passe'>
          <div className='passe'>
            <div className='archieve__header'>
              <h2>événements passé</h2>
              <div className='satestique__bar'></div>
            </div>
            <div className='passe__content'>
              {Array.from({ length: 3 }).map((item, index) => (
                <div>
                  <Link to='/Evenements/12'>
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
                  </Link>
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

export default Evenements;
