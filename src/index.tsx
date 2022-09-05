import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
(async function () {
  const App = require("./App").default;

  ReactDOM.render(<App />, document.getElementById("root"));
})();
