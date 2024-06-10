import React, { useState } from 'react';
import '../styles/Carousel.css'; // Import the CSS file

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
    <div className="carousel-container">
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === currentIndex ? 'carousel-active-slide' : 'carousel-inactive-slide'}`}
          >
            <div className="carousel-content">
              <div className="carousel-text">
                <h1 className="carousel-title">{slide.title}</h1>
                <p className="carousel-description">{slide.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button onClick={goToPreviousSlide} className="carousel-button carousel-button-left">
        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13" />
        </svg>
      </button>
      <button onClick={goToNextSlide} className="carousel-button carousel-button-right">
        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
        </svg>
      </button>
    </div>
  );
};

export default Carousel;
