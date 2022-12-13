import React, { useEffect } from "react";
import { i18n } from "src/i18n";
import { useRouteMatch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { calendar__bttom } from "../../../assets/images";
import Breadcrumb from "../Breadcrumb";
import "./components/style.css";
import action from "src/modules/publication/view/publicationViewActions";
import selectors from "src/modules/publication/view/publicationViewSelectors";
import DescriptionPublication from "./components/DescriptionPublication";
import PublicationInterest from "./components/PublicationInterest";
function Detail() {
  const dispatch = useDispatch();
  const match = useRouteMatch();
  const id = match.params.id;
  const rows = useSelector(selectors.selectRecord);
  const loading = useSelector(selectors.selectLoading);
  const showDetaill = (id) => {
    dispatch(action.doFind(id));
  };

  useEffect(() => {
    showDetaill(id);
  }, [id, dispatch]);

  return (
    <>
      <div className='publication__page'>
        <div className='app__calendar'>
          <img src={calendar__bttom} alt='' />
        </div>
        <Breadcrumb
          items={[
            [i18n("dashboard.menu"), "/"],
            [i18n("entities.publication.label")],
          ]}
        />
        {loading ? (  
          <h1> Loading ... </h1>
        ) : (
          <div className='page__detaill'>
            <DescriptionPublication rows={rows} showDetaill={showDetaill} />
            <PublicationInterest rows={rows} showDetaill={showDetaill} />
          </div>
        )}
      </div>
    </>
  );
}

export default Detail;
