// Import de React et des hooks nécessaires
import React, { useEffect, useState } from "react";
// Import des icônes pour le bouton (soleil et lune)
import { FaMoon, FaSun } from "react-icons/fa";

// Composant pour basculer entre les thèmes clair et sombre
function ThemeToggle() {
    // ✅ État local pour le thème, initialisé à partir du localStorage
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "dark"; // dark par défaut
    });

    // À chaque changement de thème :
    // - on applique l'attribut data-theme au <html>
    // - on sauvegarde la valeur dans le localStorage
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    // Fonction pour basculer entre les thèmes "dark" et "light"
    const toggleTheme = () => {
        setTheme(prev => (prev === "dark" ? "light" : "dark"));
    };

    return (
        // Bouton accessible avec une icône dynamique selon le thème actif
        <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Changer le thème"
        >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
        </button>
    );
}

// Export du composant
export default ThemeToggle;
