import list from "src/modules/tableaudeBoard/list/tableaudeBoardListReducers";
import view from "src/modules/tableaudeBoard/view/tableaudeBoardViewReducers";
import { combineReducers } from "redux";

export default combineReducers({
  list,
  view,
});
