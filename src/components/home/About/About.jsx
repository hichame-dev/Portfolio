import React from "react";
import profilImg from "../../../assets/optimized/profil.webp";
import logoImg from "../../../assets/optimized/favicon.2.webp"; // ton logo au dos
import "./About.scss";

function About() {
    return (
        <section className="about-section" id="about">
            <div className="container">

                {/* Carte qui tourne */}
                <div className="profile-img-container">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={profilImg} alt="Photo de profil" className="profile-img" />
                            </div>
                            <div className="flip-card-back">
                                <img src={logoImg} alt="Mon logo" className="logo-img" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Texte */}
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
