'use client'

import { useState, useEffect } from "react";

export default function Theme()
{
    const[theme, setTheme] = useState("light");
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark': 'light'))
    };

    useEffect(() => {
        if(theme === "dark") {
            document.body.classList.add("dark-mode");
            document.body.classList.remove("light-mode");
        } else{
            document.body.classList.add("light-mode");
            document.body.classList.remove("dark-mode");
        }
    }, [theme]);
    return (
        <>
            <ul>
                <li onClick={toggleTheme}>Light Mode</li>
                <li onClick={toggleTheme}>Dark Mode</li>
            </ul>
        </>
    )
}