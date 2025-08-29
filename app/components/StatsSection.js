'use client';
import React from 'react';

const StatsSection = () => {
  return (
    <section className="w-full bg-white py-12 -mt-8 md:-mt-17">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div>
            <div className="text-1xl md:text-2xl font-extrabold text-[#1F2937] leading-tight">50 Acres<br/>Mega Project</div>
          </div>
          <div>
            <div className="text-1xl md:text-2xl font-extrabold text-[#1F2937]">LP, DTCP & RERA Approved Layout</div>
          </div>
          <div>
            <div className="text-1xl md:text-2xl font-extrabold text-[#1F2937] leading-tight">Flexible<br/>Plot Sizes</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;


