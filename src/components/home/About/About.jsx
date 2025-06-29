import React, { useEffect, useRef } from "react";
import "./About.scss";
import profilImg from "../../../assets/images/profil.webp";

function About() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("in-view");
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className="about-section" id="about" ref={sectionRef}>
            <div className="container">
                <img
                    src={profilImg}
                    alt="Photo de profil"
                    className="profile-img"
                    loading="lazy"
                />
                <div className="text-content">
                    <p className="pre-title">Développeur Front-End</p>
                    <h2 className="intro-lead">Passionné par le web</h2>
                    <h3 className="intro-title">Chaque ligne de code a un but.</h3>
                    <p className="tagline">Créer. Déboguer. Optimiser.</p>
                    <p className="description">
                        J’aime transformer des idées en interfaces performantes et intuitives.
                        Mon objectif est de garantir une expérience utilisateur fluide, rapide et accessible.
                        Le code n’est pas juste du code : c’est une interface entre vous et votre projet.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;
