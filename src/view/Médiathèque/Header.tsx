import React from "react";
// COMPONENTS
import BreadCrumbs from "../shared/BreadCrumbs";

export default function Header() {
  return (
    <section>
      <div className='contentContainer'>
        <section className='wideContent'>
          <h1>Médiathèques</h1>
          <BreadCrumbs view='Médiathèques' />
        </section>
      </div>
    </section>
  );
}
