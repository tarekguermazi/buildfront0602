import React, { useState } from "react";
import Image from "../../shared/Image";
import { Link } from "react-router-dom";
import Date from "../../shared/Date";
import authAxios from "../../../modules/shared/axios/authAxios";
import Translate from "../../shared/Translate";
function PublicationDetaillByThematique(props) {
  const { data, index, thematique } = props;

  const renderItem = (item) => {
    return (
      <div>
        <Image
          src={`http://178.79.177.14:8080/api/file/download?privateUrl=${item.supports[0].privateUrl}`}
          width='370'
          height='300'
          alt='Image publication image '
        />
        <div className='list__detaill'>
          <div className='detaill__header'>
            <div></div>
            <div className='header__right'>{Date.fullDate(data.updatedAt)}</div>
          </div>
          <div className='detaill__content'>
            {Translate.Trans("title", data)}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className='pub__migration' key={index}>
      <div className='archieve__header'>
        <h2>{Translate.Trans("title", thematique)}</h2>
        <div className='satestique__bar'></div>
      </div>

      <div className='migration__images'>
        {data.map((item) => renderItem(item))}
      </div>

      <Link to={`/detaill/${thematique._id}`}>
        <div className='plus__button'>Voir plus</div>
      </Link>
    </div>
  );
}

export default PublicationDetaillByThematique;
