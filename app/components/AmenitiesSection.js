'use client';
import React, { useState, useEffect } from 'react';

const AmenitiesSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentGallerySlide, setCurrentGallerySlide] = useState(0);

  const amenities = [
    {
      image: "/amenities/entrance.jpg",
      title: "Elegant Entrance Arch",
    },
    {
      image: "/amenities/roads.jpg",
      title: "40 & 33 Ft. Roads",
    },
    {
      image: "/amenities/play-area.jpg",
      title: "Children Play Area & Landscaping Parks",
    },
    {
      image: "/amenities/electricity.jpg",
      title: "Underground Electricity",
    },
    {
      image: "/amenities/clubhouse.jpg",
      title: "633 Sq.Yds. Clubhouse",
    },
    {
      image: "/amenities/sports.jpg",
      title: "Box Cricket & Shuttle Court",
    },
    {
      image: "/amenities/surveillance.jpg",
      title: "24x7 Surveillance",
    },
    {
      image: "/amenities/drainage.jpg",
      title: "Underground Drainage Lines",
    }
  ];

  const galleryImages = [
    { src: "/img1.jpg", alt: "Amodha Project" },
    { src: "/img2.jpg", alt: "Project View" },
    { src: "/img3.jpg", alt: "Project Landscape" },
    { src: "/img4.jpg", alt: "Project Infrastructure" },
    { src: "/img5.jpg", alt: "Project Development" },
    { src: "/img6.jpg", alt: "Project Location" },
    { src: "/img7.jpg", alt: "Project Site" },
    { src: "/img8.jpg", alt: "Project Overview" },
    { src: "/img9.jpg", alt: "Project Amenities" }
  ];

  // Create infinite loop by duplicating amenities
  const infiniteAmenities = [...amenities, ...amenities, ...amenities];
  const slidesPerView = 5;
  
  // Create infinite loop for gallery
  const infiniteGalleryImages = [...galleryImages, ...galleryImages, ...galleryImages];
  const gallerySlidesPerView = 3;

  // Auto-slide effect for amenities
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => prev + 1);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  // Auto-slide effect for gallery
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGallerySlide((prev) => prev + 1);
    }, 2500); // Change slide every 2.5 second

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => prev + 1);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => prev - 1);
  };

  const nextGallerySlide = () => {
    setCurrentGallerySlide((prev) => prev + 1);
  };

  const prevGallerySlide = () => {
    setCurrentGallerySlide((prev) => prev - 1);
  };

  const getCurrentAmenities = () => {
    const startIndex = currentSlide % amenities.length;
    return infiniteAmenities.slice(startIndex, startIndex + slidesPerView);
  };

  const getCurrentGalleryImages = () => {
    const startIndex = currentGallerySlide % galleryImages.length;
    return infiniteGalleryImages.slice(startIndex, startIndex + gallerySlidesPerView);
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
              <div key={index} className="flex-shrink-0 w-64">
                <div className="w-64 h-40 bg-[#f7e3b5] rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={amenity.image}
                    alt={amenity.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-base font-semibold mt-3 text-center text-black">
                  {amenity.title}
                </h3>
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

      {/* Gallery Section */}
      <div className="mt-20">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-black mb-12">
          Project Gallery
        </h2>
        
        {/* Gallery Slider */}
        <div className="relative">
  <div className="flex gap-4 sm:gap-6 overflow-hidden justify-center">
    {getCurrentGalleryImages().map((image, index) => (
      <div 
        key={index} 
        className="flex-shrink-0 w-72 sm:w-80 md:w-96"  // smaller box on mobile
      >
        <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
          <img 
            src={image.src} 
            alt={image.alt} 
            className="w-full h-64 sm:h-72 md:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
        </div>
      </div>
    ))}
  </div>
</div>

          {/* Gallery Navigation Arrows - Below Images */}
          <div className="flex justify-between mt-2 max-w-[1200px] mx-auto px-2">
            <button 
              onClick={prevGallerySlide}
              className="w-12 h-12 bg-[#f7e3b5] rounded-full flex items-center justify-center text-black hover:bg-[#A6845A] transition-colors shadow-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button 
              onClick={nextGallerySlide}
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