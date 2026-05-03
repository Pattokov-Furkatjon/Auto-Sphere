import React, { useEffect, useState } from 'react';
import './FeaturedModel.css';
import rollsImg from '../spector.png';

export default function FeaturedModel() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.3 });

    const section = document.querySelector('.featured');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section className="featured" id="featured">
      <div className="featured__gradient"></div>

      <div className="container">
        <div className="featured__content">
          {/* Left - Image */}
          <div className={`featured__left fade-up ${isVisible ? 'visible' : ''}`} style={{ background: 'transparent', border: 'none', boxShadow: 'none' }}>
            <img
              src={rollsImg}
              alt="Rolls Royce Spectre"
              style={{
                width: '100%',
                maxWidth: '640px',
                height: 'auto',
                objectFit: 'contain',
                background: 'transparent',
                border: 'none',
                borderRadius: '0',
                filter: 'drop-shadow(0 40px 80px rgba(0,0,0,0.9))'
              }}
              loading="lazy"
            />
          </div>

          {/* Right - Content */}
          <div className={`featured__right fade-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '100ms' }}>
            <span className="featured__eyebrow">FEATURED MODEL</span>
            <h2 className="featured__title">ROLLS-ROYCE<br />SPECTRE</h2>
            <p className="featured__description">
              The world's first fully electric Rolls-Royce. Combining a century of handcrafted luxury with a sustainable future — the Spectre redefines what a car can be.
            </p>

            {/* Specs Pills */}
            <div className="featured__specs">
              <div className="featured__spec-pill">⚡ Electric</div>
              <div className="featured__spec-pill">600+ km Range</div>
              <div className="featured__spec-pill">0–100 in 4.5s</div>
            </div>

            {/* Button */}
            <button className="featured__button">
              VIEW FULL SPECS →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
