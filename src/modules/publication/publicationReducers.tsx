import list from "src/modules/publication/list/publicationListReducers";
import form from "src/modules/publication/form/publicationFormReducers";
import view from "src/modules/publication/view/publicationViewReducers";
import { combineReducers } from "redux";

export default combineReducers({
  list,
  form,
  view,
});
