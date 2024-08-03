import React, { useEffect } from 'react';
import Carousel from './Carousel';
import Cards from './Cards';
import Pricing from './Pricing';
import AOS from 'aos';
import "aos/dist/aos.css";
import '../styles/Home.css'; // Import the CSS file

const Home = () => {

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="home-container">
      <div className='home-intro' data-aos='zoom-in-up'>
        <div className='home-text-container'>
          <h1 className="home-title">
            <span className="home-highlight">ProjExpo</span>Store your Project
          </h1>
          <p className="home-description">
            Here at ProjExpo you can store your Projects in a Safe and Secured manner, It is a Place to organise your Projects!
          </p>
        </div>
        <div className='home-image-container'>
          <img src="/repo1.png" alt="repo" className='home-image' />
        </div>
      </div>
      <div className="home-carousel" data-aos="zoom-in-up"> 
        <Carousel />
      </div>
      <div className="home-pricing" data-aos='zoom-in-up'>
        <Pricing/>
      </div>
      <div className="home-cards" data-aos="zoom-in-up">
        <Cards />
      </div>
    </div>
  );
};

export default Home;
