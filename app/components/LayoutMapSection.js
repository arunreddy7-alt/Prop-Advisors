'use client';
import React, { useState, useEffect } from 'react';

const LayoutMapSection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleEnquireNow = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
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
      <section id="layout" className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Side - Image */}
            <div className="relative w-full h-[28rem] bg-gray-100 rounded-lg overflow-hidden">
              <img 
                src="/rectangle-image.png" 
                alt="Rectangle Image" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Right Side - Promotional Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight text-black">
                Green Investment for Your Dream Home Future in Hyderabad
                </h2>
                
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Strategically located near Hyderabad’s expansion belt (Burgula Shadnagar), Amodha is the perfect choice if you are looking for a peaceful yet well-connected place to build your home. Whether you wish to construct your dream house or invest for a greater ROI, Amodha offers premium open plots surrounded by greenery and modern infrastructure, making it one of the most promising destinations for your future.
                </p>
              </div>
              
              {/* Call-to-Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleEnquireNow}
                  className="bg-[#B8956A] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#A6845A] transition-colors shadow-lg"
                >
                  Enquire Now
                </button>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* New Section - Location Highlights */}
      <section className="w-full py-16 bg-white relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[#f8f9fa] opacity-50"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23B8956A' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 md:px-10 z-10">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block bg-[#B8956A] text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
              LOCATION HIGHLIGHTS
            </div>
            <h2 className="text-1xl md:text-5xl font-bold text-gray-900 mb-4">
              Everything You Need is <br/>
              <span className="text-[#B8956A]">Just Around the Corner</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Strategic connectivity to major landmarks and amenities makes Amodha the perfect choice for your dream home
            </p>
          </div>

          {/* Location Timeline */}
          <div className="relative">
            {/* Center Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#B8956A] to-transparent hidden lg:block"></div>
            
            <div className="space-y-12">
              {/* Row 1 */}
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/2 lg:pr-8 text-right">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-[#B8956A] hover:shadow-xl transition-shadow">
                    <div className="flex items-center justify-end mb-3">
                      <span className="text-2xl mr-3">🏢</span>
                      <h3 className="text-xl font-bold text-gray-900">Microsoft Data Centre</h3>
                    </div>
                    <p className="text-gray-600 text-right">
                      World-class technology infrastructure ensuring high-speed connectivity and modern amenities for your digital lifestyle.
                    </p>
                  </div>
                </div>
                
                <div className="lg:w-4 lg:h-4 bg-[#B8956A] rounded-full shadow-lg hidden lg:block"></div>
                
                <div className="lg:w-1/2 lg:pl-8 text-left">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-[#B8956A] hover:shadow-xl transition-shadow">
                    <div className="flex items-center mb-3">
                      <span className="text-2xl mr-3">🏥</span>
                      <h3 className="text-xl font-bold text-gray-900">JIMS Hospital</h3>
                    </div>
                    <p className="text-gray-600">
                      Premium healthcare facility providing comprehensive medical services for your family's well-being and peace of mind.
                    </p>
                  </div>
                </div>
              </div>

              {/* Row 2 */}
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/2 lg:pr-8 text-right">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-[#B8956A] hover:shadow-xl transition-shadow">
                    <div className="flex items-center justify-end mb-3">
                      <span className="text-2xl mr-3">🗽</span>
                      <h3 className="text-xl font-bold text-gray-900">Statue of Equality</h3>
                    </div>
                    <p className="text-gray-600 text-right">
                      Iconic landmark and cultural center, perfect for family outings and spiritual experiences.
                    </p>
                  </div>
                </div>
                
                <div className="lg:w-4 lg:h-4 bg-[#B8956A] rounded-full shadow-lg hidden lg:block"></div>
                
                <div className="lg:w-1/2 lg:pl-8 text-left">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-[#B8956A] hover:shadow-xl transition-shadow">
                    <div className="flex items-center mb-3">
                      <span className="text-2xl mr-3">🏢</span>
                      <h3 className="text-xl font-bold text-gray-900">Global MNCs</h3>
                    </div>
                    <p className="text-gray-600">
                      Amazon, P&G, Johnson & Johnson and other Fortune 500 companies creating excellent job opportunities.
                    </p>
                  </div>
                </div>
              </div>

              {/* Row 3 */}
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/2 lg:pr-8 text-right">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-[#B8956A] hover:shadow-xl transition-shadow">
                    <div className="flex items-center justify-end mb-3">
                      <span className="text-2xl mr-3">🦁</span>
                      <h3 className="text-xl font-bold text-gray-900">National Zoological Park</h3>
                    </div>
                    <p className="text-gray-600 text-right">
                      Perfect weekend destination for family entertainment and educational experiences with wildlife.
                    </p>
                  </div>
                </div>
                
                <div className="lg:w-4 lg:h-4 bg-[#B8956A] rounded-full shadow-lg hidden lg:block"></div>
                
                <div className="lg:w-1/2 lg:pl-8 text-left">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-[#B8956A] hover:shadow-xl transition-shadow">
                    <div className="flex items-center mb-3">
                      <span className="text-2xl mr-3">✈️</span>
                      <h3 className="text-xl font-bold text-gray-900">International Airport</h3>
                    </div>
                    <p className="text-gray-600">
                      Rajiv Gandhi International Airport provides seamless connectivity to domestic and international destinations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#B8956A] mb-2">15</div>
              <div className="text-sm text-gray-600">Minutes to Airport</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#B8956A] mb-2">25</div>
              <div className="text-sm text-gray-600">Minutes to City Center</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#B8956A] mb-2">10</div>
              <div className="text-sm text-gray-600">Major Landmarks</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#B8956A] mb-2">24/7</div>
              <div className="text-sm text-gray-600">Connectivity</div>
            </div>
          </div>
        </div>
      </section>

      {/* New Section */}

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
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B8956A]"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B8956A]"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B8956A]"
                  />
                  <input
                    type="text"
                    placeholder="Project Interested"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B8956A]"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="What is your budget?"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B8956A]"
                  />
                  <input
                    type="text"
                    placeholder="How soon are you looking to buy?"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B8956A]"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Where are you based out currently?"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B8956A]"
                />
                <textarea
                  placeholder="Additional Comments/Remarks"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#B8956A]"
                  rows="4"
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

export default LayoutMapSection;
