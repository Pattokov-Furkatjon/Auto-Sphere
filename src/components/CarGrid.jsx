import React from 'react';
import './CarGrid.css';
import {
  SiMercedes,
  SiBmw,
  SiPorsche,
  SiCadillac,
  SiChevrolet,
  SiLada,
  SiToyota,
  SiNissan,
} from 'react-icons/si';

const CARS = [
  {
    id: 1,
    brand: 'Mercedes',
    description: 'German engineering. Timeless luxury.',
    icon: SiMercedes,
  },
  {
    id: 2,
    brand: 'BMW',
    description: 'The ultimate driving machine.',
    icon: SiBmw,
  },
  {
    id: 3,
    brand: 'Porsche',
    description: 'Precision performance, pure passion.',
    icon: SiPorsche,
  },
  {
    id: 4,
    brand: 'Cadillac',
    description: 'American luxury redefined.',
    icon: SiCadillac,
  },
  {
    id: 5,
    brand: 'Chevrolet',
    description: 'Bold innovation, everyday power.',
    icon: SiChevrolet,
  },
  {
    id: 6,
    brand: 'Lada',
    description: 'Reliable, simple, built for any road.',
    icon: SiLada,
  },
  {
    id: 7,
    brand: 'Toyota',
    description: 'Dependability you can count on.',
    icon: SiToyota,
  },
  {
    id: 8,
    brand: 'Nissan',
    description: 'Innovation that excites.',
    icon: SiNissan,
  },
];

export default function CarGrid() {
  return (
    <section className="cars" id="cars">
      <div className="container">
        {/* Section Header */}
        <div className="cars__header">
          <div className="cars__header-left">
            <span className="cars__eyebrow">OUR COLLECTION</span>
            <h2 className="cars__title">ICONIC BRANDS</h2>
          </div>
          <p className="cars__subtitle">
            Each brand carries a legacy. Choose yours.
          </p>
        </div>

        {/* Grid */}
        <div className="cars__grid">
          {CARS.map((car, index) => {
            const IconComponent = car.icon;
            return (
              <div
                key={car.id}
                className={`cars__card fade-up ${index < 4 ? 'visible' : ''}`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="cars__card-glow"></div>
                <IconComponent className="cars__card-icon" />
                <h3 className="cars__card-brand">{car.brand}</h3>
                <p className="cars__card-description">{car.description}</p>
                <button className="cars__card-button">
                  EXPLORE →
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
