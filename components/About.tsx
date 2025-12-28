
import React from 'react';
import { Award, Scissors, Users, Clock } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: <Award className="w-8 h-8 gold-text" />, label: 'Master Barbers', value: '4+' },
    { icon: <Users className="w-8 h-8 gold-text" />, label: 'Happy Clients', value: '2k+' },
    { icon: <Scissors className="w-8 h-8 gold-text" />, label: 'Styles Mastered', value: '50+' },
    { icon: <Clock className="w-8 h-8 gold-text" />, label: 'Years Experience', value: '10+' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative group">
          <div className="absolute -top-4 -left-4 w-64 h-64 border-2 border-[#D4AF37]/30 -z-10 rounded-2xl group-hover:-top-6 group-hover:-left-6 transition-all duration-500"></div>
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1599351431247-f5094037950d?auto=format&fit=crop&q=80&w=1000" 
              alt="M7 Barber Interior" 
              className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 bg-black p-8 rounded-2xl border border-neutral-800 hidden md:block shadow-2xl group-hover:-bottom-10 group-hover:-right-10 transition-all duration-500">
            <p className="font-serif italic text-2xl gold-text">"Precision is our signature."</p>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-bold tracking-[0.2em] gold-text uppercase mb-4">The M7 Legacy</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6">Redefining the Classic <br />Barber Experience</h3>
          <p className="text-neutral-400 text-lg leading-relaxed mb-8">
            Located in the heart of Kippax, M7 Barber is more than just a shop—it's a sanctuary for the modern man. 
            Our team of expert barbers blends time-honored techniques with contemporary trends to ensure every client 
            leaves looking their absolute best. 
          </p>
          <p className="text-neutral-400 text-lg leading-relaxed mb-10">
            Whether you're looking for a sharp skin fade, a clean beard sculpt, or a traditional hot towel shave, 
            we treat every service as a work of art.
          </p>

          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center space-x-4 group cursor-default">
                <div className="p-3 bg-neutral-800 rounded-lg group-hover:bg-[#D4AF37]/10 transition-colors">
                  {stat.icon}
                </div>
                <div>
                  <div className="text-2xl font-bold group-hover:gold-text transition-colors">{stat.value}</div>
                  <div className="text-neutral-500 text-sm uppercase tracking-wider">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
