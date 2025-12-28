
import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-sm font-bold tracking-[0.2em] gold-text uppercase mb-4">Voices of M7</h2>
        <h3 className="text-4xl md:text-5xl font-serif font-bold">Client Success Stories</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((t) => (
          <div key={t.id} className="bg-neutral-900 border border-neutral-800 p-10 rounded-3xl relative">
            <Quote className="absolute top-6 right-8 text-[#D4AF37]/10 w-16 h-16" />
            
            <div className="flex space-x-1 mb-6">
              {[...Array(t.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 gold-text fill-[#D4AF37]" />
              ))}
            </div>

            <p className="text-neutral-300 italic mb-8 leading-relaxed">
              "{t.text}"
            </p>

            <div className="flex items-center justify-between pt-6 border-t border-neutral-800">
              <span className="font-bold text-lg">{t.name}</span>
              <span className="text-sm text-neutral-500">{t.date}</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 bg-[#D4AF37] p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between">
        <div className="text-black mb-6 md:mb-0">
          <h4 className="text-2xl font-serif font-bold">Join the ranks of the best-groomed.</h4>
          <p className="font-medium opacity-80 text-lg">Book your first experience today and get a complimentary styling consultation.</p>
        </div>
        <button 
          onClick={() => document.getElementById('contact')?.scrollIntoView()}
          className="px-8 py-3 bg-black text-white rounded-full font-bold hover:scale-105 transition-transform"
        >
          BOOK NOW
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
