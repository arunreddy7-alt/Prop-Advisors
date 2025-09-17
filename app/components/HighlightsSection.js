'use client';
import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { emailjsConfig } from '../config/emailjs';

const HighlightsSection = () => {
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
      to_name: 'Amodha Team',
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

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when form is open
  useEffect(() => {
    emailjs.init(emailjsConfig.publicKey);
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
      <section id="about" className="w-full bg-[#f7e3b5] py-16 mt-6 md:mt-10">
      <div className="max-w-7xl mx-auto px-4 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left visual placeholder with diamond shapes */}
        <div className="relative hidden lg:block">
          <div className="w-80 h-80 ml-8 mt-10 relative">
            {/* Main diamond */}
            <div className="w-full h-full bg-green-500 transform rotate-45 overflow-hidden border-4 border-white shadow-lg">
              <img 
                src="/image.jpg" 
                className="w-full h-full object-cover transform -rotate-45 scale-150"
              />
            </div>
            {/* Small diamond */}
            <div className="absolute -bottom-10 -right-19 w-50 h-50 bg-[#B8956A] transform rotate-45 shadow-lg overflow-hidden border-2 border-white">
              <img 
                src="/amodha-logo.jpg" 
                className="w-full h-full object-cover transform -rotate-45 scale-150"
              />
            </div>
          </div>
        </div>
        
        {/* Mobile responsive diamond shapes */}
        <div className="relative block lg:hidden">
          <div className="w-56 h-56 ml-15 mt-3 relative">
            {/* Main diamond */}
            <div className="w-full h-full bg-green-500 transform rotate-45 overflow-hidden border-4 border-white shadow-lg">
              <img 
                src="/image.jpg" 
                className="w-full h-full object-cover transform -rotate-45 scale-150"
              />
            </div>
            {/* Small diamond */}
            <div className="absolute -bottom-7 -right-9 w-30 h-30 bg-[#B8956A] transform rotate-45 shadow-lg overflow-hidden border-2 border-white">
              <img 
                src="/amodha-logo.jpg" 
                className="w-full h-full object-cover transform -rotate-45 scale-150"
              />
            </div>
          </div>
        </div>

        {/* Right content */}
        <div className="text-[#1F2937] space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#8d5c14] leading-tight md:leading-tight">
            Embrace your ticket to a prosperous & serene future!
          </h2>
          <p className="text-black/80 leading-relaxed">
            Amodha offers premium open plots in the rapidly growing locality of Burgula - Shadnagar, near Hyderabad, a prime destination with excellent connectivity to the Hyderabad–Bangalore Highway and Rajiv Gandhi International Airport. With secured 24x7 surveillance, landscaped parks, 633 Sq.Yds. Clubhouse, and a dedicated children’s play area, Amodha blends safety and modern infrastructure with natural surroundings. Surrounded by upcoming developments and infrastructural growth, Amodha is currently one of the most promising locations for investment near Hyderabad.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={handleEnquireNow}
              className="bg-[#b6821c] text-white px-6 py-3 rounded font-bold hover:bg-[#b6821c] transition"
            >
              Enquire Now
            </button>
          </div>

          {/* Bullet grid - show on right for mobile, moved below for desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:hidden">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center shrink-0">🏠</div>
              <p className="font-semibold leading-snug">2 mins from Burgula SEZ</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center shrink-0">🛣️</div>
              <p className="font-semibold leading-snug">1 min from RRR</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center shrink-0">🚆</div>
              <p className="font-semibold leading-snug">2 mins from Burgula Railway Station</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center shrink-0">🛣️</div>
              <p className="font-semibold leading-snug">3 mins to Bangalore Highway NH44</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center shrink-0">🏭</div>
              <p className="font-semibold leading-snug">7 mins to Bangalore SEZ</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center shrink-0">🏭</div>
              <p className="font-semibold leading-snug">10 mins to Rajpur & Polepalle SEZ</p>
            </div>
          </div>
        </div>
      </div>

      {/* Full-width bullet grid below on large screens */}
      <div className="hidden lg:grid max-w-7xl mx-auto px-4 md:px-10 grid-cols-2 gap-8 mt-8">
        <div className="flex items-center gap-5">
                        <div className="w-14 h-14 rounded-full ring-2 ring-[#1F2937] bg-transparent flex items-center justify-center shrink-0">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
              </div>
          <p className="text-base md:text-lg font-normal leading-snug text-[#1F2937]">2 mins from Burgula SEZ</p>
        </div>
        <div className="flex items-center gap-5">
          <div className="w-14 h-14 rounded-full ring-2 ring-[#1F2937] bg-transparent flex items-center justify-center text-xl shrink-0">🛣️</div>
          <p className="text-base md:text-lg font-normal leading-snug text-[#1F2937]">1 min from RRR</p>
        </div>
        <div className="flex items-center gap-5">
          <div className="w-14 h-14 rounded-full ring-2 ring-[#1F2937] bg-transparent flex items-center justify-center text-xl shrink-0">🚆</div>
          <p className="text-base md:text-lg font-normal leading-snug text-[#1F2937]">2 mins from Burgula Railway Station</p>
        </div>
        <div className="flex items-center gap-5">
          <div className="w-14 h-14 rounded-full ring-2 ring-[#1F2937] bg-transparent flex items-center justify-center text-xl shrink-0">🛣️</div>
          <p className="text-base md:text-lg font-normal leading-snug text-[#1F2937]">3 mins to Bangalore Highway NH44</p>
        </div>
        <div className="flex items-center gap-5">
          <div className="w-14 h-14 rounded-full ring-2 ring-[#1F2937] bg-transparent flex items-center justify-center text-xl shrink-0">🏭</div>
          <p className="text-base md:text-lg font-normal leading-snug text-[#1F2937]">7 mins to Bangalore SEZ</p>
        </div>
        <div className="flex items-center gap-5">
          <div className="w-14 h-14 rounded-full ring-2 ring-[#1F2937] bg-transparent flex items-center justify-center text-xl shrink-0">🏭</div>
          <p className="text-base md:text-lg font-normal leading-snug text-[#1F2937]">10 mins to Rajpur & Polepalle SEZ</p>
        </div>
      </div>
    </section>

      {/* Popup Contact Form Modal - Appears in Center */}
      {isFormOpen && (
        <div 
          className="fixed inset-0 modal-backdrop flex items-center justify-center z-[9999] p-4"
        >
          <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-200 transform transition-all duration-300 scale-100">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-2xl font-bold text-gray-800">Contact Us</h2>
              <button 
                onClick={closeForm}
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
              >
                ×
              </button>
            </div>
            
            {/* Modal Body - Contact Form */}
            <div className="p-6">
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B8956A]"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email ID"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B8956A]"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B8956A]"
                  />
                  <input
                    type="tel"
                    name="whatsapp"
                    placeholder="WhatsApp Number"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B8956A]"
                  />
                </div>
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B8956A]"
                />
                <div>
                  <p className="mb-2 font-medium">How soon are you looking to buy?</p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <label className="flex items-center gap-2 p-2 rounded-lg border border-gray-300 cursor-pointer hover:bg-gray-50">
                      <input type="radio" name="timeline" value="Immediately" required />
                      <span>Immediately</span>
                    </label>
                    <label className="flex items-center gap-2 p-2 rounded-lg border border-gray-300 cursor-pointer hover:bg-gray-50">
                      <input type="radio" name="timeline" value="Within 1 month" />
                      <span>Within 1 month</span>
                    </label>
                    <label className="flex items-center gap-2 p-2 rounded-lg border border-gray-300 cursor-pointer hover:bg-gray-50">
                      <input type="radio" name="timeline" value="Maybe later" />
                      <span>Maybe later</span>
                    </label>
                  </div>
                </div>
                <textarea
                  name="remarks"
                  placeholder="Remarks"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B8956A]"
                  rows="3"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-[#B8956A] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#A6845A] transition-colors shadow-lg"
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

export default HighlightsSection;


