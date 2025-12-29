'use client'

import { useState, useEffect } from "react";

export default function Theme() {
    const [theme, setTheme] = useState("light");
    const toggleTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'));

    useEffect(() => {
        if (theme === "dark") {
            document.body.classList.add("dark-mode");
            document.body.classList.remove("light-mode");
        } else {
            document.body.classList.add("light-mode");
            document.body.classList.remove("dark-mode");
        }
    }, [theme]);

    return (
        <nav className="site-container" aria-label="main navigation">
            <h1>My Portfolio</h1>
        </nav>
    );
}