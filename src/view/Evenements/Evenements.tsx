import React, { useEffect } from "react";
import Breadcrumb from "../shared/Breadcrumb";
import { i18n } from "../../i18n";
import Skeletons from "../shared/Skeletons";
import Image from "../shared/Image";
import { AiOutlineCalendar } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import Slider from "../shared/Slider/Slider";
import { dataSlider } from "../shared/Slider/dataSlider";
import EvenementAvenir from "./EvenementAvenir";
import EvenementPasse from "./EvenementPasse";
import actions from "src/modules/evenement/list/evenementListActions";
import selector from "src/modules/evenement/list/evenementListSelectors";
import { useDispatch, useSelector } from "react-redux";
import Date from "../shared/Date";
import Translate from "../shared/Translate";

function Evenements() {
  const dispatch = useDispatch();
  const loading = useSelector(selector.selectRows);
  const rows = useSelector(selector.selectRows);
  useEffect(() => {
    dispatch(actions.doFetch());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const RenderItem = (obj) => {
    return (
      <div className='evenement__message'>
        <div className='messageEvenement__left'>
          <div className='left__number'>{Date.Day(obj?.date)}</div>
          <div className='left__months'>{Date.Month(obj?.date)}</div>
        </div>
        <div className='messageEvenement__right'>
          <div className='messageEvenement__title'>
            {Translate.Trans("title", obj)}
          </div>
          <div className='messageEvenement__description'>
            <div>
              <AiOutlineCalendar />
              {Date.date(obj?.date)}
            </div>
            <div>
              <MdLocationOn />
              {Translate.TransEmplacement(obj)}
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
        items={[[i18n("app.title"), "/"], [i18n("common.Evènements")]]}
      />
      <div className='page__evenement'>
        <div className='evenment__header'>
          <Slider
            rows={rows}
            height={404}
            width={1170}
            label='slider'
            render={RenderItem}
            showDots={true}
          />
        </div>
        <EvenementAvenir />
        <EvenementPasse />
      </div>
    </>
  );
}

export default Evenements;
