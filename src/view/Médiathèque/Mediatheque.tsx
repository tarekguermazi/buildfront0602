import React from "react";
// COMPONENTS
import Header from "./Header";
import HeroSection from "./HeroSection";
import MegaFooter from "../Layout/MegaFooter";
import Footer from "../Layout/Footer";
import Gallery from "../shared/Gallery";

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

      {/* GALLERY */}
      <Gallery />
      {/* FOOTERS */}
      <MegaFooter />
      <Footer />
    </section>
  );
}

export default Mediatheque;
