import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import layout from "src/modules/layout/layoutReducers";
import auth from "src/modules/auth/authReducers";
import publication from "src/modules/publication/publicationReducers";
import demandeAppui from "src/modules/demandeAppui/demandeAppuiReducers";
import categoryPublication from "src/modules/categoryPublication/categoryPublicationReducers";
import categoryEvenement from "src/modules/categoryEvenement/categoryEvenementReducers";
import evenement from "src/modules/evenement/evenementReducers";
import tableaudeBoard from "src/modules/tableaudeBoard/tableaudeBoardReducers";
export default (history) =>
  combineReducers({
    router: connectRouter(history),
    layout,
    auth,
    publication,
    demandeAppui,
    categoryPublication,
    categoryEvenement,
    evenement,
    tableaudeBoard,
  });
