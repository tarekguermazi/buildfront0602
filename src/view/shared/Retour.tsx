import React from "react";
import { i18n } from "src/i18n";

function Retour() {
  const Currentlangue = localStorage.getItem("language");

  const checkLanguage = () => {
    if (Currentlangue === "fr" || Currentlangue === "en") {
      return (
        <>
          <i className='fa-solid fa-arrow-left'></i> {i18n("common.retour")}{" "}
        </>
      );
    }
    if (Currentlangue === "ar") {
      return (
        <>
          {i18n("common.retour")} <i className='fa-solid fa-arrow-left'></i>
        </>
      );
    }
  };

  return <div className='retour'>{checkLanguage()}</div>;
}

export default Retour;
