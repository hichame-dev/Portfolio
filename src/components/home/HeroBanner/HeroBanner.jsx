import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./HeroBanner.scss";
import ScrollButton from "../../ScrollButton/ScrollButton";


function HeroBanner() {
    const bannerRef = useRef();

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animation ligne par ligne du slogan
            gsap.from(".domino span", {
                opacity: 0,
                rotateY: 180,
                duration: 0.6,
                stagger: 0.05,
                ease: "back.out(1.7)",
            });

            // Sous-titre en fondu
            gsap.from(".fade-in", {
                opacity: 0,
                y: 20,
                delay: 2.4,
                duration: 1.2,
                ease: "power2.out",
            });

            // Animation du nom
            gsap.from(".reveal-name span", {
                opacity: 0,
                scaleX: -1,
                delay: 3,
                duration: 0.8,
                stagger: 0.06,
                ease: "power3.out",
            });
        }, bannerRef);

        return () => ctx.revert(); // Nettoyage GSAP
    }, []);

    return (
        <section className="hero-banner" ref={bannerRef} aria-label="Section d’introduction">
            <div className="background-static" aria-hidden="true" />
            <div className="overlay" />

            <div className="text-content">
                <h2 className="domino" aria-label="Chaque pixel a un but. Chaque ligne de code une idée.">
                    {"Chaque.pixel.un.but.Chaque.ligne.de.code.une.idée.".split("").map((char, index) => (
                        <span key={index}>{char}</span>
                    ))}
                </h2>

                <p className="fade-in">Créateur d’interface web mobile</p>

                <h1 className="reveal-name" aria-label="Hichame-Dev">
                    {"Hichame-Dev".split("").map((char, index) => (
                        <span key={index}>{char}</span>
                    ))}
                </h1>
            </div>
            <ScrollButton targetId="carousel-section" label="↓ Découvrir les stacks" />

        </section>
    );
}

export default HeroBanner;
