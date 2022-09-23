import React from "react";
import { Route, Redirect } from "react-router-dom";
import PermissionChecker from "../../../modules/auth/permissionChecker";
import Layout from "src/view/Layout/Layout";
function NavigateRoute({
  component: Component,
  currentUser,
  currentTenant,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={(props) => {
        const permissionChecker = new PermissionChecker(
          currentTenant,
          currentUser
        );

        if (
          permissionChecker.isAuthenticated &&
          permissionChecker.isEmptyPermissions
        ) {
          return <Redirect to='/auth/empty-permissions' />;
        }
        return (
          <Layout>
            <Component {...props} />
          </Layout>
        );
      }}
    />
  );
}
export default NavigateRoute;
