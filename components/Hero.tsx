
import React from 'react';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  onBook: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBook }) => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-[10000ms] scale-110 hover:scale-100"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1512690118299-a65117849c6d?auto=format&fit=crop&q=80&w=2000")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <div className="inline-block mb-6 px-4 py-1 border border-[#D4AF37]/40 rounded-full bg-black/30 backdrop-blur-sm">
          <span className="gold-text text-sm font-bold tracking-[0.3em] uppercase">Est. 2020 • Kippax</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-serif font-bold mb-6 tracking-tight leading-tight">
          Where Style Meets <br />
          <span className="gold-text italic">Precision.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-neutral-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          Premium grooming for the modern gentleman. Experience the finest hair cuts, 
          beard sculpting, and traditional hot towel shaves in Holt.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={onBook}
            className="w-full sm:w-auto px-10 py-4 gold-bg text-black font-bold text-lg rounded-full hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)]"
          >
            BOOK AN APPOINTMENT
          </button>
          <a 
            href="#services"
            className="w-full sm:w-auto px-10 py-4 bg-transparent border-2 border-white/20 text-white font-bold text-lg rounded-full hover:bg-white hover:text-black transition-all duration-300"
          >
            OUR SERVICES
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
        <ChevronDown size={32} />
      </div>
    </div>
  );
};

export default Hero;
