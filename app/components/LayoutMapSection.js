'use client';
import React from 'react';

const LayoutMapSection = () => {
  return (
    <section id="layout-map" className="w-full py-16 relative bg-white">
      <div className="relative max-w-7xl mx-auto px-4 md:px-10 z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-[#d3a94a] font-serif text-5xl font-bold mb-6">
            LOCATION HIGHLIGHTS
          </div>
          <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight mt-14 drop-shadow-lg">
            Everything You Need is <br/>
            <span className="text-[#d3a94a]">Just Around the Corner</span>
          </h3>
          <p className="text-lg md:text-xl text-black/90 max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
            Strategic connectivity to major landmarks and amenities makes Amodha the perfect choice for your dream home
          </p>
        </div>

        {/* Location Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {/* Microsoft Data Centre */}
          <div className="group bg-black/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-white/20">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 bg-[#b6821c] rounded-xl flex items-center justify-center text-2xl mr-4 shadow-md">
                🏢
              </div>
              <h3 className="text-xl font-bold text-white">Microsoft Data Centre</h3>
            </div>
            <p className="text-white/70 leading-relaxed text-base">
              World-class technology infrastructure ensuring high-speed connectivity and modern amenities for your digital lifestyle.
            </p>
          </div>

          {/* JIMS Hospital */}
          <div className="group bg-black/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-white/20">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 bg-[#b6821c] rounded-xl flex items-center justify-center text-2xl mr-4 shadow-md">
                🏥
              </div>
              <h3 className="text-xl font-bold text-white">JIMS Hospital</h3>
            </div>
            <p className="text-white/70 leading-relaxed text-base">
              Premium healthcare facility providing comprehensive medical services for your family's well-being and peace of mind.
            </p>
          </div>

          {/* Statue of Equality */}
          <div className="group bg-black/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-white/20">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 bg-[#b6821c] rounded-xl flex items-center justify-center text-2xl mr-4 shadow-md">
                🗽
              </div>
              <h3 className="text-xl font-bold text-white">Statue of Equality</h3>
            </div>
            <p className="text-white/70 leading-relaxed text-base">
              Iconic landmark and cultural center, perfect for family outings and spiritual experiences.
            </p>
          </div>

          {/* Global MNCs */}
          <div className="group bg-black/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-white/20">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 bg-[#b6821c] rounded-xl flex items-center justify-center text-2xl mr-4 shadow-md">
                🏢
              </div>
              <h3 className="text-xl font-bold text-white">Global MNCs</h3>
            </div>
            <p className="text-white/70 leading-relaxed text-base">
              Amazon, P&G, Johnson & Johnson and other Fortune 500 companies creating excellent job opportunities.
            </p>
          </div>

          {/* National Zoological Park */}
          <div className="group bg-black/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-white/20">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 bg-[#b6821c] rounded-xl flex items-center justify-center text-2xl mr-4 shadow-md">
                🦁
              </div>
              <h3 className="text-xl font-bold text-white">National Zoological Park</h3>
            </div>
            <p className="text-white/70 leading-relaxed text-base">
              Perfect weekend destination for family entertainment and educational experiences with wildlife.
            </p>
          </div>

          {/* International Airport */}
          <div className="group bg-black/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-white/20">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 bg-[#b6821c] rounded-xl flex items-center justify-center text-2xl mr-4 shadow-md">
                ✈️
              </div>
              <h3 className="text-xl font-bold text-white">International Airport</h3>
            </div>
            <p className="text-white/70 leading-relaxed text-base">
              Rajiv Gandhi International Airport provides seamless connectivity to domestic and international destinations.
            </p>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center group">
            <div className="w-16 h-16 bg-[#b6821c] rounded-full flex items-center justify-center mx-auto mb-3 shadow-md group-hover:shadow-lg transition-all duration-300">
              <div className="text-2xl font-bold text-white">15</div>
            </div>
            <div className="text-base font-semibold text-black drop-shadow-lg">Minutes to Airport</div>
          </div>
          <div className="text-center group">
            <div className="w-16 h-16 bg-[#b6821c] rounded-full flex items-center justify-center mx-auto mb-3 shadow-md group-hover:shadow-lg transition-all duration-300">
              <div className="text-2xl font-bold text-white">25</div>
            </div>
            <div className="text-base font-semibold text-black drop-shadow-lg">Minutes to City Center</div>
          </div>
          <div className="text-center group">
            <div className="w-16 h-16 bg-[#b6821c] rounded-full flex items-center justify-center mx-auto mb-3 shadow-md group-hover:shadow-lg transition-all duration-300">
              <div className="text-2xl font-bold text-white">10</div>
            </div>
            <div className="text-base font-semibold text-black drop-shadow-lg">Major Landmarks</div>
          </div>
          <div className="text-center group">
            <div className="w-16 h-16 bg-[#b6821c] rounded-full flex items-center justify-center mx-auto mb-3 shadow-md group-hover:shadow-lg transition-all duration-300">
              <div className="text-2xl font-bold text-white">24/7</div>
            </div>
            <div className="text-base font-semibold text-black drop-shadow-lg">Connectivity</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LayoutMapSection;
