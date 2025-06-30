import React from "react";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import HeroBanner from "./components/home/HeroBanner/HeroBanner";
import TechCarousel from "./hooks/common/TechCarousel/TechCarousel";
import Intro from "./components/home/Intro/Intro";
import DeckProjets from "./components/projets/DeckProjets";
import Contact from "./components/contact/contact";

import About from "./components/home/About/About";
import "./styles/main.scss";

function App() {


  return (
    <div className="app-wrapper">
      <Header />
      <main className="main-content">
        <HeroBanner />

        {/* ✅ On remplace la section par un div pour éviter le padding */}
        <div id="first-carousel">
          <TechCarousel />
        </div>

        <Intro />
        <div id="second-carousel">
          <TechCarousel />
          <About />
          <TechCarousel />
          <DeckProjets />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
