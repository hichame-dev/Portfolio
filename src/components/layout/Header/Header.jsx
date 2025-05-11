import React, { useState } from "react";
import "./Header.scss";
import ThemeToggle from "../ThemeToggle"; // ✅ reste correct car dans layout/

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="header">
            <div className="logo-wrapper">
                <div className="logo-text">Hichame-Dev</div>
            </div>

            <div className={`burger ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
                <a href="#intro">Accueil</a>
                <a href="#about">À propos</a>
                <a href="#projects">Projets</a>
                <a href="#contact">Contact</a>
            </nav>

            <ThemeToggle />
        </header>
    );
}

export default Header;
