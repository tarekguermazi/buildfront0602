import React, { useEffect } from "react";
import Breadcrumb from "../shared/Breadcrumb";
import { i18n } from "../../i18n";
import Skeletons from "../shared/Skeletons";
import Image from "../shared/Image";
import { AiOutlineCalendar } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";
import Slider from "../shared/Slider/Slider";
import { dataSlider } from "../shared/Slider/dataSlider";
import EvenementAvenir from "./EvenementAvenir";
import EvenementPasse from "./EvenementItem";
import { useDispatch, useSelector } from "react-redux";
import actions from "src/modules/evenement/list/evenementListActions";
import selectors from "src/modules/evenement/list/evenementListSelectors";
import EvenementItem from "./EvenementItem";
function Evenements() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.evenementvenir());
    dispatch(actions.evenementpasse());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const selectLoadingPasse = useSelector(selectors.selectLoadingPasse);
  const selectLoadingVenir = useSelector(selectors.selectLoadingVenir);

  const selectRowsPasse = useSelector(selectors.selectRowsPasse);
  const selectRowsVenir = useSelector(selectors.selectRowsVenir);

  const RenderItem = (obj) => {
    return (
      <div className='evenement__message'>
        <div className='messageEvenement__left'>
          <div>
            <div className='left__number'>15</div>
            <div className='left__months'>Avril</div>
          </div>
        </div>
        <div className='messageEvenement__right'>
          <div className='messageEvenement__title'>{obj?.title}</div>
          <div className='messageEvenement__description'>
            <div>par FTDES</div>
            <div>
              <AiOutlineCalendar /> 14 octobre 2022
            </div>
            <div>
              <MdLocationOn /> Tunis
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <Breadcrumb
        title={i18n("common.Evènements")}
        items={[[i18n("dashboard.menu"), "/"], [i18n("common.Evènements")]]}
      />
      <div className='page__evenement'>
        <div className='evenment__header'>
          <Slider
            rows={dataSlider}
            height={404}
            width={1170}
            label='slider'
            render={RenderItem}
            showDots={true}
          />
        </div>
        <EvenementAvenir />
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
      </div>
    </>
  );
}

export default Evenements;
