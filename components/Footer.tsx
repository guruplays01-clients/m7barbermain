
import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Scissors, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black pt-20 pb-10 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 rounded-full gold-bg flex items-center justify-center">
                  <Scissors className="text-black w-6 h-6" />
              </div>
              <span className="text-3xl font-serif font-bold tracking-wider">
                M7 <span className="gold-text">BARBER</span>
              </span>
            </div>
            <p className="text-neutral-500 max-w-md leading-relaxed mb-8">
              M7 Barber Kippax is the premier destination for men's grooming in Holt, ACT. 
              We are dedicated to providing the ultimate barbering experience with a focus 
              on precision, style, and exceptional service.
            </p>
            <div className="flex space-x-4">
              <a href={CONTACT_INFO.instagram} target="_blank" rel="noopener noreferrer" className="p-3 border border-neutral-800 rounded-full hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-3 border border-neutral-800 rounded-full hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-3 border border-neutral-800 rounded-full hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-neutral-500">
              <li><a href="#home" className="hover:text-[#D4AF37] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#D4AF37] transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-[#D4AF37] transition-colors">Our Services</a></li>
              <li><a href="#gallery" className="hover:text-[#D4AF37] transition-colors">Gallery</a></li>
              <li><a href="#contact" className="hover:text-[#D4AF37] transition-colors">Book Now</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-neutral-500">
              <li className="flex items-start space-x-3">
                <span className="gold-text">A:</span>
                <span>{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="gold-text">P:</span>
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-[#D4AF37]">{CONTACT_INFO.phoneFormatted}</a>
              </li>
              <li className="flex items-start space-x-3">
                <span className="gold-text">I:</span>
                <a href={CONTACT_INFO.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37]">@m7_barbers</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-900 pt-10 text-center text-neutral-600 text-sm">
          <p>© {new Date().getFullYear()} M7 Barber Kippax. All Rights Reserved.</p>
          <p className="mt-2">Designed for the discerning gentleman.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
