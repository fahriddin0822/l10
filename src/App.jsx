import React from 'react';
import Header from './components/header/Header.jsx';
import Hero from './components/hero/Hero.jsx';
import Products from './components/products/Products.jsx';
import Menu from './components/menu/Menu.jsx';
import Testimonials from './components/testimonials/Testimonials.jsx';
import Booking from './components/booking/Booking.jsx';
import News from './components/news/News.jsx';
// import Footer from './components/footer/Footer.jsx';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Hero />
        <Products />
        <Menu />
        <Testimonials />
        <Booking />
        <News />
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;