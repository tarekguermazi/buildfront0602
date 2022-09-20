import React from "react";
// COMPONENTS
import Header from "./Header";
import Filter from "./Filter";
import GloassaireList from "./GloassaireList";

function Glossaire() {
  return (
    <div className='app__contenu'>
      <section className='contenu'>
        <Header />
        <Filter />
        <GloassaireList />
      </section>
    </div>
  );
}

export default Glossaire;
