import React from "react";
import Date from "../../shared/Date";
function PublicationDetaill(props) {
  const { data } = props;

  return (
    <div className='__detaills'>
      <div className='list__detaill'>
        <div className='detaill__header'>
          <div className='__left'>
            <p>{data.thematique.titleFR}</p>
          </div>
          <div className='__right'>{Date.HourMinute(data.updatedAt)}</div>
        </div>
        <div className='__content'>{data.title}</div>
        <div className='sub__content'>{data.thematique.descriptionFR}</div>
      </div>
    </div>
  );
}
export default PublicationDetaill;
