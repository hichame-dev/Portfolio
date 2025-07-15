import React, { useEffect, useRef } from "react";
import "./Intro.scss";

function Intro() {
    const introRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.3 } // dès que 30% de la carte est visible
        );

        const blocks = introRef.current.querySelectorAll(".intro-block");
        blocks.forEach(block => observer.observe(block));

        return () => observer.disconnect();
    }, []);

    return (
        <section id="intro" className="intro-section" ref={introRef}>
            <div className="container">
                <p className="intro-lead">Chaque détail compte dans l'expérience web.</p>
                <h2 className="intro-title">UN SAVOIR-FAIRE TECHNIQUE</h2>
                <p className="intro-subtitle">Déboguer. Optimiser. Créer.</p>

                <div className="intro-cards">
                    <div className="intro-block">
                        <h3 className="card-title text-accent">SEO</h3>
                        <p className="card-text">Un code clair, balisé et optimisé pour le référencement.</p>
                    </div>

                    <div className="intro-block">
                        <h3 className="card-title text-accent">ACCESSIBILITÉ</h3>
                        <p className="card-text">Des interfaces pensées pour tous les utilisateurs.</p>
                    </div>

                    <div className="intro-block">
                        <h3 className="card-title text-accent">PERFORMANCE</h3>
                        <p className="card-text">Chargement rapide, code optimisé et expériences fluides.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Intro;
