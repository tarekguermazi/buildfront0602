import { ConnectedRouter } from "connected-react-router";
import "lazysizes";
import "./App.css";
import { configureStore, getHistory } from "src/modules/store";
import { Provider } from "react-redux";
import RoutesComponent from "src/view/shared/routes/RoutesComponent";
import TenantService from "src/modules/Tenant/TenantService";

const store = configureStore();
const App = (props) => {
  TenantService.getTenants().then((res) => {
    localStorage.setItem("tenant", JSON.stringify(res.rows[0]));
  });

  return (
    <Provider store={store}>
      <ConnectedRouter history={getHistory()}>
        <RoutesComponent />
      </ConnectedRouter>
    </Provider>
  );
};

export default App;
