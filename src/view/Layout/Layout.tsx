import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { useRouteMatch } from "react-router-dom";

function Layout(props) {
  const match = useRouteMatch();

  return (
    <div style={{ position: "relative" }}>
      <Header url={match.url} />
      <div style={{ height: "max-content" }}>{props.children}</div>
    </div>
  );
}

export default Layout;
