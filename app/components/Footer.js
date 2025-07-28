'use client';
import React from 'react';

const Footer = () => (
  <footer className="w-full bg-[#c9a063] text-white py-10 font-[Optima] mt-0">
    <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
      {/* Contact Info - Left */}
      <div className="flex flex-col items-start md:items-start gap-2 md:w-1/3 order-2 md:order-2 text-left md:text-left w-full md:w-auto">
        <span className="font-semibold text-lg mt-3 mb-1">Address</span>
        <span className="max-w-xs">H No 6-1-18 Provident Homes, Pkw-t08-609 Bhavani Colony, Katedan, Rajendranagar, Rangareddy, Hyderabad, India, Telangana</span>
        <span className="font-semibold text-lg mb-1">Call Us</span>
        <a href="tel:+919059911335" className="underline">+91 9059911335</a>
        <div className="flex gap-3 mt-3">
          {/* Optional: Social Links */}
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.497 5.782 2.225 7.148 2.163 8.414 2.105 8.794 2.094 12 2.094m0-2.163C8.741 0 8.332.012 7.052.07 5.771.128 4.635.4 3.662 1.374c-.973.973-1.246 2.109-1.308 3.39C2.012 5.668 2 6.077 2 12c0 5.923.012 6.332.07 7.612.062 1.281.335 2.417 1.308 3.39.973.973 2.109 1.246 3.39 1.308C8.332 23.988 8.741 24 12 24s3.668-.012 4.948-.07c1.281-.062 2.417-.335 3.39-1.308.973-.973 1.246-2.109 1.308-3.39.058-1.28.07-1.689.07-7.612 0-5.923-.012-6.332-.07-7.612-.062-1.281-.335-2.417-1.308-3.39C19.365.4 18.229.128 16.948.07 15.668.012 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm7.2-10.406a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/></svg></a>
        </div>
      </div>
      {/* Logo - Center */}
      <div className="flex flex-col items-center md:w-1/3 order-1 md:order-2 mb-4 md:mb-0 mt-16 md:ml-18">
        <img src="/logo.png" alt="Prop Advisors Logo" className="h-36 w-auto mb-2 mx-auto" />
              </div>
      {/* Quick Links - Right */}
      <div className="flex flex-col items-start md:items-end gap-2 md:w-1/3 order-3 text-left md:text-right w-full md:w-auto">
        <span className="font-semibold text-lg mb-1">Quick Links</span>
        <a href="#about-us" className="hover:underline">About Us</a>
        <a href="#amodha" className="hover:underline">Project Amodha</a>
        <a href="#shriramgharunda" className="hover:underline">Project Shri Ram Gharunda</a>
        <a href="#adoradegoa" className="hover:underline">Project Adora De Goa</a>
        <a href="#contact-form" className="hover:underline">Get in touch</a>
      </div>
    </div>
    <div className="text-center text-xs text-white mt-8 opacity-80">&copy; {new Date().getFullYear()} Prop Advisors. All rights reserved.</div>
  </footer>
);

export default Footer; 
