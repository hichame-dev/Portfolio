import React, { useEffect, useRef, useCallback } from "react";
import ReactDOM from "react-dom";
import "./modal.scss";
import gsap from "gsap";
import { projectImages } from "../../data/projectImages"; // ✅

function ModalProjet({ project, onClose }) {
    const modalRef = useRef(null);

    const closeWithAnimation = useCallback(() => {
        gsap.to(modalRef.current, {
            scale: 0.9,
            opacity: 0,
            duration: 0.3,
            ease: "power1.in",
            onComplete: onClose,
        });
    }, [onClose]);

    useEffect(() => {
        gsap.fromTo(
            modalRef.current,
            { scale: 0.9, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.4, ease: "power2.out" }
        );

        const handleClickOutside = (e) => {
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                closeWithAnimation();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [closeWithAnimation]);

    const modalContent = (
        <div className="modal-overlay">
            <div className="modal-content" ref={modalRef}>
                <button className="close-button" onClick={closeWithAnimation}>×</button>
                <h2>{project.title}</h2>
                <img src={projectImages[project.image]} alt={project.title} /> {/* ✅ image dynamique */}
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
