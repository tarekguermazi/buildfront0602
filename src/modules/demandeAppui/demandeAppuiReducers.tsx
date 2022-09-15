import list from "src/modules/demandeAppui/list/demandeAppuiListReducers";
import form from "src/modules/demandeAppui/form/demandeAppuiFormReducers";
import view from "src/modules/demandeAppui/view/demandeAppuiViewReducers";
import destroy from "src/modules/demandeAppui/destroy/demandeAppuiDestroyReducers";
import { combineReducers } from "redux";

export default combineReducers({
  list,
  form,
  view,
  destroy,
});
