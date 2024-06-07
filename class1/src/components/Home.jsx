import React, { useEffect } from 'react';
import Carousel from './Carousel';
import Cards from './Cards';
import AOS from 'aos';
import "aos/dist/aos.css";


const Home = () => {

  useEffect(() => {
    AOS.init({duration:1200})
  })

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center py-28">
      <div className="w-full" data-aos="fade-up"> 
        <Carousel />
      </div>
      <div className="w-full mt-8 px-16 py-20" data-aos="fade-up">
        <Cards />
      </div>
    </div>
  );
};

export default Home;
