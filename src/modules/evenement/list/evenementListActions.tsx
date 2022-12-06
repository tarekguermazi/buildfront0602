import EvenementService from "src/modules/evenement/evenementService";
import selectors from "src/modules/evenement/list/evenementListSelectors";
import { i18n } from "src/i18n";
import Errors from "src/modules/shared/error/errors";

const prefix = "EVENEMENT_LIST";

const evenementListActions = {
  FETCH_STARTED: `${prefix}_FETCH_STARTED`,
  FETCH_SUCCESS: `${prefix}_FETCH_SUCCESS`,
  FETCH_ERROR: `${prefix}_FETCH_ERROR`,

  FETCH_STARTED_EVENEMENT: `${prefix}FETCH_STARTED_EVENEMENT`,

  FETCH_SUCCESS_EVENEMENT: `${prefix}FETCH_SUCCESS_EVENEMENT`,

  FETCH_ERROR_EVENEMENT: `${prefix}FETCH_ERROR_EVENEMENT`,

  FETCH_STARTED_EVENEMENT_VENIR: `${prefix}_FETCH_STARTED_EVENEMENT_VENIR`,
  FETCH_SUCCESS_EVENEMENT_VENIR: `${prefix}_FETCH_SUCCESS_EVENEMENT_VENIR`,
  FETCH_ERROR_EVENEMENT_VENIR: `${prefix}_FETCH_ERROR_EVENEMENT_VENIR`,

  FETCH_STARTED_EVENEMENT_PASSE: `${prefix}_FETCH_STARTED_EVENEMENT_PASSE`,
  FETCH_SUCCESS_EVENEMENT_PASSE: `${prefix}_FETCH_SUCCESS_EVENEMENT_PASSE`,
  FETCH_ERROR_EVENEMENT_PASSE: `${prefix}_FETCH_ERROR_EVENEMENT_PASSE`,

  RESETED: `${prefix}_RESETED`,
  SELECTEDS_CHANGED: `${prefix}_SELECTEDS_CHANGED`,

  PAGINATION_CHANGED: `${prefix}_PAGINATION_CHANGED`,
  SORTER_CHANGED: `${prefix}_SORTER_CHANGED`,

  EXPORT_STARTED: `${prefix}_EXPORT_STARTED`,
  EXPORT_SUCCESS: `${prefix}_EXPORT_SUCCESS`,
  EXPORT_ERROR: `${prefix}_EXPORT_ERROR`,

  doChangeSelected(payload) {
    return {
      type: evenementListActions.SELECTEDS_CHANGED,
      payload,
    };
  },

  doReset: () => async (dispatch) => {
    dispatch({
      type: evenementListActions.RESETED,
    });

    dispatch(evenementListActions.doFetch());
  },

  listevenementVenir: () => async (dispatch) => {
    try {
      dispatch({ type: evenementListActions.FETCH_STARTED_EVENEMENT });
      const response = await EvenementService.evenementvenir();
      dispatch({
        type: evenementListActions.FETCH_SUCCESS_EVENEMENT,
        payload: { rows: response.rows, count: response.coutn },
      });
    } catch (error) {
      Errors.handle(error);
      dispatch({ type: evenementListActions.FETCH_ERROR_EVENEMENT });
    }
  },
  listevenementPasse: () => async (dispatch) => {
    try {
      dispatch({ type: evenementListActions.FETCH_STARTED_EVENEMENT });
      const response = await EvenementService.evenementpasse();
      dispatch({
        type: evenementListActions.FETCH_SUCCESS_EVENEMENT,
        payload: { rows: response.rows, count: response.coutn },
      });
    } catch (error) {
      Errors.handle(error);
      dispatch({ type: evenementListActions.FETCH_ERROR_EVENEMENT });
    }
  },
  evenementpasse: () => async (dispatch, getState) => {
    try {
      dispatch({
        type: evenementListActions.FETCH_STARTED_EVENEMENT_PASSE,
      });
      const response = await EvenementService.evenementpasse();
      dispatch({
        type: evenementListActions.FETCH_SUCCESS_EVENEMENT_PASSE,
        payload: { rows: response.rows, count: response.coutn },
      });
    } catch (error) {
      Errors.handle(error);
      dispatch({
        type: evenementListActions.FETCH_ERROR_EVENEMENT_PASSE,
      });
    }
  },

  evenementvenir: () => async (dispatch, getState) => {
    try {
      dispatch({
        type: evenementListActions.FETCH_STARTED_EVENEMENT_VENIR,
      });
      const response = await EvenementService.evenementvenir();
      dispatch({
        type: evenementListActions.FETCH_SUCCESS_EVENEMENT_VENIR,
        payload: { rows: response.rows, count: response.coutn },
      });
    } catch (error) {
      Errors.handle(error);
      dispatch({
        type: evenementListActions.FETCH_ERROR_EVENEMENT_VENIR,
      });
    }
  },
  doFetch: () => async (dispatch, getState) => {
    try {
      dispatch({
        type: evenementListActions.FETCH_STARTED,
      });

      const response = await EvenementService.list();

      dispatch({
        type: evenementListActions.FETCH_SUCCESS,
        payload: {
          rows: response.rows,
          count: response.count,
        },
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: evenementListActions.FETCH_ERROR,
      });
    }
  },

  doSearch:
    (filter?, rawFilter?, keepPagination = false) =>
    async (dispatch, getState) => {
      try {
        dispatch({
          type: evenementListActions.FETCH_STARTED,
          payload: { filter, rawFilter, keepPagination },
        });

        const response = await EvenementService.search(
          filter,
          selectors.selectOrderBy(getState()),
          selectors.selectLimit(getState()),
          selectors.selectOffset(getState())
        );

        dispatch({
          type: evenementListActions.FETCH_SUCCESS,
          payload: {
            rows: response.rows,
            count: response.count,
          },
        });
      } catch (error) {
        Errors.handle(error);

        dispatch({
          type: evenementListActions.FETCH_ERROR,
        });
      }
    },
};

export default evenementListActions;
