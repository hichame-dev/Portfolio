import React, { useState, useEffect } from "react";
import "./DeckProjets.scss";
import ModalProjet from "../modal/modal";
import projects from "../../data/Projects.json";
import { projectImages } from "../../data/projectImages";

const DeckProjets = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [modalIndex, setModalIndex] = useState(null);
    const [fade, setFade] = useState(false);

    const handleNext = () => {
        setFade(true);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % projects.length);
            setFade(false);
        }, 400);
    };

    const handleOpenModal = () => {
        setModalIndex(currentIndex);
    };

    const handleCloseModal = () => {
        setModalIndex(null);
    };

    useEffect(() => {
        document.body.style.overflow = modalIndex !== null ? "hidden" : "";
    }, [modalIndex]);

    const project = projects[currentIndex];

    return (
        <section className="deck-section" id="projects">
            <h2 className="section-title">Mes Projets</h2>

            <div
                className={`deck-card ${fade ? "fade-card" : ""}`}
                onClick={handleOpenModal}
                role="button"
                tabIndex={0}
                aria-label={`Voir les détails du projet ${project.title}`}
            >
                <img src={projectImages[`../assets/${project.image}`]} alt={project.title} />
                <h3>{project.title}</h3>
                <ul className="tech-list">
                    {project.techs.map((tech, i) => (
                        <li key={i}>{tech}</li>
                    ))}
                </ul>
            </div>

            {modalIndex === null && (
                <button className="next-button" onClick={handleNext}>Suivant →</button>
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
