'use client';
import React, { useState, useEffect, useRef } from 'react';
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
      whatsapp: formData.get('whatsapp'),
      city: formData.get('city'),
      timeline: formData.get('timeline'),
      remarks: formData.get('remarks'),
      comments: formData.get('remarks'),
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

  // Initialize EmailJS once
  useEffect(() => {
    emailjs.init(emailjsConfig.publicKey);
  }, []);

  // Open contact form when LayoutMapSection enters viewport
  const hasOpenedByScrollRef = useRef(false);
  useEffect(() => {
    if (hasOpenedByScrollRef.current) return;

    const sectionElement = document.querySelector('#contact');
    if (!sectionElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasOpenedByScrollRef.current) {
          hasOpenedByScrollRef.current = true;
          setIsFormOpen(true);
          observer.disconnect();
        }
      },
      { root: null, threshold: 0.25 }
    );

    observer.observe(sectionElement);
    return () => observer.disconnect();
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
          ? 'bg-[#f7e3b5]/95 shadow-lg py-0' 
          : 'bg-[#f7e3b5]/90 py-2 sm:py-4'
      }`}>
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/logo1.png"
            alt="Prop Advisors Logo"
            className="h-16 sm:h-16 md:h-20 w-auto filter brightness-0 transform scale-200"
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
  className="absolute bottom-28 sm:bottom-85 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-[95vw] sm:w-[90vw] max-w-[1250px] h-[450px] sm:h-[500px] md:h-[600px] lg:h-[700px] rounded-lg shadow-lg z-25 bg-cover bg-[position:30%_center] sm:bg-center relative overflow-hidden"
  style={{ backgroundImage: "url('/bg1.jpg')" }}
>
  {/* Mobile: top-to-bottom gradient */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent pointer-events-none sm:hidden"></div>

  {/* Desktop/tablet: side and partial top/bottom gradients */}
  <div className="hidden sm:block absolute left-0 top-0 h-full w-2/3 bg-gradient-to-r from-black/70 via-black/50 to-transparent pointer-events-none"></div>
  <div className="hidden sm:block absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-black/50 via-black/30 to-transparent pointer-events-none"></div>
  <div className="hidden sm:block absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/50 via-black/30 to-transparent pointer-events-none"></div>
  <div className="hidden sm:block absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-black/40 via-black/20 to-transparent pointer-events-none"></div>
</div>

{/* Background overlay section */}
<div className="absolute left-0 w-full h-full bg-[#f7e3b5] z-15 -top-60"></div>

        {/* Content */}
        <div className="absolute inset-0 flex items-start z-30 pt-65 sm:pt-7 sm:items-center">
          <div className="max-w-7xl mx-auto px-4 md:px-10 w-full">
            <div className="text-black max-w-2xl text-left ml-0 px-4 sm:px-0">
              <div className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-light italic mb-4 -mt-8" style={{ fontFamily: "'Calligraffitti', cursive" }}>
              </div>
              <div className="relative -translate-y-22 sm:-translate-y-4 md:-translate-y-5">
  <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#e6c86a] mb-2 sm:mb-2 leading-tight drop-shadow-lg">
    Invest in a promising future with Amodha
  </h1>
  <div className="mb-2 sm:mb-3">
    <span className="text-lg sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white drop-shadow-lg font-semibold">Exclusive </span>
    <span className="text-lg sm:text-base md:text-lg lg:text-xl xl:text-2xl text-[#e6c86a] font-bold drop-shadow-lg">Open Plots</span>
    <span className="text-lg sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white drop-shadow-lg font-semibold"> Near Hyderabad</span>
  </div>
</div>


              <div className="text-lg sm:text-lg md:text-xl lg:text-2xl text-[#e6c86a] font-bold mb-2 sm:mb-4 drop-shadow-lg">
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

      {/* Promotional Banner (after Amenities) */}
      <section id="layout" className="w-full py-12 sm:py-16 relative bg-cover bg-center" style={{ backgroundImage: "url('/background-image.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/30"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text */}
          <div className="text-white">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#e6c86a] leading-tight mb-4">
            Green Investment for Your Dream Home Future in Hyderabad
            </h2>
            <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6">
            Strategically located near Hyderabad’s expansion belt (Burgula Shadnagar), Amodha is the perfect choice if you are looking for a peaceful yet well-connected place to build your home. Whether you wish to construct your dream house or invest for a greater ROI, Amodha offers premium open plots surrounded by greenery and modern infrastructure, making it one of the most promising destinations for your future.
            </p>
            <div className="flex gap-3">
              <button onClick={handleEnquireNow} className="bg-[#b6821c] hover:bg-[#a6741a] text-white font-bold px-4 sm:px-6 py-2 sm:py-3 rounded shadow-lg text-sm sm:text-base">Enquire Now</button>
            </div>
          </div>
          {/* Image Card */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img src="/amodha.jpg" alt="Project visual" className="w-full h-64 sm:h-80 md:h-96 object-cover scale-110" />
            <div className="absolute inset-0 bg-black/25"></div>
          </div>
        </div>
      </section>

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
                    type="email"
                    name="email"
                    placeholder="Email ID"
                    className="w-full px-2 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#b6821c] text-sm sm:text-base"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    required
                    className="w-full px-2 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#b6821c] text-sm sm:text-base"
                  />
                  <input
                    type="tel"
                    name="whatsapp"
                    placeholder="WhatsApp Number"
                    required
                    className="w-full px-2 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#b6821c] text-sm sm:text-base"
                  />
                </div>
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  className="w-full px-2 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#b6821c] text-sm sm:text-base"
                />
                <div className="pt-1">
                  <p className="text-sm sm:text-base font-medium text-gray-700 mb-2">How soon are you looking to buy?</p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <label className="flex items-center gap-2 p-2 rounded-lg border border-gray-300 cursor-pointer hover:bg-gray-50">
                      <input type="radio" name="timeline" value="Immediately"  />
                      <span className="text-sm sm:text-base">Immediately</span>
                    </label>
                    <label className="flex items-center gap-2 p-2 rounded-lg border border-gray-300 cursor-pointer hover:bg-gray-50">
                      <input type="radio" name="timeline" value="Within 1 month" />
                      <span className="text-sm sm:text-base">Within 1 month</span>
                    </label>
                    <label className="flex items-center gap-2 p-2 rounded-lg border border-gray-300 cursor-pointer hover:bg-gray-50">
                      <input type="radio" name="timeline" value="Maybe later" />
                      <span className="text-sm sm:text-base">Maybe later</span>
                    </label>
                  </div>
                </div>
                <textarea
                  name="remarks"
                  placeholder="Remarks"
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