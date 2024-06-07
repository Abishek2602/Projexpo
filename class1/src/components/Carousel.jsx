// Carousel.jsx
import React, { useState } from 'react';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      title: "Power of AI",
      text: "Unleashing the power of AI, our platform revolutionizes workflows, making complex tasks simpler and more efficient. Harness the capabilities of advanced machine learning to unlock unprecedented productivity and innovation."
    },
    {
      title: "Our Aim",
      text: "Our aim is to provide a seamless, intuitive, and secure platform for developers and teams to collaborate and innovate. We are dedicated to fostering a community where ideas flourish and technology evolves."
    },
    {
      title: "Secured Repository",
      text: "Your data's security is our top priority. Our platform offers state-of-the-art encryption and protection measures, ensuring your valuable information is stored safely and remains accessible only to you."
    }
  ];

  const goToPreviousSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto h-96">
    <div className="relative overflow-hidden rounded-extra-lg h-full mx-auto shadow-intense shadow-custom-black-1">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="absolute inset-0 flex items-center gap-5 justify-center bg-black bg-opacity-50 rounded-xl">
            <div className="text-center text-white px-4 md:px-8 flex-row">
              <div><h1 className="text-3xl md:text-4xl lg:text-5xl mb-4 font-bold px-12 py-8 font-heading1">{slide.title}</h1></div>
              <div className='justify-center px-36 -py-8'><p className="mb-12 opacity-80 w-80 font-heading1">{slide.text}</p></div>
            </div>
          </div>
        </div>
      ))}
    </div>
    <button onClick={goToPreviousSlide} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-transparent text-white p-2 rounded-full">
    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"/>
</svg>
    </button>
    <button onClick={goToNextSlide} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-transparent text-white p-2 rounded-full">
    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
</svg>
    </button>
  </div>
  );
};

export default Carousel;
