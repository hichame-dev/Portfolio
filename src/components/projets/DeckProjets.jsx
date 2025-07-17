import React, { useState, useEffect } from "react";
import "./DeckProjets.scss";
import ModalProjet from "../modal/modal";
import projects from "../../data/Projects.json";
import { projectImages } from "../../data/projectImages";

const DeckProjets = () => {
    const [modalIndex, setModalIndex] = useState(null);

    const handleOpenModal = (index) => {
        setModalIndex(index);
    };

    const handleCloseModal = () => {
        setModalIndex(null);
    };

    useEffect(() => {
        document.body.style.overflow = modalIndex !== null ? "hidden" : "";
    }, [modalIndex]);

    return (
        <section className="deck-section" id="projects">
            <h2 className="section-title">Mes Projets</h2>

            <div className="deck-grid">
                {projects.map((project, index) => {
                    const imgSrc = projectImages[`../assets/images/${project.image}`];
                    return (
                        <div
                            key={index}
                            className="deck-card"
                            onClick={() => handleOpenModal(index)}
                            role="button"
                            tabIndex={0}
                            aria-label={`Voir le projet ${project.title}`}
                        >
                            <img
                                src={imgSrc}
                                alt={project.title}
                                loading="lazy"
                                width="400"
                                height="300"
                            />
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
