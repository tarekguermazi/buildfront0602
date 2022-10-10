import React from "react";
// COMPONENTS
import Header from "./Header";
import HeroSection from "./HeroSection";
import MainGridLayout from "./styles/MainGridLayout";
import MegaFooter from "../Layout/MegaFooter";
import Footer from "../Layout/Footer";
import Gallery from "../shared/Gallery";

function Mediatheque() {
  return (
    <section>
      <Header />
      <HeroSection />
      <MainGridLayout />
      <Gallery />
      {/* <MegaFooter />
      <Footer /> */}
    </section>
  );
}

export default Mediatheque;
