import TableaudeBoardService from 'src/modules/tableaudeBoard/tableaudeBoardService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'TABLEAUDEBOARD_VIEW';

const tableaudeBoardViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: tableaudeBoardViewActions.FIND_STARTED,
      });

      const record = await TableaudeBoardService.find(id);

      dispatch({
        type: tableaudeBoardViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: tableaudeBoardViewActions.FIND_ERROR,
      });

      getHistory().push('/tableaude-board');
    }
  },
};

export default tableaudeBoardViewActions;
