import React, { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar__container">
        {/* Logo */}
        <div className="navbar__logo">
          <span className="navbar__logo-auto">AUTO</span>
          <span className="navbar__logo-sphere">SPHERE</span>
        </div>

        {/* Nav Links */}
        <div className={`navbar__links ${menuOpen ? 'open' : ''}`}>
          {menuOpen && (
            <button
              className="navbar__close"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              ✕
            </button>
          )}
          <a href="#home" onClick={handleLinkClick} className="navbar__link">Home</a>
          <a href="#cars" onClick={handleLinkClick} className="navbar__link">Cars</a>
          <a href="#featured" onClick={handleLinkClick} className="navbar__link">Featured</a>
          <a href="#reviews" onClick={handleLinkClick} className="navbar__link">Reviews</a>
          <a href="#contact" onClick={handleLinkClick} className="navbar__link">Contact</a>
        </div>

        {/* Hamburger Menu */}
        <button
          className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
