import PublicationService from "src/modules/publication/publicationService";
import selectors from "src/modules/publication/list/publicationListSelectors";
import { i18n } from "src/i18n";
import Errors from "src/modules/shared/error/errors";

const prefix = "PUBLICATION_LIST";

const publicationListActions = {
  FETCH_STARTED: `${prefix}_FETCH_STARTED`,
  FETCH_SUCCESS: `${prefix}_FETCH_SUCCESS`,
  FETCH_ERROR: `${prefix}_FETCH_ERROR`,

  FIND_THEMATIQUE_STARTED: `${prefix}_FIND_THEMATIQUE_STARTED`,
  FIND_THEMATIQUE_SUCCESS: `${prefix}_FIND_THEMATIQUE_SUCCESS`,
  FIND_THEMATIQUE_ERROR: `${prefix}_FIND_THEMATIQUE_ERROR`,

  FETCH_STARTED_ALL_PUBLICATION: `${prefix}_FETCH_STARTED_ALL_PUBLICATION`,
  FETCH_SUCCESS_ALL_PUBLICATION: `${prefix}_FETCH_SUCCESS_ALL_PUBLICATION`,
  FETCH_ERROR_ALL_PUBLICATION: `${prefix}_FETCH_ERROR_ALL_PUBLICATION`,

  FETCH_STARTED_BY_CATEGORY: `${prefix}_FETCH_STARTED_BY_CATEGORY`,
  FETCH_SUCCESS_BY_CATEGORY: `${prefix}_FETCH_SUCCESS_BY_CATEGORY`,
  FETCH_ERROR_BY_CATEGORY: `${prefix}_FETCH_ERROR_BY_CATEGORY`,

  RESETED: `${prefix}_RESETED`,
  SELECTEDS_CHANGED: `${prefix}_SELECTEDS_CHANGED`,

  PAGINATION_CHANGED: `${prefix}_PAGINATION_CHANGED`,
  SORTER_CHANGED: `${prefix}_SORTER_CHANGED`,

  EXPORT_STARTED: `${prefix}_EXPORT_STARTED`,
  EXPORT_SUCCESS: `${prefix}_EXPORT_SUCCESS`,
  EXPORT_ERROR: `${prefix}_EXPORT_ERROR`,

  doChangeSelected(payload) {
    return {
      type: publicationListActions.SELECTEDS_CHANGED,
      payload,
    };
  },

  doReset: () => async (dispatch) => {
    dispatch({
      type: publicationListActions.RESETED,
    });

    dispatch(publicationListActions.doFetch());
  },

  doChangePaginationAndSort:
    (pagination, sorter) => async (dispatch, getState) => {
      dispatch({
        type: publicationListActions.PAGINATION_CHANGED,
        payload: pagination,
      });

      dispatch({
        type: publicationListActions.SORTER_CHANGED,
        payload: sorter,
      });

      dispatch(publicationListActions.doFetchCurrentFilter());
    },

  doFetchCurrentFilter: () => async (dispatch, getState) => {
    const filter = selectors.selectFilter(getState());
    const rawFilter = selectors.selectRawFilter(getState());
    dispatch(publicationListActions.doFetch(filter, rawFilter, true));
  },

  doFetch:
    (filter?, rawFilter?, keepPagination = false) =>
    async (dispatch, getState) => {
      try {
        dispatch({
          type: publicationListActions.FETCH_STARTED,
          payload: { filter, rawFilter, keepPagination },
        });

        const response = await PublicationService.list(
          filter,
          selectors.selectOrderBy(getState()),
          selectors.selectLimit(getState()),
          selectors.selectOffset(getState())
        );

        dispatch({
          type: publicationListActions.FETCH_SUCCESS,
          payload: {
            rows: response.rows,
            count: response.count,
          },
        });
      } catch (error) {
        Errors.handle(error);

        dispatch({
          type: publicationListActions.FETCH_ERROR,
        });
      }
    },

  doFetchValidePublication:
    (filter?, rawFilter?, keepPagination = false) =>
    async (dispatch, getState) => {
      try {
        dispatch({
          type: publicationListActions.FETCH_STARTED,
          payload: { filter, rawFilter, keepPagination },
        });

        const response = await PublicationService.listPublicationValide();

        dispatch({
          type: publicationListActions.FETCH_SUCCESS,
          payload: {
            rows: response.rows,
            count: response.count,
          },
        });
      } catch (error) {
        Errors.handle(error);

        dispatch({
          type: publicationListActions.FETCH_ERROR,
        });
      }
    },

  allpublicationbythematique: () => async (dispatch, getState) => {
    try {
      dispatch({
        type: publicationListActions.FETCH_STARTED_ALL_PUBLICATION,
      });
      const response = await PublicationService.allpublicationbythematique();
      dispatch({
        type: publicationListActions.FETCH_SUCCESS_ALL_PUBLICATION,
        payload: response,
      });
    } catch (error) {
      Errors.handle(error);
      dispatch({
        type: publicationListActions.FETCH_ERROR_ALL_PUBLICATION,
      });
    }
  },

  allpublicationbyCategory: () => async (dispatch, getState) => {
    try {
      dispatch({
        type: publicationListActions.FETCH_STARTED_BY_CATEGORY,
      });
      const response = await PublicationService.allpublicationbyGroup();
      dispatch({
        type: publicationListActions.FETCH_SUCCESS_BY_CATEGORY,
        payload: response,
      });
    } catch (error) {
      Errors.handle(error);
      dispatch({
        type: publicationListActions.FETCH_ERROR_BY_CATEGORY,
      });
    }
  },
  doFindAllByThematique: (id) => async (dispatch, getState) => {
    try {
      dispatch({
        type: publicationListActions.FIND_THEMATIQUE_STARTED,
      });
      const response = await PublicationService.findbythematique(id);
      dispatch({
        type: publicationListActions.FIND_THEMATIQUE_SUCCESS,
        payload: response,
      });
    } catch (error) {
      Errors.handle(error);
      dispatch({
        type: publicationListActions.FIND_THEMATIQUE_ERROR,
      });
    }
  },

  doFindAllByCategory: (id) => async (dispatch, getState) => {
    try {
      dispatch({
        type: publicationListActions.FIND_THEMATIQUE_STARTED,
      });
      const response = await PublicationService.findbygroup(id);
      dispatch({
        type: publicationListActions.FIND_THEMATIQUE_SUCCESS,
        payload: response,
      });
    } catch (error) {
      Errors.handle(error);
      dispatch({
        type: publicationListActions.FIND_THEMATIQUE_ERROR,
      });
    }
  },
};

export default publicationListActions;
