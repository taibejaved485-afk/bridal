import React from 'react';
import { Link } from 'react-router-dom';
import { services } from '../data/services';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 md:py-20 bg-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-rose-500 font-bold tracking-wider uppercase text-sm">Our Menu</span>
          <h2 className="font-serif text-3xl md:text-5xl text-stone-900 mt-2">Exclusive Services</h2>
          <div className="w-24 h-1 bg-gold-300 mx-auto mt-6"></div>
          <p className="mt-4 text-stone-600 max-w-2xl mx-auto text-sm md:text-base">
            Experience top-tier beauty treatments curated for the modern Pakistani woman.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group border border-rose-100 flex flex-col"
            >
              <div className="w-14 h-14 bg-rose-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-rose-500 transition-colors duration-300">
                <service.icon className="text-rose-500 group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-stone-800 mb-2">{service.title}</h3>
              <p className="text-gold-600 font-bold mb-4">{service.price}</p>
              <p className="text-stone-600 mb-6 text-sm leading-relaxed flex-grow">{service.description}</p>
              <Link 
                to={`/service/${service.id}`}
                className="text-rose-500 font-semibold text-sm uppercase tracking-wide group-hover:underline decoration-rose-500 underline-offset-4 self-start"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;