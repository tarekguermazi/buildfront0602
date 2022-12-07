import React from "react";
import { i18n } from "src/i18n";

function Contenu() {
  return (
    <div className='app__contenu'>
      <div className='contenu'>
        <div className='archieve__header'>
          <h2>{i18n("menu.suggerer_des_donnees")}</h2>
          <div className='communiquer__bar'></div>
        </div>
      </div>
    </div>
  );
}

export default Contenu;
