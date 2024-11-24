import React from 'react';
import Header from './components/header/Header.jsx';
import Hero from './components/hero/Hero.jsx';
// import Footer from './components/footer/Footer.jsx';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Hero />
        {/* Add other sections here */}
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;