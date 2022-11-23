import React from "react";
import { Link } from "react-router-dom";
function PublicationCategory(props) {
  const { rows } = props;
  return (
    <div className='app__category'>
      <div className='category__title'>Catégorie</div>
      <div className='category__list'>
        {rows.map((item, index) => (
          <div key={index}>
            <Link to={`/detaill/category/${item.id}`} style={{ color: "#000" }}>
              {item.titleFR}{" "}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
export default PublicationCategory;
