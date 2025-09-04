'use client';
import React from 'react';

const StatsSection = () => {
  return (
    <section className="w-full bg-white py-4 sm:py-6 -mt-16 sm:-mt-16 md:-mt-12 lg:-mt-10">
      <div className="max-w-6xl mx-auto px-3 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-6 md:gap-12 text-center justify-items-center">
          <div>
            <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#1F2937] leading-tight">50 Acres<br/><span className="text-base sm:text-lg md:text-xl font-normal">Mega Project</span></div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#1F2937]">LP, DTCP & RERA<br/><span className="text-base sm:text-lg md:text-xl font-normal">Approved Layout</span></div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#1F2937] leading-tight">Flexible<br/><span className="text-base sm:text-lg md:text-xl font-normal">Plot Sizes</span></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;


