import React, { useEffect, useState } from "react";
import {
  Facebook,
  Instagramm,
  Linkedin,
  twitter,
} from "../../../../assets/images";
import { i18n } from "src/i18n";
import Image from "../../Image";
import Translate from "../../Translate";
import actionsPublication from "src/modules/publication/list/publicationListActions";
import selectorsPublication from "src/modules/publication/list/publicationListSelectors";
import { useDispatch, useSelector } from "react-redux";
import Date from "../../Date";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import {
  TwitterIcon,
  TwitterShareButton,
  FacebookShareButton,
  FacebookIcon,
  LinkedinIcon,
  LinkedinShareButton,
} from "react-share";
import MyPDFViewer from "./MyPDFViewer";

function DescriptionPublication(props) {
  const dispatch = useDispatch();
  const { rows } = props;
  const rowsPublication = useSelector(selectorsPublication.selectRows);
  const loadingPublication = useSelector(selectorsPublication.selectLoading);

  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);

  // function onDocumentLoadSuccess({ numPages }) {
  // 	setNumPages(numPages);
  // 	setPageNumber(1);
  // }

  function changePage(offSet) {
    setPageNumber((prevPageNumber) => prevPageNumber + offSet);
  }

  function changePageBack() {
    changePage(-1);
  }

  function changePageNext() {
    changePage(+1);
  }

  useEffect(() => {
    dispatch(actionsPublication.doFetchValidePublication());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <>
      <div className="header__left">
        <p>{Translate.Trans("title", rows?.thematique)}</p>
      </div>
      <div className="detail">
        <div className="detail__left">
          <div className="detail__title">{Translate.Trans("title", rows)}</div>

          <div className="detail__author">
            <div className="author__left">
              <div className="left__author__date">
                {Date.DetaillDate(rows?.updatedAt)}
              </div>
            </div>
            <div className="detaillEvenement__socialMedia">
              <div className="socialMedia__title">
                {i18n("common.Partager")} :
              </div>
              <div>
                <FacebookShareButton url={window.location.href}>
                  <FacebookIcon size={35} round />
                </FacebookShareButton>
              </div>

              <div>
                <TwitterShareButton url={window.location.href}>
                  <TwitterIcon size={35} round />
                </TwitterShareButton>
              </div>
              <div>
                <LinkedinShareButton url={window.location.href}>
                  <LinkedinIcon size={35} round />
                </LinkedinShareButton>
              </div>
            </div>
          </div>

          <div className="App">
            <div>
              <a
                href={rows?.supports[0].downloadUrl}
                download
                style={{ color: "#9a0000" }}
              >
                Télécharger ({rows?.supports[0].name},&nbsp;
                {rows?.supports[0].sizeInBytes} KB)
              </a>

              <MyPDFViewer pdf={rows?.supports[0]?.downloadUrl} />
            </div>
          </div>
        </div>
        <div>
          <div className="archieve__header">
            <h2>{i18n("entities.publication.lastNews")}</h2>
            <div className="satestique__bar"></div>
          </div>
          <div className="manification__images">
            {loadingPublication ? (
              <h4>{i18n("table.loading")}</h4>
            ) : (
              rowsPublication.map((item) => (
                <Link to={`/detail/${item.id}`}>
                  <div
                    onClick={() => props.showDetaill(item.id)}
                    style={{
                      cursor: "pointer",
                      display: "flex",
                      columnGap: 17,
                    }}
                  >
                    <Image
                      src={item.supports[0].downloadUrl}
                      width="120"
                      height="78"
                      alt=""
                    />
                    <div className="list__detaill">
                      <div className="detaill__header">
                        <div className="header__left">
                          <p>{Translate.Trans("title", item.thematique)}</p>
                        </div>
                        <div className="header__right">
                          {Date.fullDate(item.updatedAt)}
                        </div>
                      </div>
                      <div
                        className="detaill__content text__wrap"
                        style={{ width: "233px" }}
                      >
                        {Translate.Trans("title", item)}
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}

DescriptionPublication.prototype = {
  showDetaill: PropTypes.func.isRequired,
};

export default DescriptionPublication;
