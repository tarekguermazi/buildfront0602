import React from "react";
import Header from "./Header";
import { useRouteMatch } from "react-router-dom";
import { getLanguages, getLanguageCode } from "src/i18n";

function Layout(props) {
  const match = useRouteMatch();
  // function setPageDirection() {
  //   const dir = getLanguageCode().includes("ar") ? "rtl" : "ltr";
  //   document.documentElement.dir = dir;
  // }
  // setPageDirection();

  return (
    <div style={{ minHeight: `calc(100vh - 394px)` }}>
      <Header url={match.url} />
      <div>{props.children}</div>
    </div>
  );
}

export default Layout;
