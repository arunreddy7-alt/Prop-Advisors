'use client';
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { emailjsConfig } from '../config/emailjs';

const Footer = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    const formData = new FormData(e.target);
    const templateParams = {
      from_name: formData.get('name'),
      from_email: formData.get('email'),
      from_phone: formData.get('phone'),
      project_interested: formData.get('project'),
      budget: formData.get('budget'),
      timeline: formData.get('timeline'),
      location: formData.get('location'),
      comments: formData.get('comments'),
      to_name: 'Amodha Team'
    };

    try {
      const result = await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        templateParams,
        emailjsConfig.publicKey
      );

      if (result.status === 200) {
        setSubmitStatus('success');
        e.target.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
  <footer id="contact" className="w-full bg-[#f7e3b5] text-black py-10 font-[Optima] mt-0">
    <div className="max-w-7xl mx-auto px-4 md:px-10">
      {/* Headings */}
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
          A lifetime opportunity awaits - Book now!
        </h2>
      </div>

      {/* Content Layout */}
      <div className="flex justify-center">
        {/* Centered Form */}
        <div className="w-full max-w-4xl space-y-6">
          <h2 className="text-xl md:text-2xl font-bold text-center">
            Contact Us
          </h2>
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="w-full px-4 py-3 rounded-lg border border-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                className="w-full px-4 py-3 rounded-lg border border-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full px-4 py-3 rounded-lg border border-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <input
                type="text"
                name="project"
                placeholder="Project Interested"
                required
                className="w-full px-4 py-3 rounded-lg border border-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="budget"
                placeholder="What is your budget?"
                required
                className="w-full px-4 py-3 rounded-lg border border-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <input
                type="text"
                name="timeline"
                placeholder="How soon are you looking to buy?"
                required
                className="w-full px-4 py-3 rounded-lg border border-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <input
              type="text"
              name="location"
              placeholder="Where are you based out currently?"
              required
              className="w-full px-4 py-3 rounded-lg border border-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <textarea
              name="comments"
              placeholder="Additional Comments/Remarks"
              className="w-full px-4 py-3 rounded-lg border border-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
              rows="4"
            ></textarea>
            
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                Thank you! Your message has been sent successfully. We will contact you soon.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                Sorry, there was an error sending your message. Please try again.
              </div>
            )}
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#b6821c] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#A6845A] transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Submit'}
            </button>
          </form>
          
          {/* Logo and Contact Information */}
          <div className="mt-12 text-center">
            <div className="mb-6">
              <img 
                src="/logo.png" 
                alt="Prop Advisors Logo" 
                className="mx-auto w-32 h-32 filter brightness-0"
              />
            </div>
            <div className="space-y-2 text-black">
              <p className="text-lg font-semibold">Contact No - <a href="tel:9059911335" className="text-[#b6821c] underline">9059911335</a></p>
              <p className="text-lg font-semibold">Address - H No 6-1-18 Provident Homes, Pkw-t08-609 Bhavani Colony, Katedan, Rajendranagar, Rangareddy, Hyderabad, India, Telangana</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
