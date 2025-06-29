import React, { useEffect, useRef } from "react";
import "./HeroBanner.scss";

function HeroBanner() {
    const bannerRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            const el = bannerRef.current;
            if (el) {
                el.classList.remove("animate");
                void el.offsetWidth; // trick pour forcer le reflow
                el.classList.add("animate");
            }
        }, 10000); // toutes les 10s

        return () => clearInterval(interval);
    }, []);

    return (
        <section
            className="hero-banner animate"
            ref={bannerRef}
            aria-label="Section d’introduction"
        >
            <div className="background-static" aria-hidden="true" />
            <div className="overlay" />

            <div className="text-content">
                <h2 className="domino" aria-label="Chaque pixel a un but. Chaque ligne de code une idée.">
                    {"Chaque.pixel.un.but.Chaque.ligne.de.code.une.idée.".split("").map((char, index) => (
                        <span key={index} style={{ "--i": index }}>{char}</span>
                    ))}
                </h2>

                <p className="fade-in">Créateur d’interface web mobile</p>

                <h1 className="reveal-name" aria-label="Hichame-Dev">
                    {"Hichame-Dev".split("").map((char, index) => (
                        <span key={index} style={{ "--i": index }}>{char}</span>
                    ))}
                </h1>
            </div>
        </section>
    );
}

export default HeroBanner;
