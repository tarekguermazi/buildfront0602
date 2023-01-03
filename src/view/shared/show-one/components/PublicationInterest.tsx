import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import actionsPublication from "src/modules/publication/list/publicationListActions";
import selectorsPublication from "src/modules/publication/list/publicationListSelectors";
import Translate from "../../Translate";
import Date from "../../Date";
import Image from "../../Image";
import { Link } from "react-router-dom";
import { i18n } from "../../../../i18n";
function PublicationInterest(props) {
  const { rows, showDetaill } = props;
  const dispatch = useDispatch();
  const rowsThematique = useSelector(selectorsPublication?.rowsThematique);
  const loadingthematique = useSelector(
    selectorsPublication?.loadingthematique
  );

  useEffect(() => {
    dispatch(
      actionsPublication.doFetchPublicationWithThematique(rows?.thematique?.id)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className='publication__interest'>
      <div className='archieve__header'>
        <h2>{i18n("entities.publication.publicationInteresser")}</h2>
        <div className='satestique__bar'></div>
      </div>

      <div className='interest__detaill'>
        {loadingthematique ? (
          <h4>Loading ... </h4>
        ) : (
          rowsThematique.map((item) => (
            <Link to={`/detail/${item.id}`}>
              <div
                onClick={() => showDetaill(item.id)}
                style={{ cursor: "pointer", display: "flex", gap: 19 }}>
                <Image
                  src={item?.supports[0]?.downloadUrl}
                  width='182'
                  height='147'
                  alt=''
                />
                <div className='list__detaill'>
                  <div className='detaill__header'>
                    <div className='header__left'>
                      <p>{Translate.Trans("title", item.thematique)} </p>
                    </div>
                    <div className='header__right'>
                      {Date.fullDate(item.updatedAt)}
                    </div>
                  </div>
                  <div
                    className='detaill__content text__wrap'
                    style={{ width: "369px" }}>
                    {Translate.Trans("title", item)}
                  </div>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
PublicationInterest.prototype = {
  showDetaill: PropTypes.func.isRequired,
};
export default PublicationInterest;
