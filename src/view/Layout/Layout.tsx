import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { useRouteMatch } from "react-router-dom";

function Layout(props) {
  const match = useRouteMatch();

  return (
    <div>
      <Header url={match.url} />
      <div>{props.children}</div>
    </div>
  );
}

export default Layout;
