'use client';
import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    stars: '⭐️⭐️⭐️⭐️⭐️',
    text: 'Prop Advisors made the entire process effortless. From shortlisting properties to negotiating the deal, they were professional, responsive, and incredibly helpful throughout.',
    author: 'Ananya Mehta, First-Time Homebuyer',
  },
  {
    stars: '⭐️⭐️⭐️⭐️⭐️',
    text: 'As an NRI, I was hesitant about investing remotely. Prop Advisors gave me complete clarity, handled all the legal formalities, and helped me close a fantastic deal. Highly recommended!',
    author: 'Ravi Kumar, Real Estate Investor (Dubai)',
  },
  {
    stars: '⭐️⭐️⭐️⭐️⭐️',
    text: 'What stood out was their deep market knowledge and honest advice. No pushy sales talk—just solid guidance that helped me make a confident investment decision.',
    author: 'Vikram Desai, Commercial Property Buyer',
  },
  {
    stars: '⭐️⭐️⭐️⭐️⭐️',
    text: 'It felt more like working with a trusted friend than an agency. They really understood what I was looking for and delivered exactly that, without wasting my time.',
    author: 'Pooja Sharma, Apartment Buyer',
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 2000); // Change every 4 seconds
    return () => clearInterval(interval);
  }, [total]);

  return (
    <section className="w-full bg-[#f9f6f1] py-16 font-[Optima]">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font text-[#b68a5e] mb-10">Testimonials</h2>
        <div className="flex justify-center">
          <div
            className="bg-white rounded-lg shadow p-6 flex flex-col items-center w-full max-w-xl transition-opacity duration-500"
            key={current}
          >
            <div className="text-2xl mb-2">{testimonials[current].stars}</div>
            <p className="text-lg text-gray-800 mb-4 italic">"{testimonials[current].text}"</p>
            <div className="text-base font-semibold text-[#b68a5e]">— {testimonials[current].author}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 