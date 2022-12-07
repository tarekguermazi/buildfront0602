import list from "src/modules/evenement/list/evenementListReducers";
import form from "src/modules/evenement/form/evenementFormReducers";
import view from "src/modules/evenement/view/evenementViewReducers";
import { combineReducers } from "redux";

export default combineReducers({
  list,
  form,
  view,
});
