
import React, { useState, useEffect } from 'react';
import { Menu, X, Scissors, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenAdvisor: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenAdvisor }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2 group cursor-pointer">
            <div className="w-10 h-10 rounded-full gold-bg flex items-center justify-center transition-transform duration-300 group-hover:rotate-12">
                <Scissors className="text-black w-6 h-6" />
            </div>
            <span className="text-2xl font-serif font-bold tracking-wider">
              M7 <span className="gold-text">BARBER</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium hover:text-[#D4AF37] transition-colors duration-200 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 gold-bg transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <button 
              onClick={onOpenAdvisor}
              className="flex items-center space-x-2 border border-[#D4AF37] text-[#D4AF37] px-4 py-2 rounded hover:bg-[#D4AF37] hover:text-black hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all duration-300 group"
            >
              <Sparkles className="w-4 h-4 group-hover:animate-pulse" />
              <span>AI Advisor</span>
            </button>
            <a
              href="#contact"
              className="gold-bg text-black px-6 py-2 rounded font-bold hover:scale-105 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:brightness-110 transition-all duration-200"
            >
              BOOK NOW
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button 
              onClick={onOpenAdvisor}
              className="p-2 border border-[#D4AF37] text-[#D4AF37] rounded-full hover:bg-[#D4AF37] hover:text-black transition-colors"
            >
              <Sparkles className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-[#D4AF37] transition-colors"
            >
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden absolute w-full bg-black/95 transition-all duration-300 ${isOpen ? 'max-h-screen border-b border-neutral-800' : 'max-h-0 overflow-hidden'}`}>
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-3 py-4 text-lg font-medium border-b border-neutral-900 active:text-[#D4AF37]"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4">
             <a
              href="#contact"
              className="block w-full text-center gold-bg text-black py-4 rounded font-bold hover:brightness-110 active:scale-95 transition-all"
              onClick={() => setIsOpen(false)}
            >
              BOOK APPOINTMENT
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
