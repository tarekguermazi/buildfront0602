import { createSelector } from "reselect";

const selectRaw = (state) => state.publication.view;

const selectRecord = createSelector([selectRaw], (raw) => raw.record);
const selectHasRecord = createSelector([selectRecord], (raw) => raw.length > 0);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading)
);

const publicationViewSelectors = {
  selectHasRecord,
  selectLoading,
  selectRecord,
  selectRaw,
};

export default publicationViewSelectors;
