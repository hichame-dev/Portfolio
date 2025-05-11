import React from "react";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import HeroBanner from "./components/home/HeroBanner/HeroBanner";
// import TechCarousel from "./hooks/TechCarousel/TechCarousel";

import "./styles/main.scss";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <main className="main-content">
        <HeroBanner />
        {/* <TechCarousel /> */}

        {/* Exemple de prochaine section */}
        {/* <About /> */}
        {/* <TechCarousel /> */}

        {/* <Projects /> */}
        {/* <TechCarousel /> */}

        {/* <Contact /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
