import React from "react";
import { Link } from "react-router-dom";
function Error403Page() {
  return (
    <div>
      <h2> 403 Désolé, vous n'avez pas accès à cette page </h2>
      <div>
        <Link to='/'>
          <h3> Retour </h3>
        </Link>
      </div>
    </div>
  );
}

export default Error403Page;
