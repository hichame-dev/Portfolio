// Import de React
import React from "react";

// Import du fichier de styles associé
import "./TechCarousel.scss";

// Import des icônes SVG pour certaines technologies
import HtmlIcon from "../../../assets/icons/html.svg";
import CssIcon from "../../../assets/icons/css.svg";
import ReactIcon from "../../../assets/icons/react.svg";
import GithubIcon from "../../../assets/icons/github.svg";
import GitlabIcon from "../../../assets/icons/gitlab.svg";

// Définition du tableau des technologies à afficher dans le carrousel
const stacks = [
    { type: "icon", name: "html", path: HtmlIcon },   // Icône HTML
    { type: "icon", name: "css", path: CssIcon },     // Icône CSS
    { type: "icon", name: "react", path: ReactIcon }, // Icône React
    { type: "text", name: "Vite" },                   // Texte simple (pas d'icône)
    { type: "text", name: "API REST" },
    { type: "icon", name: "github", path: GithubIcon },
    { type: "icon", name: "gitlab", path: GitlabIcon },
    { type: "text", name: "Swagger" },
    { type: "text", name: "Redux" },
    { type: "text", name: "MongoDB" },
    { type: "text", name: "Sass" },
    { type: "text", name: "Node.js" },
    { type: "text", name: "Express" },
    { type: "text", name: "Postman" },
    { type: "text", name: "LinkedIn" }
];
function TechCarousel() {
    return (
        <section
            id="carousel-section"
            className="tech-carousel carousel"
            aria-label="Technologies utilisées"
        >
            <div className="carousel-track">
                {/* On double le tableau pour créer un effet de carrousel infini */}
                {[...stacks, ...stacks].map((item, i) => (
                    <div key={i} className="carousel-item">
                        {/* Si l'item est une icône, on affiche une image */}
                        {item.type === "icon" ? (
                            <div className="icon">
                                <img src={item.path} alt={item.name} />
                            </div>
                        ) : (
                            // Sinon on affiche simplement le nom en texte
                            <span className="stack-text">{item.name}</span>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default TechCarousel;
