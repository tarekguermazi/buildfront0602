import React from "react";
import Date from "../../shared/Date";
import Translate from "../../shared/Translate";
function PublicationDetaill(props) {
  const { data } = props;

  return (
    <div className='__detaills'>
      <div className='list__detaill'>
        <div className='detaill__header'>
          <div className='__left'>
            <p> {Translate.Trans("title", data.thematique)}</p>
          </div>
          <div className='__right'>{Date.fullDate(data.updatedAt)}</div>
        </div>
        <div className='__content'>
          {Translate.Trans("description", data.thematique)}
        </div>
      </div>
    </div>
  );
}
export default PublicationDetaill;
