import { useState } from 'react';
import './Header.css';
import Logo from '../../assets/Logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li><a href="#home" className="nav-link">Home</a></li>
            <li><a href="#about" className="nav-link">About</a></li>
            <li><a href="#menu" className="nav-link">Menu</a></li>
            <li><a href="#preservation" className="nav-link">Preservation</a></li>  
            <div className="logo-container">
              <img src={Logo} alt="Coffee Shop Logo" className="logo" />
            </div>
            <li><a href="#pages" className="nav-link">Pages</a></li>
            <li><a href="#shop" className="nav-link">Shop</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
            <div className="header-buttons">
              <button className="search-btn">
                <i className="fas fa-search"></i>
              </button>
              <button className="cart-btn">
                <i className="fas fa-shopping-cart"></i>
              </button>
              <button 
                className="mobile-menu-btn"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
              </button>
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;