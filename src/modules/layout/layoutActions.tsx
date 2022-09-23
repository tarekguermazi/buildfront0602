import { setLanguageCode } from 'src/i18n';

const prefix = 'LAYOUT';

const layoutActions = {
  MENU_TOGGLE: `${prefix}_MENU_TOGGLE`,
  MENU_HIDE: `${prefix}_MENU_HIDE`,
  MENU_SHOW: `${prefix}_MENU_SHOW`,



  SIDE_HIDE: `${prefix}_SIDE_HIDE`,
  SIDE_SHOW: `${prefix}_SIDE_SHOW`,




  doChangeLanguage: (language) => {
    setLanguageCode(language);

    /**
     * I18n is outside Redux store,
     * no we need this hack to load it properly
     */
    window.location.reload();
  },

  doToggleMenu: () => {
    return {
      type: layoutActions.MENU_TOGGLE,
    };
  },

  doShowMenu: () => {
    return {
      type: layoutActions.MENU_SHOW,
    };
  },

  doHideMenu: () => {
    return {
      type: layoutActions.MENU_HIDE,
    };
  },
// fixingMenu
  doActivesideMenue:(index)=>{
    return {
      type: layoutActions.SIDE_SHOW,
      payload:index
    };
  }
};

export default layoutActions;
