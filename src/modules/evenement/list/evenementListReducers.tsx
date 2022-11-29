import actions from "src/modules/evenement/list/evenementListActions";

const INITIAL_PAGE_SIZE = 10;

const initialData = {
  rows: [],
  loadingpasse: false,
  evenementpasse: [],
  loadingvenir: false,
  evenementvenir: [],
  count: 0,
  loading: false,
  filter: {},
  rawFilter: {},
  pagination: {
    current: 1,
    pageSize: INITIAL_PAGE_SIZE,
  },
  sorter: {},
  selectedKeys: [],
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

  if (type === actions.FETCH_STARTED_EVENEMENT_PASSE) {
    return {
      ...state,
      loadingpasse: true,
    };
  }

  if (type === actions.FETCH_SUCCESS_EVENEMENT_PASSE) {
    return {
      ...state,
      loadingpasse: false,
      evenementpasse: payload,
    };
  }

  if (type === actions.FETCH_ERROR_EVENEMENT_PASSE) {
    return {
      ...state,
      loadingpasse: false,
      evenementpasse: [],
    };
  }

  if (type === actions.FETCH_STARTED_EVENEMENT_VENIR) {
    return {
      ...state,
      loading: true,
    };
  }

  if (type === actions.FETCH_SUCCESS_EVENEMENT_VENIR) {
    return {
      ...state,
      loadingpasse: false,
      evenementpasse: payload,
    };
  }

  if (type === actions.FETCH_ERROR_EVENEMENT_VENIR) {
    return {
      ...state,
      loadingvenir: false,
      evenementvenir: [],
    };
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
