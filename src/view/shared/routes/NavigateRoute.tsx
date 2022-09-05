import React from "react";
import { Route, Redirect } from "react-router-dom";
import PermissionChecker from "../../../modules/auth/permissionChecker";
import Layout from "../../Layout/Layout";
function NavigateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
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
