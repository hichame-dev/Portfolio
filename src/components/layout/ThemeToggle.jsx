import React, { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

function ThemeToggle() {
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === "dark" ? "light" : "dark"));
    };

    return (
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Changer le thème">
            {theme === "dark" ? <FaSun /> : <FaMoon />}
        </button>
    );
}

export default ThemeToggle;
