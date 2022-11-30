import React, { useEffect } from "react";
import Breadcrumb from "../shared/Breadcrumb";
import { i18n } from "../../i18n";
import { AiOutlineCalendar } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import Image from "../shared/Image";
import { BsPlayFill } from "react-icons/bs";
import { Facebook, Instagramm, Linkedin, Twitter } from "../../assets/images";
import { useDispatch, useSelector } from "react-redux";
import action from "src/modules/evenement/view/evenementViewActions";
import { useRouteMatch } from "react-router-dom";
import selector from "src/modules/evenement/view/evenementViewSelectors";
import Date from "../shared/Date";
import Youtube from "../shared/Youtube";
function EvenementDetaill() {
  const dispatch = useDispatch();
  const match = useRouteMatch();
  const selectRows = useSelector(selector.selectRecord);
  const selectLoading = useSelector(selector.selectLoading);

  useEffect(() => {
    dispatch(action.doFind(match.params.id));
  }, []);

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
            src={selectRows?.supports[0]?.downloadUrl}
            alt='Placeholder'
          />

          <div className='evenement__message'>
            <div className='messageEvenement__left'>
              <div className='left__number'>{Date.Day(selectRows?.date)}</div>
              <div className='left__months'>{Date.Month(selectRows?.date)}</div>
            </div>
            <div className='messageEvenement__right'>
              <div className='messageEvenement__title'>
                {selectRows?.titleFR}
              </div>
              <div className='messageEvenement__description'>
                <div>par FTDES</div>
                <div>
                  <AiOutlineCalendar /> 14 octobre 2022
                </div>
                <div>
                  <MdLocationOn /> {selectRows?.emplacementAR}
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
                {selectRows?.descriptionAR}
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
                {selectRows?.supports?.map((item) => (
                  <Image
                    width={165}
                    height={159}
                    src={item.downloadUrl}
                    alt='Placeholder'
                  />
                ))}
              </div>
              <div className='plus__button'>Voir toutes les photos</div>
            </div>

            <div className='left__videos'>
              <div className='title__detaillEvenemet'>Videos</div>
              <div className='photos__gallery'>
                {selectRows?.videos?.map((item) => (
                  <div className='videos__list'>
                    <Youtube link={item.link} />
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
