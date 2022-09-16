import React from "react";
import { Route, Redirect } from "react-router-dom";
import PermissionChecker from "../../../modules/auth/permissionChecker";
import Layout from "../../Layout/Layout";
function PublicRoute({
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
          currentUser,
          currentTenant
        );
        if (permissionChecker.isAuthenticated) {
          return <Redirect to='/' />;
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
export default PublicRoute;
