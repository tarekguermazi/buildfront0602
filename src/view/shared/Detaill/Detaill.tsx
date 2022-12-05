import React, { useEffect } from "react";
import { calendar__bttom } from "../../../assets/images";
import { i18n } from "../../../i18n";
import Breadcrumb from "../Breadcrumb";
import Image from "../Image";
import "./DetaillWrapper.css";
import { useRouteMatch } from "react-router-dom";
import actions from "src/modules/publication/list/publicationListActions";
import selectors from "src/modules/publication/list/publicationListSelectors";
import { useDispatch, useSelector } from "react-redux";
import Translate from "../Translate";
import Skeletons from "../Skeletons";
import Date from "../Date";
import { BsBox } from "react-icons/bs";
import Empty from "../Nodatafound/Empty";
import Skeleton from "react-loading-skeleton";

function Detaill() {
  const match = useRouteMatch();
  const dispatch = useDispatch();
  const rows = useSelector(selectors.selectRows);
  const loading = useSelector(selectors.selectLoading);
  const selectHasRows = useSelector(selectors.selectHasRows);

  const doFetch = async () => {
    if (match.path === "/detaill/category/:id") {
      dispatch(actions.doFindAllByCategory(match.params.id));
    } else if (match.path === "/detaill/:id") {
      dispatch(actions.doFindAllByThematique(match.params.id));
    }
  };

  let titleBreadcrumb =
    match.path === "/detaill/category/:id"
      ? rows[0]?.category?.titleFR
      : rows[0]?.thematique?.titleFR;

  useEffect(() => {
    doFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='app__detaill'>
      {loading && <h3 className='detaill__sketlon'>Loading .... </h3>}
      {!selectHasRows && <Empty />}
      {!loading && rows && selectHasRows && (
        <>
          {
            <Breadcrumb
              title={titleBreadcrumb}
              items={[[i18n("dashboard.menu"), "/"], [i18n(titleBreadcrumb)]]}
            />
          }
          <div className='app__calendar'>
            <img src={calendar__bttom} alt='' />
          </div>
          <div className='detaill'>
            <div className='list__detaills'>
              {rows.map((item) => (
                <div>
                  <Image
                    src={item.supports[0]?.downloadUrl}
                    alt='publication2 Icon'
                    id='image__desktop'
                    width='370'
                    height='300'
                  />
                  <div className='list__detaill'>
                    <div className='detaill__header'>
                      <div className='header__left'>
                        <p>Forum</p>
                      </div>
                      <div className='header__right'>
                        {" "}
                        {Date.HourMinute(item.updatedAt)}
                      </div>
                    </div>{" "}
                    <div className='detaill__content'>{item.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Detaill;
