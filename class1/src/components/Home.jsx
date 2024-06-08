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
      <div className='flex gap-14 w-full justify-start items-center py-4' data-aos='fade-down'>
        <div className='px-24 w-4/5'>
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">ProjExpo</span>Store your Project</h1>
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Here at ProjExpo you can store your Projects in a Safe and Secured manner, It is a Place to organise your Projects!</p>
        </div>
        <div className='px-16'>
          <img src="/repo1.png" alt="repo" className='rounded-super-lg shadow-intense h-full w-full'/>
        </div>
      </div>
      <div className="w-full py-28" data-aos="fade-up"> 
        <Carousel />
      </div>
      <div className="w-full mt-8 px-16 py-8" data-aos="fade-up">
        <Cards />
      </div>
    </div>
  );
};

export default Home;
