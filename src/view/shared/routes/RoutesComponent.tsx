import React, { useRef, useEffect } from "react";
import routes from "src/view/routes";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import CustomLoadable from "../CustomLoadable";
import { useSelector } from "react-redux";
import authSelectors from "src/modules/auth/authSelectors";
import ProgressBar from "src/view/shared/ProgressBar";
import NavigateRoute from "./NavigateRoute";
import EmptyPermissionsRoute from "./EmptyPermissionsRoute";
function RoutesComponent(props) {
  const isInitialMount = useRef(true);
  const currentUser = useSelector(authSelectors.selectCurrentUser);
  const currentTenant = useSelector(authSelectors.selectCurrentTenant);
  const authLoading = useSelector(authSelectors.selectLoadingInit);
  const loading = authLoading;
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      ProgressBar.start();
      return;
    }
    if (!loading) {
      ProgressBar.done();
    }
  }, [loading]);
  if (loading) {
    return <div />;
  }
  return (
    <Switch>
      {routes.navigateRoutes.map((route) => (
        <NavigateRoute
          exact
          key={route.path}
          path={route.path}
          currentUser={currentUser}
          currentTenant={currentTenant}
          component={CustomLoadable({ loader: route.loader })}
        />
      ))}
      {routes.publicRoutes.map((route) => (
        <PublicRoute
          exact
          key={route.path}
          path={route.path}
          currentUser={currentUser}
          currentTenant={currentTenant}
          component={CustomLoadable({ loader: route.loader })}
        />
      ))}
      {routes.emptyPermissionsRoutes.map((route) => (
        <EmptyPermissionsRoute
          key={route.path}
          exact
          path={route.path}
          currentUser={currentUser}
          currentTenant={currentTenant}
          component={CustomLoadable({
            loader: route.loader,
          })}
        />
      ))}

      {routes.privateRoutes.map((route) => (
        <PrivateRoute
          exact
          key={route.path}
          path={route.path}
          currentUser={currentUser}
          currentTenant={currentTenant}
          permissionRequired={route.permissionRequired}
          component={CustomLoadable({ loader: route.loader })}
        />
      ))}
      {routes.simpleRoutes.map((route) => (
        <Route
          key={route.path}
          exact
          path={route.path}
          component={CustomLoadable({
            loader: route.loader,
          })}
        />
      ))}
    </Switch>
  );
}
export default RoutesComponent;
