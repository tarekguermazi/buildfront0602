import { createSelector } from 'reselect';

const selectRaw = (state) => state.tableaudeBoard.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const tableaudeBoardViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default tableaudeBoardViewSelectors;
