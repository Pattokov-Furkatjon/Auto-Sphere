import React, { useState } from "react";
import { Link } from 'react-router-dom'; 
import './navigation.css';

function Head() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="nasi">
            <h1>My Portfolio</h1>
            <ul className={`navi ${menuOpen ? 'open' : ''}`}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <div className="menu-icon" onClick={toggleMenu}>
                ☰
            </div>
        </nav>
    );
}

export default Head;
