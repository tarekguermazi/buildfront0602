import React from "react";
import Image from "../../shared/Image";
import { Link } from "react-router-dom";
function PublicationByCategory(props) {
  const { data, category, index } = props;

  const renderItem = (item) => {
    return (
      <div>
        <Image
          src='https://placehold.jp/120x78.png'
          width={120}
          height={78}
          alt='Image'
        />
        <div className='list__detaill'>
          <div className='detaill__header'>
            <div className='header__left'>
              <p>Migration </p>
            </div>
            <div className='header__right'>10h32</div>
          </div>
          <div className='detaill__content text__wrap' style={{ width: 233 }}>
            Karbaï: Les conditions de vie des migrants à Lampedusa inhumaines
            inhumaines inhumaines
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      <div className='archieve__header'>
        <h2>{category.titleFR}</h2>
        <div className='satestique__bar'></div>
      </div>
      <div className='manification__images'>
        {data.map((item) => renderItem(item))}
      </div>
      <Link to={`/detaill/category/${category._id}`}>
        <div className='plus__button'>Voir plus</div>
      </Link>
    </div>
  );
}

export default PublicationByCategory;
