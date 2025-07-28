'use client';
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactModal = ({ isOpen, onClose }) => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const templateParams = {
        to_email: 'brandit3116@gmail.com',
        from_name: form.name,
        from_email: form.email,
        phone: form.phone,
        project: form.project,
        budget: form.budget,
        timeline: form.timeline,
        location: form.location,
        message: form.comments,
      };

      await emailjs.send(
        'service_a2436dp', // Your service ID
        'template_c583wrk', // Your template ID
        templateParams,
        'fxIq3mEsIuoKM-0nb' // Your EmailJS public key
      );

      alert('Thank you for your enquiry! We will get back to you soon.');
      setForm({
        name: '', phone: '', email: '', project: '',
        budget: '', timeline: '', location: '', comments: ''
      });
      onClose();
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to submit form. Please try again.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-transparent backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-[#b68a5e]">Get In Touch</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-2xl">&times;</button>
          </div>
          <form onSubmit={handleSubmit} className="grid gap-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-2">Name</label>
                <input type="text" name="name" value={form.name} onChange={handleChange} required className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-[#b68a5e] text-black" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Phone Number</label>
                <input type="tel" name="phone" value={form.phone} onChange={handleChange} required className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-[#b68a5e] text-black" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-[#b68a5e] text-black" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Project Interested</label>
                <input type="text" name="project" value={form.project} onChange={handleChange} required className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-[#b68a5e] text-black" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Budget</label>
                <input type="text" name="budget" value={form.budget} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-[#b68a5e] text-black" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Timeline</label>
                <input type="text" name="timeline" value={form.timeline} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-[#b68a5e] text-black" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-gray-700 mb-2">Location</label>
                <input type="text" name="location" value={form.location} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-[#b68a5e] text-black" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-gray-700 mb-2">Comments</label>
                <textarea name="comments" value={form.comments} onChange={handleChange} rows={3} className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-[#b68a5e] text-black" />
              </div>
            </div>
            <button type="submit" className="bg-[#b68a5e] text-white font-bold px-6 py-3 rounded-full shadow hover:bg-[#a67c52] transition mx-auto mt-4">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
