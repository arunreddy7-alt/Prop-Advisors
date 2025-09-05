'use client';
import React, { useState, useEffect } from 'react';

const AmenitiesSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const amenities = [
    {
      icon: "🏛️",
      title: "Elegant Entrance Arch",
    },
    {
      icon: "🛣️",
      title: "40 & 33 Ft. Roads",
    },
    {
      icon: "🎠",
      title: "Children Play Area & Landscaping Parks",
    },
    {
      icon: "⚡",
      title: "Underground Electricity",
    },
    {
      icon: "🏢",
      title: "633 Sq.Yds. Clubhouse",
    },
    {
      icon: "🏏",
      title: "Box Cricket & Shuttle Court",
    },
    {
      icon: "👁️",
      title: "24x7 Surveillance",
    },
    {
      icon: "🌊",
      title: "Underground Drainage Lines",
    }
  ];

  // Create infinite loop by duplicating amenities
  const infiniteAmenities = [...amenities, ...amenities, ...amenities];
  const slidesPerView = 5;

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => prev + 1);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => prev + 1);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => prev - 1);
  };

  const getCurrentAmenities = () => {
    const startIndex = currentSlide % amenities.length;
    return infiniteAmenities.slice(startIndex, startIndex + slidesPerView);
  };

  return (
    <section id="amenities" className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-black mb-12">
          Amenities
        </h2>

        {/* Amenities Slider */}
        <div className="relative">
          <div className="flex gap-6 overflow-hidden">
            {getCurrentAmenities().map((amenity, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-64 bg-[#f7e3b5] rounded-xl p-6 text-black shadow-lg"
              >
                <div className="text-4xl mb-4 text-center">{amenity.icon}</div>
                <h3 className="text-lg font-semibold mb-2 text-center">{amenity.title}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows - Below Boxes */}
        <div className="flex justify-between mt-4">
          <button 
            onClick={prevSlide}
            className="w-12 h-12 bg-[#f7e3b5] rounded-full flex items-center justify-center text-black hover:bg-[#A6845A] transition-colors shadow-lg"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button 
            onClick={nextSlide}
            className="w-12 h-12 bg-[#f7e3b5] rounded-full flex items-center justify-center text-black hover:bg-[#A6845A] transition-colors shadow-lg"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;