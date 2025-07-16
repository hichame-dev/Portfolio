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
            <div className="logo">Hichame Dev</div>

            <div className="right-group">
                <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
                    <a href="#intro" onClick={() => setMenuOpen(false)}>Accueil</a>
                    <a href="#about" onClick={() => setMenuOpen(false)}>À propos</a>
                    <a href="#projects" onClick={() => setMenuOpen(false)}>Projets</a>
                    <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
                </nav>

                <div className="theme-toggle">
                    <ThemeToggle />
                </div>

                <div className={`burger ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </header>
    );
}

export default Header;
