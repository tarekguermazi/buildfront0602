import React from "react";

function PublicationCategory(props) {
  const { rows } = props;
  return (
    <div className='app__category'>
      <div className='category__title'>Catégorie</div>
      <div className='category__list'>
        {rows.map((item, index) => (
          <div key={index}>{item.titleFR}</div>
        ))}
      </div>
    </div>
  );
}
export default PublicationCategory;
