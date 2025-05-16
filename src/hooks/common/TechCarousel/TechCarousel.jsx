import React, { useEffect, useRef } from "react";
import gsap from "gsap";

import HtmlIcon from "../../../assets/icons/html.svg";
import CssIcon from "../../../assets/icons/css.svg";
import ReactIcon from "../../../assets/icons/react.svg";
import GithubIcon from "../../../assets/icons/github.svg";
import GitlabIcon from "../../../assets/icons/gitlab.svg";




import "./TechCarousel.scss";

const stacks = [
    { type: "icon", name: "html", path: HtmlIcon },
    { type: "icon", name: "css", path: CssIcon },
    { type: "icon", name: "react", path: ReactIcon },
    { type: "text", name: "GSAP" },
    { type: "text", name: "vite", },
    { type: "text", name: "API REST" },
    { type: "icon", name: "github", path: GithubIcon },
    { type: "icon", name: "gitlab", path: GitlabIcon },
    { type: "text", name: "Swagger" },
    { type: "text", name: "Redux" },
    { type: "text", name: "MongoDB" },
    
    { type: "text", name: "sass",},
    { type: "text", name: "Node.js" },
    { type: "text", name: "Express" },
    { type: "text", name: "Postman" },
];

function TechCarousel() {
    const trackRef = useRef();

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(trackRef.current, {
                xPercent: -50,
                repeat: -1,
                ease: "linear",
                duration: 30,
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <section id="carousel-section" className="tech-carousel carousel" aria-label="Technologies utilisées">


            <div className="carousel-track" ref={trackRef}>
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
