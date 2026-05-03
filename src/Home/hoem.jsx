import React, { useState } from "react";
import './home.css'

// Avto Icons
import { SiMercedes, SiBmw, SiPorsche, SiCadillac, SiChevrolet, SiLada, SiToyota, SiNissan } from "react-icons/si";

function Hone() {
  const [selectedCar, setSelectedCar] = useState(null);

  const carDescriptions = {
    'Mercedes': 'German engineering. Timeless luxury.',
    'B.M.W': 'The ultimate driving machine.',
    'Porsche': 'Precision performance, pure passion.',
    'Cadillac': 'American luxury redefined.',
    'Chevrolet': 'Bold innovation, everyday power.',
    'Lada': 'Reliable, simple, built for any road.',
    'Toyota': 'Dependability you can count on.',
    'Nissan': 'Innovation that excites.'
  };

  const renderCarContent = () => {
    switch (selectedCar) {
      case 'Mercedes':
        return <p>Mercedes is known for luxury and performance. Founded in 1926...</p>;
      case 'B.M.W':
        return <p>B.M.W is a German multinational company which produces luxury vehicles...</p>;
      case 'Porsche':
        return <p>Porsche is a German automobile manufacturer specializing in high-performance sports cars...</p>;
      case 'Cadillac':
        return <p>Cadillac is a division of the American automobile manufacturer General Motors...</p>;
      case 'Chevrolet':
        return <p>Chevrolet is an American automobile division of the American manufacturer General Motors...</p>;
      case 'Lada':
        return <p>Lada is a brand of cars manufactured by AvtoVAZ, a Russian automobile manufacturer...</p>;
      case 'Toyota':
        return <p>Toyota is a Japanese multinational automotive manufacturer...</p>;
      case 'Nissan':
        return <p>Nissan is a Japanese multinational automobile manufacturer headquartered in Nishi-ku, Yokohama...</p>;
      default:
        return <p>Select a car to view more information</p>;
    }
  };

  return (
    <div className="big-home">
      <div className="columnhome">

        <h1 className="home-h1">OUR CARS</h1>

        {/* Card One */}
        <div className="samil-column">
          <SiMercedes size={50} />
          <h4>Mercedes</h4>
          <p>{carDescriptions['Mercedes']}</p>
          <button className="animated-button" onClick={() => setSelectedCar('Mercedes')}>Learn More</button>
        </div>

        {/* Card Two */}
        <div className="samil-column">
          <SiBmw size={50} />
          <h4>B.M.W</h4>
          <p>{carDescriptions['B.M.W']}</p>
          <button className="animated-button" onClick={() => setSelectedCar('B.M.W')}>Learn More</button>
        </div>

        {/* Card Three */}
        <div className="samil-column">
          <SiPorsche size={50} />
          <h4>Porsche</h4>
          <p>{carDescriptions['Porsche']}</p>
          <button className="animated-button" onClick={() => setSelectedCar('Porsche')}>Learn More</button>
        </div>

        {/* Card Four */}
        <div className="samil-column">
          <SiCadillac size={50} />
          <h4>Cadillac</h4>
          <p>{carDescriptions['Cadillac']}</p>
          <button className="animated-button" onClick={() => setSelectedCar('Cadillac')}>Learn More</button>
        </div>

        {/* Card Five */}
        <div className="samil-column">
          <SiChevrolet size={50} />
          <h4>Chevrolet</h4>
          <p>{carDescriptions['Chevrolet']}</p>
          <button className="animated-button" onClick={() => setSelectedCar('Chevrolet')}>Learn More</button>
        </div>

        {/* Card Six */}
        <div className="samil-column">
          <SiLada size={50} />
          <h4>Lada</h4>
          <p>{carDescriptions['Lada']}</p>
          <button className="animated-button" onClick={() => setSelectedCar('Lada')}>Learn More</button>
        </div>

        {/* Card Seven */}
        <div className="samil-column">
          <SiToyota size={50} />
          <h4>Toyota</h4>
          <p>{carDescriptions['Toyota']}</p>
          <button className="animated-button" onClick={() => setSelectedCar('Toyota')}>Learn More</button>
        </div>

        {/* Card Eight */}
        <div className="samil-column">
          <SiNissan size={50} />
          <h4>Nissan</h4>
          <p>{carDescriptions['Nissan']}</p>
          <button className="animated-button" onClick={() => setSelectedCar('Nissan')}>Learn More</button>
        </div>
      </div>

      {/* Tanlangan mashina uchun content */}
      <div className="car-content">
        {renderCarContent()}
      </div>
    </div>
  );
}

export default Hone;
