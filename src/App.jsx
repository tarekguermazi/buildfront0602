import { ConnectedRouter } from "connected-react-router";
import "lazysizes";
import "./App.css";
import { configureStore, getHistory } from "src/modules/store";
import { Provider } from "react-redux";
import RoutesComponent from "src/view/shared/routes/RoutesComponent";

const store = configureStore();
const App = (props) => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={getHistory()}>
        <RoutesComponent />
      </ConnectedRouter>
    </Provider>
  );
};

export default App;
