import React, { useEffect } from "react";
import Breadcrumb from "src/view/shared/Breadcrumb";
import { calendar__bttom } from "../../assets/images";
import { i18n } from "../../i18n";
import Image from "src/view/shared/Image";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import actions from "src/modules/categoryPublication/list/categoryPublicationListActions";
import selectors from "src/modules/categoryPublication/list/categoryPublicationListSelectors";
import actionsPublication from "src/modules/publication/list/publicationListActions";
import selectorsPublication from "src/modules/publication/list/publicationListSelectors";
import PublicationCategory from "./list/PublicationCategory";
import PublicationDetaill from "./list/PublicationDetaill";
import PublicationDetaillByThematique from "./list/PublicationDetaillByThematique";
import PublicationByCategory from "./list/PublicationByCategory";
function Publications() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionsPublication.allpublicationbythematique());
    dispatch(actionsPublication.allpublicationbyCategory());
    dispatch(actionsPublication.doFetchValidePublication());
    dispatch(actions.doFetch());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const rowsPublicationByThematique = useSelector(
    selectorsPublication.selectPublicationByThematiqueRows
  );
  const lodingThematique = useSelector(
    selectorsPublication.selectloadingpublicationbythematique
  );
  const rowsPublication = useSelector(selectorsPublication.selectRows);
  const loadingPublication = useSelector(selectorsPublication.selectLoading);
  const loadingByCategory = useSelector(selectorsPublication.loadingByCategory);
  const rowsCategory = useSelector(selectorsPublication.slectByCategory);
  const loadingCategory = useSelector(selectors.selectLoading);
  const selectRowsCategory = useSelector(selectors.selectRows);
  const loading =
    loadingByCategory ||
    lodingThematique ||
    loadingPublication ||
    loadingCategory;
  return (
    <>
      <div className='publication__page'>
        <div className='app__calendar'>
          <img src={calendar__bttom} alt='' />
        </div>
        <Breadcrumb
          title={i18n("entities.publication.label")}
          items={[
            [i18n("dashboard.menu"), "/"],
            [i18n("entities.publication.label")],
          ]}
        />
        {loading && <h3 className='detaill__sketlon'> Loading ... </h3>}
        {!loading && (
          <>
            <div className='app__category'>
              <div className='category__list'>
                {!loadingByCategory &&
                  selectRowsCategory.map((item, index) => (
                    <PublicationCategory rows={item} index={index} />
                  ))}
              </div>
            </div>
            <div className='app__pub'>
              <div className='publication__header'>
                <div className='image__pub'>
                  {rowsPublication.map((item, index) => (
                    <div className='pub__relative' key={index}>
                      <img src={item?.supports[0]?.downloadUrl} alt='header' />
                      <Link to={`/publications/${item.id}`}>
                        <PublicationDetaill data={item} />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
              {/* styling the migration section */}
              {lodingThematique && <h3>Loading ... </h3>}
              {rowsPublicationByThematique.map((item, index) => (
                <PublicationDetaillByThematique
                  data={item?.data}
                  thematique={item?.cat[0]}
                  index={index}
                />
              ))}
              {/* stlyling the pollution */}

              <div className='app__articles'>
                <div className='articles__top'>
                  <div className='__top'>
                    {rowsCategory.map((item, index) => (
                      <PublicationByCategory
                        data={item?.data}
                        category={item?.cat[0]}
                        index={index}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Publications;
