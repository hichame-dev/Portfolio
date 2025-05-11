import React from "react";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import "./styles/main.scss";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <main className="main-content">
        {/* Ajoute ton contenu ici */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
