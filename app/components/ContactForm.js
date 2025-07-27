'use client';
import React, { useState } from 'react';

const ContactForm = () => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    project: '',
    budget: '',
    timeline: '',
    location: '',
    comments: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send to API or show a message)
    alert('Thank you for your enquiry!');
  };

  return (
    <section id="contact-form" className="w-full bg-[#f9f6f1] py-16 font-[Optima] scroll-mt-24">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font text-[#b68a5e] mb-4 text-center">Get In Touch</h2>
        <p className="text-center text-gray-700 mb-8">Please fill out the form below and our team will get back to you promptly.</p>
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow p-8 grid gap-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-2">Name</label>
              <input type="text" name="name" value={form.name} onChange={handleChange} required className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-[#b68a5e]" />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Phone Number</label>
              <input type="tel" name="phone" value={form.phone} onChange={handleChange} required className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-[#b68a5e]" />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-[#b68a5e]" />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Project Interested</label>
              <input type="text" name="project" value={form.project} onChange={handleChange} required className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-[#b68a5e]" />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">What is your budget?</label>
              <input type="text" name="budget" value={form.budget} onChange={handleChange} className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-[#b68a5e]" />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">How soon are you looking to buy?</label>
              <input type="text" name="timeline" value={form.timeline} onChange={handleChange} className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-[#b68a5e]" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-700 mb-2">Where are you based out currently?</label>
              <input type="text" name="location" value={form.location} onChange={handleChange} className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-[#b68a5e]" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-700 mb-2">Additional Comments/Remarks</label>
              <textarea name="comments" value={form.comments} onChange={handleChange} rows={3} className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-[#b68a5e]" />
            </div>
          </div>
          <button type="submit" className="bg-[#b68a5e] text-white font-bold px-8 py-3 rounded-full shadow hover:bg-[#a67c52] transition mx-auto mt-4">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm; 