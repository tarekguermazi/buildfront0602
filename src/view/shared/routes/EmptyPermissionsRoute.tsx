import PermissionChecker from "src/modules/auth/permissionChecker";
import React from "react";
import { Redirect, Route } from "react-router-dom";
import Layout from "../../Layout/Layout";
import Footer from "../../Layout/Footer";

function EmptyPermissionsRoute({
  component: Component,
  currentTenant,
  currentUser,
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

        if (!permissionChecker.isAuthenticated) {
          return (
            <Redirect
              to={{
                pathname: "/auth/signin",
              }}
            />
          );
        }

        if (!permissionChecker.isEmptyPermissions) {
          return <Redirect to='/' />;
        }

        return (
          <div style={{ minHeight: "100%", overflow: "hidden" }}>
            <Layout>
              <Component {...props} />
            </Layout>
            <Footer />
          </div>
        );
      }}
    />
  );
}

export default EmptyPermissionsRoute;
