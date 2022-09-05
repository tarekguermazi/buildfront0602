import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import auth from "src/modules/auth/authReducers";
export default (history) =>
  combineReducers({
    router: connectRouter(history),
    auth,
  });
