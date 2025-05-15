// Hook pour snap automatiquement sur chaque carrousel pendant le scroll
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Active ScrollTrigger pour GSAP
gsap.registerPlugin(ScrollTrigger);

const useSnapToCarousels = () => {
    useEffect(() => {
        const carousels = document.querySelectorAll(".carousel");

        carousels.forEach((el) => {
            ScrollTrigger.create({
                trigger: el,
                start: "top 75%", // ✅ déclenche le snap quand le carrousel arrive à 75% de la hauteur écran
                end: "bottom top",
                snap: {
                    snapTo: 0,
                    duration: 0.5,
                    delay: 0.1,
                    ease: "power1.inOut",
                },
                // markers: true, // 🔍 utile en debug si tu veux voir les repères
            });
        });

        return () => ScrollTrigger.getAll().forEach((t) => t.kill());
    }, []);
};

export default useSnapToCarousels;
