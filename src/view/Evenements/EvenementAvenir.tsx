import React from "react";
import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";
import Image from "../shared/Image";
function EvenementAvenir() {
  return (
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
          Atelier de restitution de l’événement Echange des Jeunes du projet
          Justice Environnementale
        </div>
      </div>
    </div>
  );
}

export default EvenementAvenir;
