// Import de React, des hooks d’état et d’effet
import React, { useState, useEffect } from "react";

// Styles de la section
import "./DeckProjets.scss";

// Composant modale (affiche les détails d’un projet)
import ModalProjet from "../modal/modal";

// Données des projets (JSON) et leurs images associées
import projects from "../../data/Projects.json";
import { projectImages } from "../../data/projectImages";

const DeckProjets = () => {
    // Index du projet affiché en modale (null = aucune modale ouverte)
    const [modalIndex, setModalIndex] = useState(null);

    // Index de la carte affichée (pour mobile uniquement)
    const [currentCard, setCurrentCard] = useState(0);

    // Détection mobile : si la largeur est inférieure à 768px
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    // Écoute du redimensionnement pour mettre à jour le mode mobile/déktop
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Empêche le scroll de la page quand une modale est ouverte
    useEffect(() => {
        document.body.style.overflow = modalIndex !== null ? "hidden" : "";
    }, [modalIndex]);

    // Ouvre la modale pour le projet à l'index donné
    const handleOpenModal = (index) => {
        setModalIndex(index);
    };

    // Ferme la modale
    const handleCloseModal = () => {
        setModalIndex(null);
    };

    // Affiche la carte suivante en mobile (cyclique)
    const handleNextCard = () => {
        setCurrentCard((prev) => (prev + 1) % projects.length);
    };

    return (
        <section className="deck-section" id="projects">
            <h2 className="section-title">Mes Projets</h2>

            {/* Grille de cartes projets */}
            <div className="deck-grid">
                {projects.map((project, index) => {
                    const imgSrc = projectImages[`../assets/images/${project.image}`];

                    // Si mobile : une seule carte active à la fois
                    const isActive = isMobile && index === currentCard;
                    const isInactive = isMobile && index !== currentCard;

                    return (
                        <div
                            key={index}
                            className={`deck-card ${isActive ? "active" : ""} ${isInactive ? "inactive" : ""}`}
                            onClick={() => handleOpenModal(index)}
                            role="button"
                            tabIndex={0}
                            aria-label={`Voir le projet ${project.title}`}
                        >
                            <img src={imgSrc} alt={project.title} loading="lazy" />
                            <h3>{project.title}</h3>
                            <ul className="tech-list">
                                {project.techs.map((tech, i) => (
                                    <li key={i}>{tech}</li>
                                ))}
                            </ul>
                        </div>
                    );
                })}
            </div>

            {/* Bouton "Suivant" visible seulement en mobile */}
            {isMobile && (
                <button className="next-button" onClick={handleNextCard}>
                    Voir suivant
                </button>
            )}

            {/* Modale affichée quand un projet est sélectionné */}
            {modalIndex !== null && (
                <ModalProjet
                    project={projects[modalIndex]}
                    onClose={handleCloseModal}
                />
            )}

            {/* Lien pour accéder à la section contact */}
            <div className="scroll-to-contact">
                <a href="#contact" className="scroll-btn">Me contacter</a>
            </div>
        </section>
    );
};

export default DeckProjets;
