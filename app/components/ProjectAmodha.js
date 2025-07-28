'use client';
import React, { useState } from 'react';
import ContactModal from './ContactModal';

const ProjectAmodha = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="amodha" className="w-full bg-white py-20 font-[Optima] scroll-mt-28">
        <h1 className="text-5xl md:text-5xl font text-[#b68a5e] font-[Optima] text-left mb-12 pl-18">Projects</h1>
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Image */}
            <div className="flex-1 w-full md:w-1/2 relative min-h-[250px] md:min-h-[400px] px-2 md:px-0">
              {/* Bottom Image (offset down and right) */}
              <img
                src="/amodha1.jpg"
                alt="Amodha Bottom"
                className="absolute left-25 md:left-12 top-19 md:top-50 w-2/3 md:w-4/5 aspect-square rounded-lg shadow-md md:shadow-2xl shadow-[#b68a5e] z-0 object-cover"
              />
              {/* Top Image (offset up and left, overlapping) */}
              <img
                src="/amodha.jpg"
                alt="Amodha Top"
                className="absolute left-0 md:left-0 top-0 md:-ml-36 w-2/3 md:w-4/5 aspect-square rounded-lg shadow-md md:shadow-2xl shadow-[#b68a5e] z-10 object-cover"
              />
            </div>
            {/* Content */}
            <div className="flex-1 w-full md:w-1/2 text-center md:text-left mt-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#b68a5e] mb-4">Amodha</h2>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">Invest in a promising future!</h3>
              <p className="text-base md:text-lg text-gray-700 mb-6">
                Secure your future today with <span className="font-bold text-[#b68a5e]">Amodha</span> - Your Ticket to a Prosperous and Serene Future.<br />
                Open plots near Hyderabad are selling fast—and Amodha is leading the way.
              </p>
              <div className="bg-[#f9f6f1] rounded-lg p-4 mb-6">
                <p className="text-base font-semibold text-[#b68a5e] mb-2">💰 Book your Plot today &amp; get <span className="underline">Exclusive Discounts</span> on early bookings!</p>
                <h4 className="text-base font-bold text-gray-800 mb-3 mt-4">WHY AMODHA?</h4>
                <ul className="text-left text-gray-700 mb-4 space-y-2 max-w-md mx-auto md:mx-0">
                  <li>🔐 <span className="font-medium">LP, DTCP and RERA approved</span></li>
                  <li>🏡 Secure Location | Guarded Community | Clear Documentation | CCTV surveillance</li>
                  <li>🏞️ Massive clubhouse in 633 Sq yards and Children's play area &amp; parks</li>
                  <li>📍 Strategically located near Hyderabad’s expansion belt</li>
                </ul>
                <p className="text-base font-semibold text-[#b68a5e] mb-2">A lifetime opportunity awaits - <span className="underline">Book now!</span></p>
              </div>
              <div className="flex flex-col md:flex-row items-center md:justify-start gap-4 mt-6">
                <span className="text-gray-700 text-base">📍 Burgula, Shadnagar, Hyderabad</span>
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

export default ProjectAmodha; 
