import React from "react";
import { Link } from "react-router-dom";

function Error500Page() {
  return (
    <div>
      <h2> 500 Désolé, le serveur signale une erreur </h2>
      <div>
        <Link to='/'>
          <h3> Retour </h3>
        </Link>
      </div>
    </div>
  );
}

export default Error500Page;
