// Import de React et des hooks nécessaires
import React, { useEffect, useRef, useCallback } from "react";

// Permet de rendre le composant dans une autre partie du DOM (hors de la hiérarchie classique)
import ReactDOM from "react-dom";

// Import des styles spécifiques à la modale
import "./modal.scss";

// Import dynamique des images grâce à Vite
import { projectImages } from "../../data/projectImages";

/**
 * Composant ModalProjet
 * @param {Object} project - Objet contenant les infos du projet (title, image, techs, github, demo)
 * @param {Function} onClose - Fonction de fermeture appelée quand on clique en dehors ou sur la croix
 */
function ModalProjet({ project, onClose }) {
    const modalRef = useRef(null); // Référence au DOM de la modale (pour gérer le clic extérieur)

    /**
     * Fonction pour fermer la modale avec une petite animation CSS (fade-out)
     * Utilisation de useCallback pour éviter les recréations inutiles
     */
    const closeWithAnimation = useCallback(() => {
        if (!modalRef.current) return;
        modalRef.current.classList.add("fade-out");
        setTimeout(onClose, 300); // Fermeture réelle après animation
    }, [onClose]);

    /**
     * Hook qui écoute les clics extérieurs à la modale
     * Si on clique hors du contenu, on ferme la modale
     */
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                closeWithAnimation();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [closeWithAnimation]);

    // Récupération de l’image dynamique via le nom dans le JSON (mapping automatique Vite)
    const imgSrc = projectImages[`../assets/images/${project.image}`];

    /**
     * Rendu du composant dans un React Portal :
     * Cela permet d'injecter la modale **directement dans le <body>**, en dehors du flow normal de React
     */
    return ReactDOM.createPortal(
        <div className="modal-overlay">
            <div className="modal-content" ref={modalRef}>

                {/* Bouton de fermeture */}
                <button className="close-button" onClick={closeWithAnimation}>×</button>

                {/* Titre du projet */}
                <h2>{project.title}</h2>

                {/* Image responsive avec optimisations de performance */}
                <img
                    src={imgSrc}
                    srcSet={`${imgSrc} 400w, ${imgSrc} 800w`}
                    sizes="(max-width: 600px) 400px, 800px"
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    width="400"
                    height="300"
                />

                {/* Liste des technologies utilisées */}
                <ul className="tech-list">
                    {project.techs.map((tech, i) => (
                        <li key={i}>{tech}</li>
                    ))}
                </ul>

                {/* Boutons vers GitHub et la démo, si présents */}
                <div className="modal-links">
                    {project.github && (
                        <a className="btn-link" href={project.github} target="_blank" rel="noreferrer">
                            Code
                        </a>
                    )}
                    {project.demo && (
                        <a className="btn-link" href={project.demo} target="_blank" rel="noreferrer">
                            Démo
                        </a>
                    )}
                </div>
            </div>
        </div>,

        // Destination de l'injection : directement dans le <body> pour s'afficher par-dessus toute la page
        document.body
    );
}

export default ModalProjet;
