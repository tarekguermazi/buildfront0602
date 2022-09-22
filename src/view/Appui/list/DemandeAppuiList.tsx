import React, { useEffect } from "react";
import actions from "src/modules/demandeAppui/list/demandeAppuiListActions";
import selectors from "src/modules/demandeAppui/list/demandeAppuiListSelectors";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../shared/Spinner";
import Pagination from "src/view/shared/table/Pagination";
import { Link } from "react-router-dom";
import { i18n } from "src/i18n";

function ListAppui(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.doFetch());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const findLoading = useSelector(selectors.selectLoading);
  const loading = findLoading;
  const rows = useSelector(selectors.selectRows);
  const hasRows = useSelector(selectors.selectHasRows);
  const pagination = useSelector(selectors.selectPagination);
  const count = useSelector(selectors.selectCount);
  const doChangePagination = (pagination) => {
    dispatch(actions.doChangePaginationAndSort(pagination, {}));
  };
  return (
    <>
      <div className='list__button'>
        <div className='list__title'>
          <h2>contenu récent </h2>
        </div>
        <Link to='/appui/new'>
          <div className='button__contenue'>Demande d’appui</div>
        </Link>
      </div>
      <div className='list__search'>
        <div className='search__left'>{count} contenus </div>

        <div className='search__right'>
          <div className='search__result'>
            <i className='fas fa-search'></i>Chercher
          </div>
          <div className='filter'>
            <i className='fas fa-sliders-h'></i>Filtrer
          </div>
        </div>
      </div>
      <div className='list__items'>
        <table>
          <thead>
            <tr>
              <td> {i18n("entities.demandeAppui.fields.personne")}</td>
              <td> {i18n("entities.demandeAppui.fields.email")}</td>
              <td>{i18n("entities.demandeAppui.fields.phoneNumber")}</td>
              <td> {i18n("entities.demandeAppui.fields.description")}</td>
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
                  <div className='d-flex justify-content-center'>
                    {i18n("table.noData")}
                  </div>
                </td>
              </tr>
            )}
            {!loading &&
              rows.map((row) => (
                <tr key={row.id}>
                  <td>{row.personne}</td>
                  <td>{row.email}</td>
                  <td>{row.phoneNumber}</td>
                  <td>{row.descriptionFR}</td>

                  <td className='actions'>
                    <Link to={`/appui/${row.id}/edit`}>
                      <i className='fa-solid fa-pen'></i>
                    </Link>
                  </td>
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

export default ListAppui;
