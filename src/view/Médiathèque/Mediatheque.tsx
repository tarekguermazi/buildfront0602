import React from "react";
// COMPONENTS
import Header from "./Header";
import HeroSection from "./HeroSection";
import MegaFooter from "../Layout/MegaFooter";
import Footer from "../Layout/Footer";

function Mediatheque() {
  return (
    <section>

      <div className='app__contenu'>
        <section className='wideContent'>
          <Header />
        </section>
      </div>
      <HeroSection />
      {/* MAIN GRID... */}
      <MegaFooter />
      <Footer />
    </section>
  );
}

export default Mediatheque;
