import actions from 'src/modules/layout/layoutActions';
import { getLanguageCode } from 'src/i18n';

const initialData = {
  menuVisible: true,
  language: getLanguageCode(),
  loading: false,
  show:0
};

export default (state = initialData, { type, payload }) => {
  if (type === actions.MENU_TOGGLE) {
    return {
      ...state,
      menuVisible: !state.menuVisible,
    };
  }

  if (type === actions.MENU_SHOW) {
    return {
      ...state,
      menuVisible: true,
    };
  }

  if (type === actions.MENU_HIDE) {
    return {
      ...state,
      menuVisible: false,
    };
  }

  if (type === actions.SIDE_SHOW) {
    return {
      ...state,
      show: payload,
    };
  }

  return state;
};
