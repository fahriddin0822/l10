import Header from './components/header/Header.jsx';
import Hero from './components/hero/Hero.jsx';
import Products from './components/products/Products.jsx';
// import Footer from './components/footer/Footer.jsx';
import './App.css';

function App() {
  return (
    <div className="app">
      <main className="main-content">
        <Header/>
        <Hero />
        <Products />
        {/* <Menu />
        <Testimonials />
        <Booking />
        <News /> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;