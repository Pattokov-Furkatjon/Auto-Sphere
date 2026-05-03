import React, { useEffect } from 'react';
import './styles/globals.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CarGrid from './components/CarGrid';
import FeaturedModel from './components/FeaturedModel';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Intersection Observer for fade-up animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.fade-up');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <CarGrid />
      <FeaturedModel />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
