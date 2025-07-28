'use client';
import React, { useState } from 'react';
import ContactModal from './ContactModal';

const ProjectShriRamGharunda = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="shriramgharunda" className="w-full bg-white py-20 font-[Optima] scroll-mt-28">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            {/* Image */}
            <div className="flex-1 w-full md:w-1/2 relative min-h-[250px] md:min-h-[400px] px-2 md:px-0">
              <div className="md:translate-x-24">
                {/* Bottom Image (offset down and right) */}
                <img
                  src="/shriramgharunda1.jpg"
                  alt="Shri Ram Gharunda Bottom"
                  className="relative left-25 md:left-12 top-19 md:top-35 w-2/3 md:w-4/5 aspect-square rounded-lg shadow-md md:shadow-2xl shadow-[#b68a5e] z-0 object-cover"
                />
                {/* Top Image (offset up and left, overlapping) */}
                <img
                  src="/shriramgharunda.jpg"
                  alt="Shri Ram Gharunda Top"
                  className="relative left-0 md:left-16 -top-5 md:-top-9 md:-ml-36 w-2/3 md:w-4/5 aspect-square rounded-lg shadow-md md:shadow-2xl shadow-[#b68a5e] z-10 object-cover"
                />
              </div>
            </div>
            {/* Content */}
            <div className="flex-1 w-full md:w-1/2 text-center md:text-left mt-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#b68a5e] mb-4">Shri Ram Gharunda</h2>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">Your Dream Home Awaits at Shri Ram Gharunda</h3>
              <p className="text-base md:text-lg text-gray-700 mb-6">
                Start your new journey with prosperity and comfort at <span className="font-bold text-[#b68a5e]">Shri Ram Gharunda’s</span> finest 2&amp;3 BHK Apartments.<br />
                Invest in your future and enjoy peaceful living in the spacious and modern flats.
              </p>
              <div className="bg-[#f9f6f1] rounded-lg p-4 mb-6">
                <h4 className="text-base font-bold text-gray-800 mb-3 mt-4">Key Highlights:</h4>
                <ul className="text-left text-gray-700 mb-4 space-y-2 max-w-md mx-auto md:mx-0">
                  <li>🏫 Near to Pioneer School, Ayyapa Temple</li>
                  <li>🔒 Secure Guarded Location</li>
                  <li>🏡 Ready-to-move-in 2 &amp; 3 BHKs</li>
                  <li>✨ Premium False Ceilings &amp; Lift</li>
                  <li>💧 Manjeera Water</li>
                </ul>
                <p className="text-base font-semibold text-[#b68a5e] mb-2">Book Your Dream Home Today &amp; Avail <span className="underline">Early Bird Discounts!</span></p>
              </div>
              <div className="flex flex-col md:flex-row items-center md:justify-start gap-4 mt-6">
                <span className="text-gray-700 text-base">📍 Katedhan (Beside Pioneer School), Rajendra Nagar, Hyderabad.</span>
              </div>
              <div className="flex flex-row gap-4 mt-4">
                <a href="tel:9059911335" className="bg-[#b68a5e] text-white px-6 py-3 rounded font-bold text-base shadow hover:bg-[#a67c52] transition whitespace-nowrap">Call now: 9059911335</a>
                <button onClick={() => setIsModalOpen(true)} className="bg-[#b68a5e] text-white px-6 py-3 rounded font-bold text-base shadow hover:bg-[#a67c52] transition">Enquire</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default ProjectShriRamGharunda; 
