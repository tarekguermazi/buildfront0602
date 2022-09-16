import PermissionChecker from "src/modules/auth/permissionChecker";
import React from "react";
import { Redirect, Route, useLocation } from "react-router-dom";
import Layout from "src/view/Layout/Layout";

// import config from "src/config";
// import { tenantSubdomain } from "src/modules/tenant/tenantSubdomain";

function PrivateRoute({
  component: Component,
  currentTenant,
  currentUser,
  permissionRequired,
  ...rest
}) {
  const location = useLocation();

  return (
    <Route
      {...rest}
      render={(props) => {
        const permissionChecker = new PermissionChecker(
          currentTenant,
          currentUser
        );

        if (permissionChecker.isEmptyPermissions) {
          return <Redirect to='/auth/empty-permissions' />;
        }
        if (!permissionChecker.isAuthenticated) {
          return (
            <Redirect
              to={{
                pathname: "/auth/signin",
                state: { from: location },
              }}
            />
          );
        }

        return (
          <Layout {...props}>
            <Component {...props} />
          </Layout>
        );
      }}
    />
  );
}

export default PrivateRoute;
