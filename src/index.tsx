import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { i18n, init as i18nInit } from "src/i18n";
(async function () {
  await i18nInit();
  const App = require("./App").default;

  ReactDOM.render(<App />, document.getElementById("root"));
})();
// document.getElementsByTagName("html")[0].setAttribute("dir", "rtl");
//Or you can do it where ever you want, base on user selected language, or something else
