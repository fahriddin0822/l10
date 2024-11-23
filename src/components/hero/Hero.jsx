// HeroSection.jsx
import React from 'react';
import './Hero.css';

const HeroSection = ({ 
  title = "Custom Title",
  description = "Custom description text goes here",
  buttonText = "Shop Now",
  backgroundImage = "/path/to/your/image.jpg"
}) => {
  return (
    <div className="hero-container">
      <div className="hero-background">
        <img src={backgroundImage} alt="Coffee background" />
        <div className="hero-overlay" />
      </div>

      <div className="hero-content">
        <div className="hero-content-inner">
          <div className="welcome-text">
            <div className="welcome-line" />
            <span className="welcome-label">Welcome</span>
          </div>

          <h1 className="hero-title">{title}</h1>
          <p className="hero-description">{description}</p>

          <div className="hero-buttons">
            <button className="primary-button">
              {buttonText}
              <svg 
                className="arrow-icon" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
            <button className="secondary-button">
              Learn More
            </button>
          </div>

          <div className="stats-container">
            <div className="stat-item">
              <div className="stat-number">20+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100+</div>
              <div className="stat-label">Coffee Variants</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Happy Customers</div>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </div>
  );
};

export default HeroSection;