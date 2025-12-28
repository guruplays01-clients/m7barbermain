
import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../constants';
import { Maximize2, X } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-sm font-bold tracking-[0.2em] gold-text uppercase mb-4">The Portfolio</h2>
        <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6">Artistry In Motion</h3>
      </div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {GALLERY_ITEMS.map((item) => (
          <div 
            key={item.id} 
            className="relative group cursor-pointer overflow-hidden rounded-xl bg-neutral-800"
            onClick={() => setSelectedImage(item.url)}
          >
            <img 
              src={item.url} 
              alt={item.title} 
              className="w-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-4">
              <Maximize2 className="w-8 h-8 text-[#D4AF37] mb-2" />
              <span className="font-serif text-xl font-bold">{item.title}</span>
              <span className="text-neutral-400 text-sm mt-1">{item.category}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 md:p-10"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-8 right-8 text-white hover:text-[#D4AF37] transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={40} />
          </button>
          <img 
            src={selectedImage} 
            alt="Gallery Preview" 
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300"
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
