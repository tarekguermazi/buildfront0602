import React, { useEffect } from "react";
import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";
import Image from "../shared/Image";
import EvenementItem from "./EvenementItem";
import { useDispatch, useSelector } from "react-redux";
import actions from "src/modules/evenement/list/evenementListActions";
import selectors from "src/modules/evenement/list/evenementListSelectors";
function EvenementAvenir() {
  const dispatch = useDispatch();

  const selectLoadingVenir = useSelector(selectors.selectLoadingVenir);

  const selectRowsVenir = useSelector(selectors.selectRowsVenir);

  useEffect(() => {
    dispatch(actions.evenementvenir());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='evenment__venir'>
      <div className='venir'>
        <div className='archieve__header'>
          <h2>événements à venir</h2>
          <div className='satestique__bar'></div>
        </div>
        <div className='venir__content'>
          {selectRowsVenir.map((item, index) => (
            <EvenementItem data={item} />
          ))}
        </div>
        <div className='plus__button'>Voir plus</div>
      </div>
    </div>
  );
}

export default EvenementAvenir;
