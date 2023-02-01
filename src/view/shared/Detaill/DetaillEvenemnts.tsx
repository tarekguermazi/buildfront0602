import React, { useEffect } from "react";
import { calendar__bttom } from "../../../assets/images";
import { i18n } from "../../../i18n";
import Breadcrumb from "../Breadcrumb";
import Image from "../Image";
import "./DetaillWrapper.css";
import { useRouteMatch } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import Translate from "../Translate";
import Skeletons from "../Skeletons";

import actions from "src/modules/evenement/list/evenementListActions";
import selectors from "src/modules/evenement/list/evenementListSelectors";

import Date from "../Date";
import Empty from "../Nodatafound/Empty";
import { Link } from "react-router-dom";
function Detaill() {
  const match = useRouteMatch();
  const dispatch = useDispatch();

  const doFetch = async () => {
    if (match.path === "/detaill/Evenement/Venir") {
      dispatch(actions.listevenementVenir());
    } else if (match.path === "/detaill/Evenement/Passe") {
      dispatch(actions.listevenementPasse());
    }
  };

  const rows = useSelector(selectors.selectRows);

  const selectLoadingPasse = useSelector(selectors.selectLoadingPasse);
  const selectLoadingVenir = useSelector(selectors.selectLoadingVenir);
  const loading = selectLoadingPasse || selectLoadingVenir;

  let titleBreadcrumb =
    match.path === "/detaill/Evenement/Venir"
      ? "événement a venir "
      : "événement passé";
  useEffect(() => {
    doFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <div className="app__detaill">
      {loading && <h4 className="detaill__sketlon">{i18n("table.loading")}</h4>}
      {!loading && rows.length <= 0 ? (
        <Empty />
      ) : (
        <>
          <div className="app__calendar">
            <img src={calendar__bttom} alt="" />
          </div>
          <div className="__detaillwrapper">
            <Breadcrumb
              title={titleBreadcrumb}
              items={[[i18n("app.title"), "/"], [i18n(titleBreadcrumb)]]}
            />
            <div className="detaill">
              <div className="list__detaills">
                {rows.map((item) => (
                  <div>
                    <Link to={`/Evenements/${item.id}`}>
                      <Image
                        src={item.supports[0]?.downloadUrl}
                        alt="publication2 Icon"
                        id="image__desktop"
                        width="370"
                        height="300"
                      />
                      <div className="list__detaill">
                        <div className="detaill__header">
                          <div className="header__left"></div>
                          <div className="header__right">
                            {Date.HourMinute(item.date)}
                          </div>
                        </div>{" "}
                        <div className="detaill__content text__wrap">
                          {Translate.Trans("title", item)}
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Detaill;
