import React from "react";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import HeroBanner from "./components/home/HeroBanner/HeroBanner";
import TechCarousel from "./hooks/common/TechCarousel/TechCarousel";
import Intro from "./components/home/Intro/Intro"; // ✅ Ajout de l'import
import DeckProjets from "./components/projets/DeckProjets";

import "./styles/main.scss";
import About from "./components/home/About/About";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <main className="main-content">
        <HeroBanner />
        <TechCarousel />
        <Intro /> {/* ✅ Section intro insérée ici */}
        <TechCarousel />
        <About />
        <TechCarousel />
        <DeckProjets />
        {/* Autres sections (About, Projects...) à venir */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
