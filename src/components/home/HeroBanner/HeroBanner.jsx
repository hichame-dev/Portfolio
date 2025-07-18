// Import de React pour utiliser JSX
import React from "react";

// Import des styles SCSS spécifiques à cette bannière
import "./HeroBanner.scss";

// Composant principal de la bannière d'introduction
function HeroBanner() {
    return (
        // Section principale de type "hero", utilisée comme bannière d’accueil
        <section className="hero-banner" aria-label="Section d’introduction">

            {/* Fond statique visuel, décoratif (non accessible) */}
            <div className="background-static" aria-hidden="true" />

            {/* Overlay foncé ou semi-transparent pour améliorer la lisibilité du texte */}
            <div className="overlay" />

            {/* Bloc contenant tous les éléments textuels animés */}
            <div className="text-content">

                {/* Titre animé lettre par lettre (effet visuel "domino") */}
                <h2 className="domino" aria-label="Chaque pixel a un but. Chaque ligne de code une idée.">
                    {
                        // On découpe la phrase en caractères et on les entoure de <span>
                        "Chaque.pixel.un.but.Chaque.ligne.de.code.une.idée.".split("").map((char, index) => (
                            <span key={index}>{char}</span>
                        ))
                    }
                </h2>

                {/* Sous-titre qui s'affiche progressivement (effet fade-in) */}
                <p className="fade-in">Créateur d’interface web mobile</p>

                {/* Nom de marque ou alias (Hichame-Dev), affiché lettre par lettre */}
                <h1 className="reveal-name" aria-label="Hichame-Dev">
                    {
                        "Hichame-Dev".split("").map((char, index) => (
                            <span key={index}>{char}</span>
                        ))
                    }
                </h1>
            </div>
        </section>
    );
}


export default HeroBanner;

