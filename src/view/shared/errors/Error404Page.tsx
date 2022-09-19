import React from "react";
import { Link } from "react-router-dom";

function Error404Page() {
  return (
    <div>
      <h2> 404 Désolé, la page que vous avez visitée n'existe pas </h2>
      <div>
        <Link to='/'>
          <h3> Retour </h3>
        </Link>
      </div>
    </div>
  );
}

export default Error404Page;
