import React, { useState, useRef, useEffect } from "react";
import "./DeckProjets.scss";
import ModalProjet from "../modal/modal";
import projects from "../../data/Projects.json";
import { projectImages } from "../../data/projectImages";

const DeckProjets = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [modalIndex, setModalIndex] = useState(null);
    const [isFlipping, setIsFlipping] = useState(false);
    const cardRef = useRef(null);

    const handleNext = () => {
        if (isFlipping) return;
        setIsFlipping(true);

        const el = cardRef.current;
        el.classList.add("flip-out");

        // Change le contenu pendant que ça tourne (au milieu du flip)
        setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % projects.length);
        }, 400);

        // Ramène le flip
        setTimeout(() => {
            el.classList.remove("flip-out");
            el.classList.add("flip-in");
        }, 500);

        // Fin de l'animation
        setTimeout(() => {
            el.classList.remove("flip-in");
            setIsFlipping(false);
        }, 1000);
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
                className="deck-card"
                ref={cardRef}
                onClick={handleOpenModal}
                role="button"
                tabIndex={0}
                aria-label={`Voir les détails du projet ${project.title}`}
            >
                <img src={projectImages[project.image]} alt={project.title} />
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
