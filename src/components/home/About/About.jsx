import React, { useEffect, useRef } from "react";
import "./About.scss";
import profilImg from "../../../assets/images/profil.webp";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function About() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const el = sectionRef.current;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: el,
                start: "top 75%",
                toggleActions: "play none none none",
                once: true,
            },
        });

        tl.fromTo(
            el.querySelector(".profile-img"),
            {
                opacity: 0,
                x: -80,
                scale: 0.95,
            },
            {
                opacity: 1,
                x: 0,
                scale: 1,
                duration: 1.4,
                ease: "power2.out",
            }
        ).fromTo(
            el.querySelectorAll(".text-content > *"),
            { opacity: 0, y: 40 },
            {
                opacity: 1,
                y: 0,
                duration: 1.2,
                ease: "power2.out",
                stagger: 0.2,
            },
            "-=1" // commence pendant l’image
        );

        return () => tl.scrollTrigger?.kill();
    }, []);

    return (
        <section className="about-section" id="about" ref={sectionRef}>
            <div className="container d-flex flex-column flex-lg-row align-items-start justify-content-center gap-5">
                {/* Image à gauche */}
                <img
                    src={profilImg}
                    alt="Photo de profil"
                    className="profile-img"
                    loading="lazy"
                />

                {/* Texte en haut à droite */}
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
