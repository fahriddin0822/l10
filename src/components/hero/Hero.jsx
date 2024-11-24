import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1 className="hero-title">
          Enjoy Your<br />Morning Coffee.
        </h1>
        <p className="hero-description">
          It's coffee time - Enjoy the moment before starting your busy day!
        </p>
        <button className="order-button">Order Now</button>
        
        <div className="features-grid">
          <div className="feature-card">
            <img src="/src/assets/Logo.png" alt="Best Coffee" className="feature-icon" />
            <h3 className="feature-title">Best Coffee Flavour</h3>
            <p className="feature-description">Experience the richest coffee flavors</p>
          </div>
          
          <div className="feature-card">
            <img src="/src/assets/Logo.png" alt="Place" className="feature-icon" />
            <h3 className="feature-title">Place to get lost</h3>
            <p className="feature-description">Cozy atmosphere to enjoy your coffee</p>
          </div>
          
          <div className="feature-card">
            <img src="/src/assets/Logo.png" alt="Proper" className="feature-icon" />
            <h3 className="feature-title">Proper roasting</h3>
            <p className="feature-description">Perfectly roasted coffee beans</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;