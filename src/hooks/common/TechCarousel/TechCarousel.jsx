import React from "react";
import "./TechCarousel.scss";

import HtmlIcon from "../../../assets/icons/html.svg";
import CssIcon from "../../../assets/icons/css.svg";
import ReactIcon from "../../../assets/icons/react.svg";
import GithubIcon from "../../../assets/icons/github.svg";
import GitlabIcon from "../../../assets/icons/gitlab.svg";

const stacks = [
    { type: "icon", name: "html", path: HtmlIcon },
    { type: "icon", name: "css", path: CssIcon },
    { type: "icon", name: "react", path: ReactIcon },
    { type: "text", name: "Vite" },
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
        <section id="carousel-section" className="tech-carousel carousel" aria-label="Technologies utilisées">
            <div className="carousel-track">
                {[...stacks, ...stacks].map((item, i) => (
                    <div key={i} className="carousel-item">
                        {item.type === "icon" ? (
                            <div className="icon">
                                <img src={item.path} alt={item.name} />
                            </div>
                        ) : (
                            <span className="stack-text">{item.name}</span>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default TechCarousel;
