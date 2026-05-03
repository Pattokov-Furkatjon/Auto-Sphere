import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        {/* Top Row - Links */}
        <div className="footer__top">
          {/* Col 1: Brand */}
          <div className="footer__col">
            <h3 className="footer__logo">
              <span className="footer__logo-auto">AUTO</span>
              <span className="footer__logo-sphere">SPHERE</span>
            </h3>
            <p className="footer__tagline">
              The world's finest automotive showcase. Discover, compare, dream.
            </p>
          </div>

          {/* Col 2: Explore */}
          <div className="footer__col">
            <h4 className="footer__col-title">EXPLORE</h4>
            <ul className="footer__links">
              <li><a href="#home">Home</a></li>
              <li><a href="#cars">Cars</a></li>
              <li><a href="#featured">Featured</a></li>
              <li><a href="#reviews">Reviews</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Col 3: Brands */}
          <div className="footer__col">
            <h4 className="footer__col-title">BRANDS</h4>
            <ul className="footer__links">
              <li><a href="/">Mercedes</a></li>
              <li><a href="/">BMW</a></li>
              <li><a href="/">Porsche</a></li>
              <li><a href="/">Cadillac</a></li>
              <li><a href="/">Toyota</a></li>
            </ul>
          </div>

          {/* Col 4: Connect */}
          <div className="footer__col">
            <h4 className="footer__col-title">CONNECT</h4>
            <p className="footer__connect-text">
              Stay updated on new arrivals and launches.
            </p>
            <div className="footer__email-form">
              <input
                type="email"
                placeholder="your@email.com"
                className="footer__email-input"
                aria-label="Email subscription"
              />
              <button className="footer__email-button">Subscribe</button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer__divider"></div>

        {/* Bottom Row */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            © 2025 AutoSphere. All rights reserved.
          </p>
          <div className="footer__policies">
            <a href="/">Privacy Policy</a>
            <span>·</span>
            <a href="/">Terms of Service</a>
            <span>·</span>
            <a href="/">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
