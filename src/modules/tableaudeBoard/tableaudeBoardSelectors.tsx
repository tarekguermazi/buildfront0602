import { createSelector } from "reselect";
import authSelectors from "src/modules/auth/authSelectors";
import PermissionChecker from "src/modules/auth/permissionChecker";
import Permissions from "src/security/permissions";

const selectPermissionToRead = createSelector(
  [authSelectors.selectCurrentTenant, authSelectors.selectCurrentUser],
  (currentTenant, currentUser) =>
    new PermissionChecker(currentTenant, currentUser).match(
      Permissions.values.tableaudeBoardRead
    )
);

const selectPermissionToEdit = createSelector(
  [authSelectors.selectCurrentTenant, authSelectors.selectCurrentUser],
  (currentTenant, currentUser) =>
    new PermissionChecker(currentTenant, currentUser).match(
      Permissions.values.tableaudeBoardEdit
    )
);

const selectPermissionToCreate = createSelector(
  [authSelectors.selectCurrentTenant, authSelectors.selectCurrentUser],
  (currentTenant, currentUser) =>
    new PermissionChecker(currentTenant, currentUser).match(
      Permissions.values.tableaudeBoardCreate
    )
);

const selectPermissionToImport = createSelector(
  [authSelectors.selectCurrentTenant, authSelectors.selectCurrentUser],
  (currentTenant, currentUser) =>
    new PermissionChecker(currentTenant, currentUser).match(
      Permissions.values.tableaudeBoardImport
    )
);

const selectPermissionToDestroy = createSelector(
  [authSelectors.selectCurrentTenant, authSelectors.selectCurrentUser],
  (currentTenant, currentUser) =>
    new PermissionChecker(currentTenant, currentUser).match(
      Permissions.values.tableaudeBoardDestroy
    )
);

const tableaudeBoardSelectors = {
  selectPermissionToRead,
  selectPermissionToEdit,
  selectPermissionToCreate,
  selectPermissionToDestroy,
  selectPermissionToImport,
};

export default tableaudeBoardSelectors;
