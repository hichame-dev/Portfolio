import React, { useState } from "react";
import "./Header.scss";
import ThemeToggle from "../ThemeToggle";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="luxury-header">
            <div className="logo">Hichame_Dev</div>

            <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
                <a href="#intro">Accueil</a>
                <a href="#about">À propos</a>
                <a href="#projects">Projets</a>
                <a href="#contact">Contact</a>
            </nav>

            <div className={`burger ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <ThemeToggle />
        </header>
    );
}

export default Header;
