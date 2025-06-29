import React, { useEffect, useRef } from "react";
import { useLottie } from "lottie-react";
import ScrollButton from "../../ScrollButton/ScrollButton";

import seoAnimation from "../../../assets/lotties/seo.json";
import accessibiliteAnimation from "../../../assets/lotties/accessibilite.json";
import performanceAnimation from "../../../assets/lotties/performance.json";

import "./Intro.scss";

function IntroCard({ animationData, title, text, delay }) {
    const options = { animationData, loop: true, autoplay: true };
    const { View } = useLottie(options);

    return (
        <div
            className="intro-block"
            style={{ "--delay": `${delay}s` }}
        >
            <div className="lottie-wrapper">
                {View}
            </div>
            <h3 className="card-title text-accent">{title}</h3>
            <p className="card-text">{text}</p>
        </div>
    );
}

export default function Intro() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("in-view");
                    }
                });
            },
            { threshold: 0.2 }
        );

        const blocks = sectionRef.current.querySelectorAll(".intro-block");
        blocks.forEach(block => observer.observe(block));

        return () => observer.disconnect();
    }, []);

    const cardsData = [
        {
            title: "SEO",
            text: "Un code clair, balisé et optimisé pour le référencement.",
            animation: seoAnimation,
            delay: 0.3,
        },
        {
            title: "ACCESSIBILITÉ",
            text: "Des interfaces pensées pour tous les utilisateurs.",
            animation: accessibiliteAnimation,
            delay: 0.6,
        },
        {
            title: "PERFORMANCE",
            text: "Chargement rapide, code optimisé et expériences fluides.",
            animation: performanceAnimation,
            delay: 0.9,
        },
    ];

    return (
        <section id="intro" className="intro-section" ref={sectionRef}>
            <div className="container">
                <p className="intro-lead">Chaque détail compte dans l'expérience web.</p>
                <h2 className="intro-title">UN SAVOIR-FAIRE TECHNIQUE</h2>
                <p className="intro-subtitle">Déboguer. Optimiser. Créer.</p>

                <div className="intro-cards">
                    {cardsData.map((card, idx) => (
                        <IntroCard
                            key={idx}
                            animationData={card.animation}
                            title={card.title}
                            text={card.text}
                            delay={card.delay}
                        />
                    ))}
                </div>
            </div>

            <ScrollButton targetId="second-carousel" className="intro-scroll" />
        </section>
    );
}
