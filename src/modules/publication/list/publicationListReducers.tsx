import actions from "src/modules/publication/list/publicationListActions";

const INITIAL_PAGE_SIZE = 10;

const initialData = {
  rows: [],
  rowsThematique: [],
  loadingthematique: false,
  count: 0,
  loading: false,
  loadingByCategory: false,
  allbyCategory: [],
  loadingpublicationbythematique: false,
  filter: {},
  rawFilter: {},
  pagination: {
    current: 1,
    pageSize: INITIAL_PAGE_SIZE,
  },
  sorter: {},
  selectedKeys: [],
  allbythematique: [],
};

export default (state = initialData, { type, payload }) => {
  if (type === actions.RESETED) {
    return {
      ...initialData,
    };
  }

  if (type === actions.SELECTEDS_CHANGED) {
    return {
      ...state,
      selectedKeys: payload || [],
    };
  }

  if (type === actions.PAGINATION_CHANGED) {
    return {
      ...state,
      pagination: payload || {
        current: 1,
        pageSize: INITIAL_PAGE_SIZE,
      },
    };
  }

  if (type === actions.SORTER_CHANGED) {
    return {
      ...state,
      sorter: payload || {},
    };
  }

  if (type === actions.FETCH_STARTED_THEMATIQUE) {
    return { ...state, loadingthematique: true };
  }
  if (type === actions.FETCH_SUCCESS_THEMATIQUE) {
    return {
      ...state,
      rowsThematique: payload.rows,
      count: payload.count,
      loadingthematique: false,
    };
  }
  if (type === actions.FETCH_ERROR_THEMATIQUE) {
    return { ...state, rowsThematique: [], loadingthematique: false };
  }

  if (type === actions.FETCH_STARTED) {
    return {
      ...state,
      loading: true,
      selectedKeys: [],
      filter: payload ? payload.filter : {},
      rawFilter: payload ? payload.rawFilter : {},
      pagination:
        payload && payload.keepPagination
          ? state.pagination
          : {
              current: 1,
              pageSize: INITIAL_PAGE_SIZE,
            },
    };
  }

  if (type === actions.FETCH_SUCCESS) {
    return {
      ...state,
      loading: false,
      rows: payload.rows,
      count: payload.count,
    };
  }

  if (type === actions.FETCH_ERROR) {
    return {
      ...state,
      loading: false,
      rows: [],
      count: 0,
    };
  }

  if (type === actions.FIND_THEMATIQUE_STARTED) {
    return { ...state, loading: true };
  }
  if (type === actions.FIND_THEMATIQUE_SUCCESS) {
    return { ...state, loading: false, rows: payload };
  }
  if (type === actions.FIND_THEMATIQUE_ERROR) {
    return {
      ...state,
      loading: false,
      rows: [],
    };
  }

  if (type === actions.FETCH_STARTED_BY_CATEGORY) {
    return {
      ...state,
      loadingpublicationbythematique: true,
    };
  }

  if (type === actions.FETCH_SUCCESS_BY_CATEGORY) {
    return {
      ...state,
      loadingByCategory: false,
      allbyCategory: payload,
    };
  }

  if (type === actions.FETCH_ERROR_BY_CATEGORY) {
    return {
      ...state,
      loadingByCategory: false,
      allbyCategory: [],
    };
  }

  if (type === actions.FETCH_STARTED_ALL_PUBLICATION) {
    return {
      ...state,
      loadingpublicationbythematique: true,
    };
  }

  if (type === actions.FETCH_SUCCESS_ALL_PUBLICATION) {
    return {
      ...state,
      loadingpublicationbythematique: false,
      allbythematique: payload,
    };
  }

  if (type === actions.FETCH_ERROR_ALL_PUBLICATION) {
    return {
      ...state,
      loadingpublicationbythematique: false,
      allbythematique: [],
    };
  }

  if (type === actions.EXPORT_STARTED) {
    return {
      ...state,
      exportLoading: true,
    };
  }

  if (type === actions.EXPORT_SUCCESS) {
    return {
      ...state,
      exportLoading: false,
    };
  }

  if (type === actions.EXPORT_ERROR) {
    return {
      ...state,
      exportLoading: false,
    };
  }

  return state;
};
