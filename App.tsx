
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIAdvisor from './components/AIAdvisor';

const App: React.FC = () => {
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-[#D4AF37] selection:text-black">
      <Navbar onOpenAdvisor={() => setIsAiModalOpen(true)} />
      
      <main>
        <section id="home">
          <Hero onBook={() => document.getElementById('contact')?.scrollIntoView()} />
        </section>
        
        <section id="about" className="py-20 bg-neutral-900/50">
          <About />
        </section>
        
        <section id="services" className="py-20">
          <Services />
        </section>
        
        <section id="gallery" className="py-20 bg-neutral-900/50">
          <Gallery />
        </section>
        
        <section id="testimonials" className="py-20">
          <Testimonials />
        </section>
        
        <section id="contact" className="py-20 bg-neutral-900/50">
          <Contact />
        </section>
      </main>

      <Footer />

      {/* AI Style Advisor Modal Overlay */}
      {isAiModalOpen && (
        <AIAdvisor onClose={() => setIsAiModalOpen(false)} />
      )}
    </div>
  );
};

export default App;
