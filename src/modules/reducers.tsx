import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import auth from "src/modules/auth/authReducers";
import publication from "src/modules/publication/publicationReducers";
import demandeAppui from "src/modules/demandeAppui/demandeAppuiReducers";
export default (history) =>
  combineReducers({
    router: connectRouter(history),
    auth,
    publication,
    demandeAppui,
  });
