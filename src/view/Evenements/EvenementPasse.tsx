import React, { useEffect } from "react";
import EvenementItem from "./EvenementItem";
import { useDispatch, useSelector } from "react-redux";
import actions from "src/modules/evenement/list/evenementListActions";
import selectors from "src/modules/evenement/list/evenementListSelectors";
import { Link } from "react-router-dom";
import { i18n } from "src/i18n";

function EvenementPasse() {
  const selectLoadingPasse = useSelector(selectors.selectLoadingPasse);
  const selectRowsPasse = useSelector(selectors.selectRowsPasse);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.evenementpasse());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='evenment__passe'>
      <div className='passe'>
        <div className='archieve__header'>
          <h2>{i18n("common.evenementPasse")}</h2>
          <div className='satestique__bar'></div>
        </div>
        <div className='passe__content'>
          {selectRowsPasse.map((item, index) => (
            <EvenementItem data={item} />
          ))}
        </div>
        <Link to='/detaill/Evenement/Passe'>
          <div className='plus__button'>{i18n("common.voirPlus")}</div>
        </Link>
      </div>
    </div>
  );
}

export default EvenementPasse;
