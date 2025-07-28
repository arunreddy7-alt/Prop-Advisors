'use client';
import React, { useState } from 'react';
import ContactModal from './ContactModal';

const ProjectAdoraDeGoa = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="adoradegoa" className="w-full bg-white py-10 font-[Optima] scroll-mt-28">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Image */}
            <div className="flex-1 w-full md:w-1/2 relative min-h-[250px] md:min-h-[400px] px-2 md:px-0">
              {/* Bottom Image (offset down and right) */}
              <img
                src="/adoradegoa1.jpg"
                alt="Adora De Goa Bottom"
                className="absolute left-25 md:left-12 top-19 md:top-50 w-2/3 md:w-4/5 aspect-square rounded-lg shadow-md md:shadow-2xl shadow-[#b68a5e] z-0 object-cover"
              />
              {/* Top Image (offset up and left, overlapping) */}
              <img
                src="/adoradegoa.jpg"
                alt="Adora De Goa Top"
                className="absolute left-0 md:left-0 top-0 md:-ml-36 w-2/3 md:w-4/5 aspect-square rounded-lg shadow-md md:shadow-2xl shadow-[#b68a5e] z-10 object-cover"
              />
            </div>
            {/* Content */}
            <div className="flex-1 w-full md:w-1/2 text-center md:text-left mt-20">
              <h2 className="text-2xl md:text-3xl font-bold text-[#b68a5e] mb-4">Adora De Goa</h2>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">Own a Piece of Paradise – With High Returns</h3>
              <p className="text-base md:text-lg text-gray-700 mb-6">
                Live the Goan Dream with <span className="font-bold text-[#b68a5e]">Adora de Goa</span> – Where Every Day Feels Like a Holiday! 🏖️<br />
                Own a slice of paradise in Goa’s most sought-after residential destination 🌟<br />
                Book your Home Today &amp; Get Assured Discounts! <span className="font-bold">(Limited Period Offer)</span>
              </p>
              <div className="bg-[#f9f6f1] rounded-lg p-4 mb-6">
                <h4 className="text-base font-bold text-gray-800 mb-3 mt-4">WHY ADORA DE GOA?</h4>
                <ul className="text-left text-gray-700 mb-4 space-y-2 max-w-md mx-auto md:mx-0">
                  <li>🏢 Premium Residences with Resort-style Amenities</li>
                  <li>🏖️ Just 10 mins from Goa Airport &amp; Close to Popular Beaches</li>
                  <li>🏊 Iconic Blu Lagoon Pool, Sky Gardens &amp; World-Class Clubhouse</li>
                  <li>🔐 Gated Community | 24x7 Security | Hassle-free Property Management</li>
                  <li>📈 High Rental Potential &amp; Investment Appreciation</li>
                </ul>
                <p className="text-base font-semibold text-[#b68a5e] mb-2">✨ Holiday Living. Everyday. Only at Adora de Goa.</p>
              </div>
              <div className="flex flex-col md:flex-row items-center md:justify-start gap-4 mt-6">
                <span className="text-gray-700 text-base">📍 Dabolim, Central Goa – Where Luxury Meets Leisure</span>
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

export default ProjectAdoraDeGoa; 
