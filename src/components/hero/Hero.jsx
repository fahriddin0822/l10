import './Hero.css';
import background__photo__coffee from '../../assets/background__photo__coffee.jpeg';

const Hero = () => {
  return (
    <section
      className="hero"
      id="home"
      style={{
        backgroundImage: `url(${background__photo__coffee})`,
      }}
    >
      <div className="hero-content">
        <h1 className="hero-title">
          Enjoy Your<br />Morning Coffee.
        </h1>
        <p className="hero-description">
          It is coffee time - Enjoy the moment before starting your busy day!
        </p>
        <button className="order-button">Order Now</button>
      </div>
    </section>
  );
};

export default Hero;
