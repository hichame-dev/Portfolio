import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollButton from "../../ScrollButton/ScrollButton";

import "./Intro.scss";

gsap.registerPlugin(ScrollTrigger);

function Intro() {
    const introRef = useRef(null);

    console.log("🔄 Intro component rendering...");

    useEffect(() => {
        console.log("✅ Intro component mounted.");
        const cards = introRef.current.querySelectorAll(".intro-block");
        console.log("🎯 Intro cards found:", cards.length);

        cards.forEach((card, i) => {
            console.log(`🧩 Animate card ${i}`, card);
            gsap.fromTo(
                card,
                { opacity: 0, x: -30, scale: 0.98 },
                {
                    opacity: 1,
                    x: 0,
                    scale: 1,
                    duration: 1.9,
                    ease: "expo.out",
                    delay: i * 0.5,
                    scrollTrigger: {
                        trigger: card,
                        start: "top 93%",
                        toggleActions: "play none none none",
                        once: true,
                    },
                }
            );
        });
    }, []);

    console.log("🖱️ Rendering ScrollButton with props:");
    console.log({
        targetId: "second-carousel",
        className: "intro-scroll"
    });

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

            {/* ✅ Bouton scroll toujours visible */}
            <ScrollButton targetId="second-carousel" className="intro-scroll" />
        </section>
    );
}

export default Intro;
