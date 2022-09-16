import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { useRouteMatch } from "react-router-dom";

function Layout(props) {
  const match = useRouteMatch();

  return (
    <div style={{ minHeight: `calc(100vh - 52px)` }}>
      <Header url={match.url} />
      <div>{props.children}</div>
    </div>
  );
}

export default Layout;
