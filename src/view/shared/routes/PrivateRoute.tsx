import PermissionChecker from "src/modules/auth/permissionChecker";
import React from "react";
import { Redirect, Route, useLocation } from "react-router-dom";
import Layout from "src/view/Layout/Layout";
import Footer from "../../Layout/CopyWrite";

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
  const permissionChecker = new PermissionChecker(
    JSON.parse(currentTenant),
    currentUser
  );

  return (
    <Route
      {...rest}
      render={(props) => {
        const permissionChecker = new PermissionChecker(
          JSON.parse(currentTenant),
          currentUser
        );

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
        if (permissionChecker.isEmptyPermissions) {
          return <Redirect to="/auth/empty-permissions" />;
        }
        if (!permissionChecker.match(permissionRequired)) {
          return <Redirect to="/403" />;
        }
        return (
          <div style={{ minHeight: "100%" }}>
            <Layout {...props}>
              <Component {...props} />
            </Layout>
            <Footer />
          </div>
        );
      }}
    />
  );
}

export default PrivateRoute;
