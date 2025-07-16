import React from "react";
import "./Footer.scss";

import emailIcon from "../../../assets/icons/email.svg";
import githubIcon from "../../../assets/icons/github.svg";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-left">
                <p>© {new Date().getFullYear()} Hichame Dev. Tous droits réservés.</p>
            </div>

            <div className="footer-right">
                <a href="mailto:Hichame_Dev@outlook.com" target="_blank" rel="noopener noreferrer">
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
