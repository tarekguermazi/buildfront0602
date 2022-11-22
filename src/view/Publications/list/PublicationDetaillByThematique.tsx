import React from "react";
import Image from "../../shared/Image";
import { Link } from "react-router-dom";
function PublicationDetaillByThematique(props) {
  const { data, index, thematique } = props;

  return (
    <div className='pub__migration' key={index}>
      <div className='archieve__header'>
        <h2>{thematique.titleFR}</h2>
        <div className='satestique__bar'></div>
      </div>

      <div className='migration__images'>
        {data.map((item) => (
          <div>
            <Image
              src={item.supports[0].downloadUrl}
              width='370'
              height='300'
              alt='Image publication image '
            />
            <div className='list__detaill'>
              <div className='detaill__header'>
                <div className='header__left'>
                  <p>Migration </p>
                </div>
                <div className='header__right'>10h32</div>
              </div>
              <div className='detaill__content'>
                Immigration clandestine : Le FTDS critique l'approche de l'Etat
              </div>
            </div>
          </div>
        ))}
      </div>

      <Link to='/detaill'>
        <div className='plus__button'>Voir plus</div>
      </Link>
    </div>
  );
}

export default PublicationDetaillByThematique;
