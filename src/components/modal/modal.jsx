import React, { useEffect, useRef, useCallback } from "react";
import ReactDOM from "react-dom";
import "./modal.scss";
import { projectImages } from "../../data/projectImages";

function ModalProjet({ project, onClose }) {
    const modalRef = useRef(null);

    const closeWithAnimation = useCallback(() => {
        modalRef.current.classList.add("fade-out");
        setTimeout(onClose, 300);
    }, [onClose]);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                closeWithAnimation();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [closeWithAnimation]);

    // Convertit ton JSON type "optimized/kasa.webp" en clé pour import.meta.glob
    const imgSrc = projectImages[`../assets/${project.image}`];

    return ReactDOM.createPortal(
        <div className="modal-overlay">
            <div className="modal-content" ref={modalRef}>
                <button className="close-button" onClick={closeWithAnimation}>×</button>
                <h2>{project.title}</h2>
                <img src={imgSrc} alt={project.title} />
                <ul className="tech-list">
                    {project.techs.map((tech, i) => (
                        <li key={i}>{tech}</li>
                    ))}
                </ul>
                <div className="modal-links">
                    {project.github && <a className="btn-link" href={project.github} target="_blank" rel="noreferrer">Code</a>}
                    {project.demo && <a className="btn-link" href={project.demo} target="_blank" rel="noreferrer">Démo</a>}
                </div>
            </div>
        </div>,
        document.body
    );
}

export default ModalProjet;
