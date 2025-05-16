import React from "react";
import "./ScrollButton.scss";

function ScrollButton({ targetId, className = "" }) {
    const handleClick = () => {
        const target = document.getElementById(targetId);
        if (target) {
            const yOffset = -72;
            const y = target.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    };
    console.log("🔘 ScrollButton mounted");

    return (
        <button className={`scroll-button ${className}`} onClick={handleClick}>
            <div className="globe-3d">
                <div className="arrow" />
            </div>
        </button>
    );
}

export default ScrollButton;
