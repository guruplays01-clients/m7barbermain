
import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Phone, Mail, MapPin, Instagram, Send, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you shortly.");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-sm font-bold tracking-[0.2em] gold-text uppercase mb-4">Get In Touch</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold mb-8">Visit The Shop</h3>
          
          <div className="space-y-8 mb-12">
            <div className="flex items-start space-x-6 group">
              <div className="p-4 gold-bg rounded-xl transition-transform duration-300 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                <MapPin className="text-black w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-1">Our Location</h4>
                <p className="text-neutral-400 max-w-xs">{CONTACT_INFO.address}</p>
              </div>
            </div>

            <div className="flex items-start space-x-6 group">
              <div className="p-4 gold-bg rounded-xl transition-transform duration-300 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                <Phone className="text-black w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-1">Call Us</h4>
                <a href={`tel:${CONTACT_INFO.phone}`} className="text-[#D4AF37] hover:text-[#f0c74d] hover:underline text-lg font-medium transition-colors">
                  {CONTACT_INFO.phoneFormatted}
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-6 group">
              <div className="p-4 gold-bg rounded-xl transition-transform duration-300 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                <Clock className="text-black w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Opening Hours</h4>
                {CONTACT_INFO.hours.map((h, i) => (
                  <div key={i} className="flex justify-between w-64 text-neutral-400 mb-1 group-hover:text-neutral-300 transition-colors">
                    <span>{h.day}</span>
                    <span>{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="h-[300px] w-full rounded-2xl overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-500 border border-neutral-800">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3257.072236166827!2d149.0145217119293!3d-35.2295627726227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b17ada767980307%3A0x6a05e54d393693e5!2sShop%201%2F12-16%20Hardwick%20Cres%2C%20Holt%20ACT%202615!5e0!3m2!1sen!2sau!4v1715000000000!5m2!1sen!2sau" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
             </iframe>
          </div>
        </div>

        <div className="bg-black border border-neutral-800 p-10 rounded-3xl shadow-2xl">
          <h4 className="text-2xl font-serif font-bold mb-8">Send Us A Message</h4>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-neutral-500 mb-2 uppercase tracking-widest">Full Name</label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-4 focus:outline-none focus:border-[#D4AF37] transition-all hover:border-neutral-700" 
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-500 mb-2 uppercase tracking-widest">Phone Number</label>
                <input 
                  type="tel" 
                  required
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-4 focus:outline-none focus:border-[#D4AF37] transition-all hover:border-neutral-700" 
                  placeholder="0400 000 000"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-neutral-500 mb-2 uppercase tracking-widest">Email Address</label>
              <input 
                type="email" 
                required
                className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-4 focus:outline-none focus:border-[#D4AF37] transition-all hover:border-neutral-700" 
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-500 mb-2 uppercase tracking-widest">Preferred Service</label>
              <select className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-4 focus:outline-none focus:border-[#D4AF37] transition-all hover:border-neutral-700 cursor-pointer">
                <option>Classic Haircut</option>
                <option>Skin Fade</option>
                <option>Beard Sculpt</option>
                <option>Hot Towel Shave</option>
                <option>The Full Service</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-500 mb-2 uppercase tracking-widest">Message</label>
              <textarea 
                rows={4} 
                className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-4 focus:outline-none focus:border-[#D4AF37] transition-all hover:border-neutral-700" 
                placeholder="Tell us about your style preference or questions..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full gold-bg text-black font-bold py-5 rounded-xl flex items-center justify-center space-x-2 hover:scale-[1.02] hover:brightness-110 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all active:scale-95"
            >
              <span>SEND MESSAGE</span>
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
