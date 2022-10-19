import React from "react";
import Breadcrumb from "../shared/Breadcrumb";
import { i18n } from "../../i18n";
import Skeletons from "../shared/Skeletons";
import Image from "../shared/Image";

function Evenements() {
  return (
    <>
      <Breadcrumb
        title={i18n("common.Evènements")}
        items={[[i18n("dashboard.menu"), "/"], [i18n("common.Evènements")]]}
      />
      <div className='page__evenement'>
        <div className='evenment__header'>
          <Image
            width={1170}
            height={404}
            src='https://placehold.jp/1170x404.png'
            alt=''
          />
        </div>
        <div className='evenment__venir'>
          <div className='venir'>
            <div className='archieve__header'>
              <h2>événements à venir</h2>
              <div className='satestique__bar'></div>
            </div>
            <div className='venir__content'>
              <div>
                <div className='contentVenir__top'>
                  <Image
                    width={370}
                    height={220}
                    src='https://placehold.jp/370x220.png'
                    alt=''
                  />
                </div>
                <div></div>
              </div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
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
            <div className='venir__content'>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className='plus__button'>Voir plus</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Evenements;
