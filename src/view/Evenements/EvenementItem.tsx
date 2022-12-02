import React, { useEffect } from "react";
import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";
import Date from "../shared/Date";
import Image from "../shared/Image";
import { useDispatch, useSelector } from "react-redux";
import action from "src/modules/evenement/view/evenementViewActions";
import { useRouteMatch } from "react-router-dom";

function EvenementItem(props) {
  const { data } = props;
  return (
    <div>
      <Link to={`/Evenements/${data._id}`}>
        <div className='contentVenir__top'>
          <Image
            width={370}
            height={220}
            src={data.supports[0].downloadUrl}
            alt=''
          />
          <div className='venir__clendar'>
            <div className='calendar__number'>{Date.Day(data.date)}</div>
            <div className='calendar__months'>{Date.Month(data.date)}</div>
          </div>
        </div>
      </Link>
      <div className='contentVenir__bottom'>
        <div className='venir__localistaion'>
          <MdLocationOn /> {data.emplacementAR}
        </div>
        <div className='venir__description'>
          Atelier de restitution de l’événement Echange des Jeunes du projet
          Justice Environnementale
        </div>
      </div>
    </div>
  );
}

export default EvenementItem;
