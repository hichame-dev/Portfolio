import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./modal.scss";
import { projectImages } from "../../data/projectImages";

function ModalProjet({ project, onClose }) {
    const modalRef = useRef(null);

    useEffect(() => {
        const el = modalRef.current;
        el.classList.add("show");

        const handleClickOutside = (e) => {
            if (el && !el.contains(e.target)) {
                el.classList.remove("show");
                el.classList.add("hide");
                setTimeout(onClose, 300); // durée à synchroniser avec ton CSS
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [onClose]);

    const handleClose = () => {
        const el = modalRef.current;
        el.classList.remove("show");
        el.classList.add("hide");
        setTimeout(onClose, 300);
    };

    const modalContent = (
        <div className="modal-overlay">
            <div className="modal-content" ref={modalRef}>
                <button className="close-button" onClick={handleClose}>×</button>
                <h2>{project.title}</h2>
                <img src={projectImages[project.image]} alt={project.title} />
                <ul className="tech-list">
                    {project.techs.map((tech, i) => (
                        <li key={i}>{tech}</li>
                    ))}
                </ul>
                <div className="modal-links">
                    <a className="btn-link" href={project.github} target="_blank" rel="noreferrer">Code</a>
                    <a className="btn-link" href={project.demo} target="_blank" rel="noreferrer">Démo</a>
                </div>
            </div>
        </div>
    );

    return ReactDOM.createPortal(modalContent, document.body);
}

export default ModalProjet;
