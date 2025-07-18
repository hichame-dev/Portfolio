// Import des hooks React
import React, { useEffect, useRef } from "react";

// Import des styles SCSS de la section
import "./Intro.scss";

// Composant Intro
function Intro() {
    // Référence à la section pour cibler les blocs avec Intersection Observer
    const introRef = useRef();

    // Détection de l’entrée des cartes dans le viewport
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible"); // Affiche la carte
                        observer.unobserve(entry.target);     // Stoppe l'observation après affichage
                    }
                });
            },
            { threshold: 0.3 } // Seuil : 30% de visibilité
        );

        // Cible tous les éléments avec la classe .intro-block dans le DOM
        const blocks = introRef.current.querySelectorAll(".intro-block");
        blocks.forEach(block => observer.observe(block));

        // Nettoyage de l’observer lors du démontage du composant
        return () => observer.disconnect();
    }, []);

    return (
        // Section d’introduction avec effet d’apparition progressive des cartes
        <section id="intro" className="intro-section" ref={introRef}>
            <div className="container">
                {/* Texte d’accroche */}
                <p className="intro-lead">Chaque détail compte dans l'expérience web.</p>
                <h2 className="intro-title">UN SAVOIR-FAIRE TECHNIQUE</h2>
                <p className="intro-subtitle">Déboguer. Optimiser. Créer.</p>

                {/* Trois blocs animés (SEO, Accessibilité, Performance) */}
                <div className="intro-cards">
                    <div className="intro-block">
                        <h3 className="card-title text-accent">SEO</h3>
                        <p className="card-text">
                            Un code clair, balisé et optimisé pour le référencement.
                        </p>
                    </div>

                    <div className="intro-block">
                        <h3 className="card-title text-accent">ACCESSIBILITÉ</h3>
                        <p className="card-text">
                            Des interfaces pensées pour tous les utilisateurs.
                        </p>
                    </div>

                    <div className="intro-block">
                        <h3 className="card-title text-accent">PERFORMANCE</h3>
                        <p className="card-text">
                            Chargement rapide, code optimisé et expériences fluides.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default Intro;
