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
      <div className='py-24 flex flex-col gap-24' data-aos='fade-down'>
        <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Better Data</span> Scalable AI.</h1>
        <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
      </div>
      <div className="w-full py-28" data-aos="fade-up"> 
        <Carousel />
      </div>
      <div className="w-full mt-8 px-16 py-20" data-aos="fade-up">
        <Cards />
      </div>
    </div>
  );
};

export default Home;
