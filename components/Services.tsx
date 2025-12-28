
import React, { useState } from 'react';
import { SERVICES } from '../constants';
import { Clock, Info } from 'lucide-react';

const Services: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Haircut' | 'Shave' | 'Combo'>('All');
  
  const filteredServices = filter === 'All' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === filter);

  const categories: ('All' | 'Haircut' | 'Shave' | 'Combo')[] = ['All', 'Haircut', 'Shave', 'Combo'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-sm font-bold tracking-[0.2em] gold-text uppercase mb-4">Masterful Grooming</h2>
        <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6">Service Menu</h3>
        
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full border transition-all duration-300 transform hover:-translate-y-1 ${
                filter === cat 
                  ? 'gold-bg text-black border-[#D4AF37] font-bold shadow-[0_5px_15px_rgba(212,175,55,0.3)]' 
                  : 'border-neutral-700 text-neutral-400 hover:border-[#D4AF37] hover:text-[#D4AF37] hover:shadow-md'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredServices.map((service) => (
          <div 
            key={service.id} 
            className="group relative bg-neutral-900 border border-neutral-800 p-8 rounded-2xl hover:border-[#D4AF37]/50 transition-all duration-500 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] cursor-default"
          >
            <div className="flex justify-between items-start mb-4">
              <h4 className="text-2xl font-serif font-bold group-hover:text-[#D4AF37] transition-colors">{service.name}</h4>
              <span className="text-2xl font-bold gold-text">{service.price}</span>
            </div>
            
            <p className="text-neutral-500 mb-6 leading-relaxed">
              {service.description}
            </p>
            
            <div className="flex items-center space-x-4 text-sm text-neutral-400">
              <span className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{service.duration}</span>
              </span>
              <span className="w-1 h-1 bg-neutral-700 rounded-full"></span>
              <span className="flex items-center space-x-1">
                <Info className="w-4 h-4" />
                <span>{service.category}</span>
              </span>
            </div>

            {/* Hover Indicator */}
            <div className="absolute bottom-0 left-0 h-1 gold-bg w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl"></div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-neutral-500 italic mb-6">Need something bespoke? Ask your barber for custom packages.</p>
        <button 
          onClick={() => document.getElementById('contact')?.scrollIntoView()}
          className="px-12 py-4 gold-bg text-black font-bold rounded-full hover:scale-105 hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:brightness-110 active:scale-95 transition-all duration-300"
        >
          SECURE YOUR SLOT
        </button>
      </div>
    </div>
  );
};

export default Services;
