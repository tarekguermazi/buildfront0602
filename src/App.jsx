import { ConnectedRouter } from "connected-react-router";
import "lazysizes";

import { configureStore, getHistory } from "src/modules/store";
import "./App.css";
import { Provider } from "react-redux";
import RoutesComponent from "src/view/shared/routes/RoutesComponent";
import "@fortawesome/fontawesome-free/css/all.min.css";

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
