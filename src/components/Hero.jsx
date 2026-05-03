import React, { useEffect, useState } from 'react';
import './Hero.css';
import mercedesImg from '../mers.png';

export default function Hero() {
  const [stats, setStats] = useState({ brands: 0, drivers: 0, years: 12 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        animateNumbers();
      }
    }, { threshold: 0.3 });

    const section = document.querySelector('.hero');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const animateNumbers = () => {
    let brandCount = 0;
    let driverCount = 0;
    const brandTarget = 240;
    const driverTarget = 50;

    const increment = setInterval(() => {
      if (brandCount < brandTarget) {
        brandCount += Math.ceil(brandTarget / 30);
        setStats(prev => ({ ...prev, brands: Math.min(brandCount, brandTarget) }));
      }
      if (driverCount < driverTarget) {
        driverCount += Math.ceil(driverTarget / 30);
        setStats(prev => ({ ...prev, drivers: Math.min(driverCount, driverTarget) }));
      }
      if (brandCount >= brandTarget && driverCount >= driverTarget) {
        clearInterval(increment);
      }
    }, 50);
  };

  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero__content">
          {/* Left Column */}
          <div className={`hero__left fade-up ${isVisible ? 'visible' : ''}`}>
            <span className="hero__eyebrow">PREMIUM AUTOMOTIVE</span>
            <h1 className="hero__title">
              DISCOVER YOUR <span className="hero__title-accent">DREAM</span> CAR
            </h1>
            <p className="hero__subtitle">
              Explore the world's most iconic automotive brands. From German engineering to American muscle — every car tells a story. Find yours.
            </p>

            {/* Buttons */}
            <div className="hero__buttons">
              <button className="hero__button hero__button--primary">
                EXPLORE CARS
              </button>
              <button className="hero__button hero__button--secondary">
                WATCH FILM
              </button>
            </div>

            {/* Stats */}
            <div className="hero__stats">
              <div className="hero__stat">
                <div className="hero__stat-number">{stats.brands}+</div>
                <div className="hero__stat-label">BRANDS</div>
              </div>
              <div className="hero__stat-divider"></div>
              <div className="hero__stat">
                <div className="hero__stat-number">{stats.drivers}K+</div>
                <div className="hero__stat-label">HAPPY DRIVERS</div>
              </div>
              <div className="hero__stat-divider"></div>
              <div className="hero__stat">
                <div className="hero__stat-number">{stats.years}</div>
                <div className="hero__stat-label">YEARS EXPERIENCE</div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className={`hero__right fade-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '100ms', background: 'transparent', border: 'none', boxShadow: 'none' }}>
            <div className="hero__glow"></div>
            <img
              src={mercedesImg}
              alt="Mercedes W222 S-Class"
              style={{
                width: '100%',
                maxWidth: '640px',
                height: 'auto',
                objectFit: 'contain',
                background: 'transparent',
                border: 'none',
                borderRadius: '0',
                filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.9))'
              }}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
