import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import PermissionChecker from "../../../modules/auth/permissionChecker";
import Layout from "src/view/Layout/Layout";
import Footer from "../../Layout/Footer";

function NavigateRoute({
  component: Component,
  currentUser,
  currentTenant,
  ...rest
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
          <div style={{ minHeight: "100%" }}>
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
export default NavigateRoute;
