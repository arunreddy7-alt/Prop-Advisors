'use client';
import React, { useState, useEffect } from 'react';

const slides = [
  {
    image: '/bg1.jpg',
    text: 'Welcome to Prop Advisors – Your Smart Move in Real Estate',
  },
  {
    image: '/bg2.jpg',
    text: 'Amodha - Your Ticket to a Promising Future!',
  },
  {
    image: '/bg3.jpg',
    text: 'Shri Ram Gharunda - Elite Homes curated for YOU!',
  },
  {
    image: '/bg4.jpg',
    text: 'Adora De Goa - Live the Goan Dream!',
  },
];

const LandingPage = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000); // Change slide every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Fixed navigation bar */}
      <nav className="fixed top-0 left-0 right-0 flex justify-between items-center text-white px-10 py-2 z-50 border-b border-white bg-gradient-to-b from-black to-transparent backdrop-blur-sm">
        <img src="/logo.png" alt="sri Logo" className="h-20 w-auto" />
        <ul className="flex gap-5 items-center list-none m-0 p-0">
          <li><a href="#about-us" className="text-white font-medium no-underline">About us</a></li>
          <li><a href="#amodha" className="text-white font-medium no-underline">Project Amodha</a></li>
          <li><a href="#shriramgharunda" className="text-white font-medium no-underline">Project Shri Ram Gharunda</a></li>
          <li><a href="#adoradegoa" className="text-white font-medium no-underline">Project Adora De Goa</a></li>
          <li><a href="#contact-form" className="text-white font-medium no-underline">Get in touch</a></li>
        </ul>
      </nav>
      
      {/* Hero section with background image */}
      <div
        className="relative w-screen h-screen bg-cover bg-center font-sans transition-all duration-20"
        style={{ backgroundImage: `url('${slides[current].image}')` }}
      >
        {/* Gradient overlay at the top */}
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none"></div>
        {/* Centered text for current slide */}
        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none mt-20">
          <h1 className="text-[4vw] font text-white text-center leading-none select-none font-[Georgia]">
            {slides[current].text}
          </h1>
        </div>
      </div>
    </>
  );
};

export default LandingPage; 
