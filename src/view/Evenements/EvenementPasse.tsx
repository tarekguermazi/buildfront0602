import React, { useEffect } from "react";
import EvenementItem from "./EvenementItem";
import { useDispatch, useSelector } from "react-redux";
import actions from "src/modules/evenement/list/evenementListActions";
import selectors from "src/modules/evenement/list/evenementListSelectors";
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
          <h2>événements passé</h2>
          <div className='satestique__bar'></div>
        </div>
        <div className='passe__content'>
          {selectRowsPasse.map((item, index) => (
            <EvenementItem data={item} />
          ))}
        </div>
        <div className='plus__button'>Voir plus</div>
      </div>
    </div>
  );
}

export default EvenementPasse;
