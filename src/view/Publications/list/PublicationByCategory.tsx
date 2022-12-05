import React from "react";
import Image from "../../shared/Image";
import { Link } from "react-router-dom";
import Translate from "../../shared/Translate";
import Date from "../../shared/Date";
function PublicationByCategory(props) {
  const { data, category, index } = props;

  const renderItem = (item) => {
    return (
      <div>
        <Image
          src={`http://178.79.177.14:8080/api/file/download?privateUrl=${item.supports[0].privateUrl}`}
          width={120}
          height={78}
          alt='Image'
        />
        <div className='list__detaill'>
          <div className='detaill__header'>
            <div className='header__left'>
              <p>Migration </p>
            </div>
            <div className='header__right'>
              {Date.HourMinute(data.updatedAt)}
            </div>
            <div className='header__right'></div>
          </div>
          <div className='detaill__content text__wrap' style={{ width: 233 }}>
            {Translate.Trans("title", item)}
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
