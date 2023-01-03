import TableaudeBoardService from "src/modules/tableaudeBoard/tableaudeBoardService";
import selectors from "src/modules/tableaudeBoard/list/tableaudeBoardListSelectors";
import { i18n } from "src/i18n";
import Errors from "src/modules/shared/error/errors";

const prefix = "TABLEAUDEBOARD_LIST";

const tableaudeBoardListActions = {
  FETCH_STARTED: `${prefix}_FETCH_STARTED`,
  FETCH_SUCCESS: `${prefix}_FETCH_SUCCESS`,
  FETCH_ERROR: `${prefix}_FETCH_ERROR`,

  RESETED: `${prefix}_RESETED`,
  SELECTEDS_CHANGED: `${prefix}_SELECTEDS_CHANGED`,

  PAGINATION_CHANGED: `${prefix}_PAGINATION_CHANGED`,
  SORTER_CHANGED: `${prefix}_SORTER_CHANGED`,

  EXPORT_STARTED: `${prefix}_EXPORT_STARTED`,
  EXPORT_SUCCESS: `${prefix}_EXPORT_SUCCESS`,
  EXPORT_ERROR: `${prefix}_EXPORT_ERROR`,

  doChangeSelected(payload) {
    return {
      type: tableaudeBoardListActions.SELECTEDS_CHANGED,
      payload,
    };
  },

  doReset: () => async (dispatch) => {
    dispatch({
      type: tableaudeBoardListActions.RESETED,
    });

    dispatch(tableaudeBoardListActions.doFetch());
  },

  doChangePaginationAndSort:
    (pagination, sorter) => async (dispatch, getState) => {
      dispatch({
        type: tableaudeBoardListActions.PAGINATION_CHANGED,
        payload: pagination,
      });

      dispatch({
        type: tableaudeBoardListActions.SORTER_CHANGED,
        payload: sorter,
      });

      dispatch(tableaudeBoardListActions.doFetchCurrentFilter());
    },

  doFetchCurrentFilter: () => async (dispatch, getState) => {
    const filter = selectors.selectFilter(getState());
    const rawFilter = selectors.selectRawFilter(getState());
    dispatch(tableaudeBoardListActions.doFetch(filter, rawFilter, true));
  },

  doFetch:
    (filter?, rawFilter?, keepPagination = false) =>
    async (dispatch, getState) => {
      try {
        dispatch({
          type: tableaudeBoardListActions.FETCH_STARTED,
          payload: { filter, rawFilter, keepPagination },
        });

        const response = await TableaudeBoardService.list(
          filter,
          selectors.selectOrderBy(getState()),
          selectors.selectLimit(getState()),
          selectors.selectOffset(getState())
        );

        dispatch({
          type: tableaudeBoardListActions.FETCH_SUCCESS,
          payload: {
            rows: response.rows,
            count: response.count,
          },
        });
      } catch (error) {
        Errors.handle(error);

        dispatch({
          type: tableaudeBoardListActions.FETCH_ERROR,
        });
      }
    },
};

export default tableaudeBoardListActions;
