import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';

const selectRaw = (state) => state.layout;

const selectMenuVisible = createSelector(
  [selectRaw],
  (layout) => Boolean(layout.menuVisible),
);

const selectLoading = createSelector(
  [selectRaw],
  (layout) => Boolean(layout.loading),
);

const selectLanguage = createSelector(
  [selectRaw],
  (layout) => layout.language,
);
// fixingMenu
const activeId = createSelector(
  [selectRaw],
  (layout) => layout.show,
);

const layoutSelectors = {
  selectRaw,
  selectMenuVisible,
  selectLoading,
  selectLanguage,
  activeId
};

export default layoutSelectors;
