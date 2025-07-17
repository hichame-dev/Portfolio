import React, { useState, useEffect } from "react";
import "./DeckProjets.scss";
import ModalProjet from "../modal/modal";
import projects from "../../data/Projects.json";
import { projectImages } from "../../data/projectImages";

const DeckProjets = () => {
    const [modalIndex, setModalIndex] = useState(null);
    const [currentCard, setCurrentCard] = useState(0);

    // Pour détecter si on est en mobile
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        document.body.style.overflow = modalIndex !== null ? "hidden" : "";
    }, [modalIndex]);

    const handleOpenModal = (index) => {
        setModalIndex(index);
    };

    const handleCloseModal = () => {
        setModalIndex(null);
    };

    const handleNextCard = () => {
        setCurrentCard((prev) => (prev + 1) % projects.length);
    };

    return (
        <section className="deck-section" id="projects">
            <h2 className="section-title">Mes Projets</h2>

            <div className="deck-grid">
                {projects.map((project, index) => {
                    const imgSrc = projectImages[`../assets/images/${project.image}`];

                    // Ajout des classes actives/inactives en mobile
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

            {/* Bouton "Suivant" visible uniquement en mobile */}
            {isMobile && (
                <button className="next-button" onClick={handleNextCard}>
                    Voir suivant
                </button>
            )}

            {modalIndex !== null && (
                <ModalProjet project={projects[modalIndex]} onClose={handleCloseModal} />
            )}

            <div className="scroll-to-contact">
                <a href="#contact" className="scroll-btn">Me contacter</a>
            </div>
        </section>
    );
};

export default DeckProjets;
