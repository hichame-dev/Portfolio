import React from "react";
import "./Footer.scss";

// ✅ Import propre des SVGs (Vite)
import instagramIcon from "../../../assets/icons/instagram.svg";
import emailIcon from "../../../assets/icons/email.svg";
import githubIcon from "../../../assets/icons/github.svg";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-left">
                <p>© {new Date().getFullYear()} Hichame Dev. Tous droits réservés.</p>
            </div>

            <div className="footer-right">
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                    <img src={instagramIcon} alt="Instagram" />
                </a>
                <a href="mailto:hichame.dev@gmail.com">
                    <img src={emailIcon} alt="Email" />
                </a>
                <a href="https://github.com/hichame-dev" target="_blank" rel="noopener noreferrer">
                    <img src={githubIcon} alt="GitHub" />
                </a>
            </div>
        </footer>
    );
}

export default Footer;
