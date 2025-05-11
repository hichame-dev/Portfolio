// import React from "react";
// import { ReactComponent as HtmlIcon } from "../../assets/icons/html.svg";
// import { ReactComponent as CssIcon } from "../../assets/icons/css.svg";
// import { ReactComponent as ReactIcon } from "../../assets/icons/react.svg";
// import { ReactComponent as GithubIcon } from "../../assets/icons/github.svg";
// import { ReactComponent as GitlabIcon } from "../../assets/icons/gitlab.svg";
// import { ReactComponent as SassIcon } from "../../assets/icons/sass.svg";
// import { ReactComponent as GitIcon } from "../../assets/icons/git.svg";
// import { ReactComponent as ViteIcon } from "../../assets/icons/vite.svg";  // Assure-toi d'importer ViteIcon ici
// import "./TechCarousel.scss";

// const stacks = [
//     { type: "icon", name: "html", path: HtmlIcon },
//     { type: "icon", name: "css", path: CssIcon },
//     { type: "icon", name: "react", path: ReactIcon },
//     { type: "text", name: "GSAP" },
//     { type: "icon", name: "vite", path: ViteIcon },  // Ajoute ViteIcon ici
//     { type: "text", name: "API REST" },
//     { type: "icon", name: "github", path: GithubIcon },
//     { type: "icon", name: "gitlab", path: GitlabIcon },
//     { type: "text", name: "Swagger" },
//     { type: "text", name: "Redux" },
//     { type: "text", name: "MongoDB" },
//     { type: "icon", name: "git", path: GitIcon },
//     { type: "icon", name: "sass", path: SassIcon },
//     { type: "text", name: "Node.js" },
//     { type: "text", name: "Express" },
//     { type: "text", name: "Postman" },
// ];

// function TechCarousel() {
//     return (
//         <section className="tech-carousel" aria-label="Technologies utilisées">
//             <div className="carousel-track">
//                 {stacks.map((item, index) => (
//                     <div key={index} className="carousel-item">
//                         {item.type === "icon" ? (
//                             <div className="icon">
//                                 <img src={item.path} alt={item.name} />
//                             </div>
//                         ) : (
//                             <span className="stack-text">{item.name}</span>
//                         )}
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// }

// export default TechCarousel;
