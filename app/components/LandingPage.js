'use client';
import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { emailjsConfig } from '../config/emailjs';
import StatsSection from './StatsSection';
import HighlightsSection from './HighlightsSection';
import AmenitiesSection from './AmenitiesSection';
import LayoutMapSection from './LayoutMapSection';

const LandingPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleEnquireNow = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const templateParams = {
      from_name: formData.get('name'),
      from_email: formData.get('email'),
      from_phone: formData.get('phone'),
      project_interested: formData.get('project'),
      budget: formData.get('budget'),
      timeline: formData.get('timeline'),
      location: formData.get('location'),
      comments: formData.get('comments'),
      to_name: 'Amodha Team'
    };

    try {
      const result = await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        templateParams,
        emailjsConfig.publicKey
      );

      if (result.status === 200) {
        alert('Thank you! Your message has been sent successfully. We will contact you soon.');
        closeForm();
        e.target.reset();
      } else {
        alert('Sorry, there was an error sending your message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Sorry, there was an error sending your message. Please try again.');
    }
  };

  const handleDownloadBrochure = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = '/amodha-brochure.pdf';
    link.download = 'Amodha-Brochure.pdf';
    link.target = '_blank';
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-open contact form when page loads
  useEffect(() => {
    // Open form immediately when component mounts
    setIsFormOpen(true);
    
    // Initialize EmailJS
    emailjs.init(emailjsConfig.publicKey);
  }, []);

  // Prevent background scrolling when form is open
  useEffect(() => {
    if (isFormOpen) {
      // Simply prevent scrolling without changing body position
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      // Re-enable scrolling
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }

    // Cleanup function to restore scrolling when component unmounts
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isFormOpen]);

  return (
    <>
      {/* Fixed navigation bar */}
      <nav className={`fixed top-0 left-0 right-0 flex items-center px-4 md:px-10 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#c2b088]/95 shadow-lg py-0' 
          : 'bg-[#c2b088]/90 py-2 sm:py-4'
      }`}>
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src="/logo.png" 
            alt="Prop Advisors Logo" 
            className="h-16 sm:h-16 md:h-20 w-auto filter brightness-0"
          />
        </div>
      
        {/* Desktop Menu - Right */}
        <ul className="hidden md:flex gap-8 items-center list-none m-0 p-0 ml-auto">
          <li><a href="#home" className="font-medium no-underline text-gray-800 hover:text-[#b6821c] transition-colors">Home</a></li>
          <li><a href="#about" className="font-medium no-underline text-gray-800 hover:text-[#b6821c] transition-colors">About</a></li>
          <li><a href="#amenities" className="font-medium no-underline text-gray-800 hover:text-[#b6821c] transition-colors">Amenities</a></li>
          <li><a href="#layout" className="font-medium no-underline text-gray-800 hover:text-[#b6821c] transition-colors">Layout</a></li>
          <li><a href="#contact" className="font-medium no-underline text-gray-800 hover:text-[#b6821c] transition-colors">Contact us</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex flex-col gap-1.5 z-50 ml-auto p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div className={`fixed top-0 left-0 right-0 bg-white/90 shadow-lg md:hidden backdrop-blur-sm transition-all duration-300 ease-in-out transform z-40 ${
        isMobileMenuOpen 
          ? 'opacity-100 translate-y-0 visible' 
          : 'opacity-0 -translate-y-4 invisible'
      }`}>
        <ul className="flex flex-col p-4 gap-3 pt-24">
          <li><a href="#home" className="text-gray-800 font-medium no-underline block py-2" onClick={() => setIsMobileMenuOpen(false)}>Home</a></li>
          <li><a href="#about" className="text-gray-800 font-medium no-underline block py-2" onClick={() => setIsMobileMenuOpen(false)}>About</a></li>
          <li><a href="#amenities" className="text-gray-800 font-medium no-underline block py-2" onClick={() => setIsMobileMenuOpen(false)}>Amenities</a></li>
          <li><a href="#layout" className="text-gray-800 font-medium no-underline block py-2" onClick={() => setIsMobileMenuOpen(false)}>Layout</a></li>
          <li><a href="#contact" className="text-gray-800 font-medium no-underline block py-2" onClick={() => setIsMobileMenuOpen(false)}>Contact us</a></li>
        </ul>
      </div>
      
      {/* Hero section */}
      <div id="home" className="relative w-full min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/hero-bg.jpg')" }}>
        
        {/* White Rectangle Shape with Background Image */}
        <div
          className="absolute bottom-28 sm:bottom-85 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-[95vw] sm:w-[90vw] max-w-[1250px] h-[450px] sm:h-[500px] md:h-[600px] lg:h-[700px] rounded-lg shadow-lg z-25 bg-cover bg-center relative overflow-hidden"
          style={{ backgroundImage: "url('/bg1.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          {/* Enhanced gradient overlays */}
          {/* Mobile: top-to-bottom gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-transparent pointer-events-none sm:hidden"></div>
          {/* Desktop/tablet: side and partial top/bottom gradients */}
          <div className="hidden sm:block absolute left-0 top-0 h-full w-2/3 bg-gradient-to-r from-black/90 via-black/70 to-transparent pointer-events-none"></div>
          <div className="hidden sm:block absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-black/70 via-black/40 to-transparent pointer-events-none"></div>
          <div className="hidden sm:block absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/80 via-black/50 to-transparent pointer-events-none"></div>
          <div className="hidden sm:block absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-black/60 via-black/30 to-transparent pointer-events-none"></div>
        </div>
        
        {/* Background overlay section (slightly shifted up) */}
        <div className="absolute left-0 w-full h-full bg-[#b8a47a] z-15 -top-60"></div>
        
        {/* Content */}
        <div className="absolute inset-0 flex items-start z-30 pt-65 sm:pt-7 sm:items-center">
          <div className="max-w-7xl mx-auto px-4 md:px-10 w-full">
            <div className="text-black max-w-2xl text-left ml-0 px-4 sm:px-0">
              <div className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-light italic mb-4 -mt-8" style={{ fontFamily: "'Calligraffitti', cursive" }}>
              </div>
              <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#d3a94a] mb-1 sm:mb-2 leading-tight drop-shadow-lg">
              Invest in a promising future with Amodha
              </h1>
              <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#d3a94a] mb-2 sm:mb-4 leading-tight drop-shadow-lg">
                Region
              </h1>
              <div className="mb-2 sm:mb-3">
                <span className="text-lg sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white drop-shadow-lg font-semibold">Exclusive </span>
                <span className="text-lg sm:text-base md:text-lg lg:text-xl xl:text-2xl text-[#d3a94a] font-bold drop-shadow-lg">Open Plots</span>
                <span className="text-lg sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white drop-shadow-lg font-semibold"> Near Hyderabad</span>
              </div>
              <div className="text-lg sm:text-lg md:text-xl lg:text-2xl text-[#d3a94a] font-bold mb-2 sm:mb-4 drop-shadow-lg">
              Burgula, Shadnagar
              </div>
              <div className="text-lg sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 text-white drop-shadow-lg font-semibold">
                Price Starts from ₹14,499/Sq.Yd.
              </div>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4">
                <button 
                  onClick={handleEnquireNow}
                  className="bg-[#b6821c] text-white px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3 rounded font-bold hover:bg-[#a6741a] transition text-xs sm:text-sm md:text-base shadow-lg"
                >
                  Enquire Now
                </button>
                <button 
                  onClick={handleDownloadBrochure}
                  className="bg-[#b6821c] text-white px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3 rounded font-bold hover:bg-[#a6741a] transition text-xs sm:text-sm md:text-base shadow-lg"
                >
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Stats Section */}
      <StatsSection />

      {/* Highlights Section */}
      <HighlightsSection />

      {/* Amenities Section */}
      <AmenitiesSection />

      {/* Layout Map Section */}
      <LayoutMapSection />

      {/* Middle Banner Section */}
      <section className="w-full bg-white py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg--to-r from-green-700 to-green-600 rounded-2xl overflow-hidden shadow-2xl">
            <div className="flex flex-col lg:flex-row items-center">
              {/* Content Side */}
            </div>
          </div>
        </div>
      </section>

      {/* Popup Contact Form Modal - Appears in Center */}
      {isFormOpen && (
        <div 
          className="fixed inset-0 modal-backdrop flex items-center justify-center z-[9999] p-3 sm:p-4"
        >
          <div 
            className="bg-white rounded-lg shadow-2xl max-w-[85vw] sm:max-w-2xl w-full max-h-[80vh] sm:max-h-[90vh] overflow-y-auto border border-gray-200 transform transition-all duration-300 scale-100"
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center p-3 sm:p-6 border-b">
              <h2 className="text-lg sm:text-2xl font-bold text-gray-800">Contact Us</h2>
              <button 
                onClick={closeForm}
                className="text-gray-500 hover:text-gray-700 text-lg sm:text-2xl font-bold"
              >
                ×
              </button>
            </div>
            
            {/* Modal Body - Contact Form */}
            <div className="p-3 sm:p-6">
              <form onSubmit={handleFormSubmit} className="space-y-2 sm:space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                    className="w-full px-2 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#b6821c] text-sm sm:text-base"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    required
                    className="w-full px-2 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#b6821c] text-sm sm:text-base"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    className="w-full px-2 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B8956A] text-sm sm:text-base"
                  />
                  <input
                    type="text"
                    name="project"
                    placeholder="Project Interested"
                    required
                    className="w-full px-2 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B8956A] text-sm sm:text-base"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4">
                  <input
                    type="text"
                    name="budget"
                    placeholder="What is your budget?"
                    required
                    className="w-full px-2 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B8956A] text-sm sm:text-base"
                  />
                  <input
                    type="text"
                    name="timeline"
                    placeholder="How soon are you looking to buy?"
                    required
                    className="w-full px-2 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B8956A] text-sm sm:text-base"
                  />
                </div>
                <input
                  type="text"
                  name="location"
                  placeholder="Where are you based out currently?"
                  required
                  className="w-full px-2 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B8956A] text-sm sm:text-base"
                />
                <textarea
                  name="comments"
                  placeholder="Additional Comments/Remarks"
                  className="w-full px-2 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B8956A] text-sm sm:text-base"
                  rows="3"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-[#B8956A] text-white px-3 sm:px-8 py-2 sm:py-4 rounded-lg font-bold hover:bg-[#A6845A] transition-colors shadow-lg text-sm sm:text-base"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LandingPage; 
