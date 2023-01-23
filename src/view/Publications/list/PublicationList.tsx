import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "src/modules/publication/list/publicationListActions";
import selectors from "src/modules/publication/list/publicationListSelectors";
import Spinner from "src/view/shared/Spinner";
import Pagination from "src/view/shared/table/Pagination";
import { Link } from "react-router-dom";
// ICONS
import { GrTextAlignFull } from "react-icons/gr";
import { IoVideocamOutline } from "react-icons/io5";
import { CgLink, CgSoftwareUpload } from "react-icons/cg";
import { BsCamera, BsPencil } from "react-icons/bs";
import { BiMicrophone, BiStats } from "react-icons/bi";
import { AiOutlineQuestion, AiOutlineEye } from "react-icons/ai";
import { VscGraphScatter } from "react-icons/vsc";
import PublicationListItem from "src/view/Publications/list/PublicationListItem";
import { i18n } from "src/i18n";

import authSelectors from "src/modules/auth/authSelectors";
import Permissions from "src/security/permissions";
import PermissionChecker from "src/modules/auth/permissionChecker";

function PublicationList(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.doFetch());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const findLoading = useSelector(selectors.selectLoading);
  const loading = findLoading;
  const rows = useSelector(selectors.selectRows);
  const hasRows = useSelector(selectors.selectHasRows);
  const count = useSelector(selectors.selectCount);
  const pagination = useSelector(selectors.selectPagination);

  const currentUser = useSelector(authSelectors.selectCurrentUser);
  const currentTenant = useSelector(authSelectors.selectCurrentTenant);

  const doChangePagination = (pagination) => {
    dispatch(actions.doChangePaginationAndSort(pagination, {}));
  };
  //permissions
  const permissions = Permissions.values;
  const permissionChecker = new PermissionChecker(currentTenant, currentUser);
  const publicationNewPermission = permissionChecker.match(
    permissions.publicationCreate
  );
  const publicationPermission = permissionChecker.match(
    permissions.publicationEdit
  );
  const IconAndType = {
    width: "70px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };
  const actionButtons = {
    fontSize: "1.2rem",
    color: "#ffff",
  };

  return (
    <>
      <div className="list__button">
        <div className="list__title">
          <h2>{i18n("menu.contenu_recent")}</h2>
        </div>
        {publicationNewPermission ? (
          <Link to="/publication/new">
            <div className="button__contenue">
              {i18n("menu.suggerer_de_contenu")}
            </div>
          </Link>
        ) : null}
      </div>
      <div className="list__search">
        <div className="search__left">
          {count} {i18n("menu.contenus")}
        </div>

        {/* <div className='search__right'>
          <div className='search__result'>
            <i className='fas fa-search'></i>
            {i18n("buttons.chercher")}
          </div>
          <div className='filter'>
            <i className='fas fa-sliders-h'></i>
            {i18n("buttons.filtrer")}
          </div>
        </div> */}
      </div>
      <div className="list__items">
        <table>
          <thead>
            <tr>
              <td>{i18n("entities.publication.fields.thematique")}</td>
              <td>{i18n("entities.publication.fields.categorie")}</td>
              <td>{i18n("entities.publication.fields.type")}</td>
              <td>{i18n("entities.publication.fields.statut")}</td>
              <td>{i18n("entities.publication.fields.date")}</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {loading && (
              <tr>
                <td colSpan={100}>
                  <Spinner />
                </td>
              </tr>
            )}
            {!loading && !hasRows && (
              <tr>
                <td colSpan={100}>
                  <div className="d-flex justify-content-center">
                    {i18n("table.noData")}
                  </div>
                </td>
              </tr>
            )}
            {!loading &&
              rows.map((row) => (
                <tr key={row.id}>
                  <td>
                    <PublicationListItem value={row.thematique} />
                  </td>
                  <td>
                    <PublicationListItem value={row.category} />
                  </td>
                  <td>
                    <div style={IconAndType}>
                      {
                        {
                          Texte: (
                            <GrTextAlignFull className="icon" fontSize={20} />
                          ),
                          audio: (
                            <BiMicrophone className="icon" fontSize={20} />
                          ),
                          vidéo: (
                            <IoVideocamOutline className="icon" fontSize={20} />
                          ),
                          "lien web": <CgLink className="icon" fontSize={20} />,
                          photo: <BsCamera className="icon" fontSize={20} />,
                          infographie: (
                            <VscGraphScatter className="icon" fontSize={20} />
                          ),
                          statistiques: (
                            <BiStats className="icon" fontSize={20} />
                          ),
                          autre: (
                            <AiOutlineQuestion className="icon" fontSize={20} />
                          ),
                        }[row.type]
                      }
                      {row.type}
                    </div>
                  </td>
                  <td>
                    <span className={row.statut}>
                      {i18n(
                        `entities.publication.enumerators.statut.${row.statut}`
                      )}
                    </span>
                  </td>
                  <td> {row.date}</td>
                  {publicationPermission ? (
                    <td style={actionButtons}>
                      <Link to={`/publication/${row.id}/edit`}>
                        <BsPencil className="icon" color="#a3a3a9" />
                      </Link>
                    </td>
                  ) : null}
                </tr>
              ))}
          </tbody>
        </table>
        <Pagination
          onChange={doChangePagination}
          disabled={loading}
          pagination={pagination}
        />
      </div>
    </>
  );
}

export default PublicationList;
