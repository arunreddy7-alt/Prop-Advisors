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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000); // Change slide every 4 seconds
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Fixed navigation bar */}
      <nav className={`fixed top-0 left-0 right-0 flex justify-between items-center text-white px-4 md:px-10 py-2 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 shadow-lg border-b border-gray-200 backdrop-blur-sm' 
          : 'bg-gradient-to-b from-black to-transparent border-b border-white backdrop-blur-sm'
      }`}>
        <img src="/logo.png" alt="sri Logo" className={`h-16 md:h-20 w-auto transition-all duration-300 ${isScrolled ? 'filter brightness-0' : ''}`} />
        
        {/* Desktop Menu - Hidden on mobile */}
        <ul className="hidden md:flex gap-5 items-center list-none m-0 p-0">
          <li><a href="#about-us" className={`font-medium no-underline ${isScrolled ? 'text-gray-800' : 'text-white'}`}>About us</a></li>
          <li><a href="#amodha" className={`font-medium no-underline ${isScrolled ? 'text-gray-800' : 'text-white'}`}>Project Amodha</a></li>
          <li><a href="#shriramgharunda" className={`font-medium no-underline ${isScrolled ? 'text-gray-800' : 'text-white'}`}>Project Shri Ram Gharunda</a></li>
          <li><a href="#adoradegoa" className={`font-medium no-underline ${isScrolled ? 'text-gray-800' : 'text-white'}`}>Project Adora De Goa</a></li>
          <li><a href="#contact-form" className={`font-medium no-underline ${isScrolled ? 'text-gray-800' : 'text-white'}`}>Get in touch</a></li>
        </ul>

        {/* Mobile Menu Button - Only visible on mobile */}
        <button 
          className="md:hidden flex flex-col gap-1 z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className={`w-6 h-0.5 transition-all ${isScrolled ? 'bg-gray-800' : 'bg-white'}`}></span>
          <span className={`w-6 h-0.5 transition-all ${isScrolled ? 'bg-gray-800' : 'bg-white'}`}></span>
          <span className={`w-6 h-0.5 transition-all ${isScrolled ? 'bg-gray-800' : 'bg-white'}`}></span>
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div className={`fixed top-16 md:top-20 left-0 right-0 bg-white/90 shadow-lg md:hidden backdrop-blur-sm transition-all duration-300 ease-in-out transform z-40 ${
        isMobileMenuOpen 
          ? 'opacity-100 translate-y-0 visible' 
          : 'opacity-0 -translate-y-4 invisible'
      }`}>
        <ul className="flex flex-col p-4 gap-3">
          <li><a href="#about-us" className="text-gray-800 font-medium no-underline block py-2" onClick={() => setIsMobileMenuOpen(false)}>About us</a></li>
          <li><a href="#amodha" className="text-gray-800 font-medium no-underline block py-2" onClick={() => setIsMobileMenuOpen(false)}>Project Amodha</a></li>
          <li><a href="#shriramgharunda" className="text-gray-800 font-medium no-underline block py-2" onClick={() => setIsMobileMenuOpen(false)}>Project Shri Ram Gharunda</a></li>
          <li><a href="#adoradegoa" className="text-gray-800 font-medium no-underline block py-2" onClick={() => setIsMobileMenuOpen(false)}>Project Adora De Goa</a></li>
          <li><a href="#contact-form" className="text-gray-800 font-medium no-underline block py-2" onClick={() => setIsMobileMenuOpen(false)}>Get in touch</a></li>
        </ul>
      </div>
      
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
