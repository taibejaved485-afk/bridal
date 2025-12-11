import React from 'react';
import { Star } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          <div className="w-full md:w-1/2 relative mb-8 md:mb-0">
             <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gold-300 rounded-tr-[50px] rounded-bl-[50px] z-0 hidden md:block"></div>
             <img 
               src="https://picsum.photos/id/338/600/800" 
               alt="Head Beautician" 
               className="w-full h-[350px] sm:h-[450px] md:h-[500px] object-cover rounded-tr-[50px] rounded-bl-[50px] shadow-2xl relative z-10"
             />
             <div className="absolute bottom-4 -right-2 md:bottom-10 md:right-0 bg-white p-4 md:p-6 shadow-xl rounded-l-lg z-20 max-w-[240px] md:max-w-xs border-l-4 border-gold-400">
                <div className="flex text-gold-500 mb-2">
                  <Star fill="currentColor" size={14} className="md:w-4 md:h-4" />
                  <Star fill="currentColor" size={14} className="md:w-4 md:h-4" />
                  <Star fill="currentColor" size={14} className="md:w-4 md:h-4" />
                  <Star fill="currentColor" size={14} className="md:w-4 md:h-4" />
                  <Star fill="currentColor" size={14} className="md:w-4 md:h-4" />
                </div>
                <p className="font-serif italic text-sm md:text-lg text-stone-700">"Beauty is power, and makeup is something that really enhances that; it’s a woman’s secret."</p>
             </div>
          </div>

          <div className="w-full md:w-1/2 text-center md:text-left">
            <span className="text-rose-500 font-bold tracking-wider uppercase text-xs md:text-sm">About Us</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-stone-900 mt-2 mb-6">Expertise Meets Elegance</h2>
            <div className="w-20 h-1 bg-gold-300 mx-auto md:mx-0 mb-8"></div>
            
            <p className="text-stone-600 leading-relaxed mb-6 text-sm md:text-base">
              Founded by Hina Khan, a certified cosmetologist with over 15 years of experience in London and Lahore, Noor-e-Jahan is more than just a beauty parlor. We are a sanctuary where traditional Pakistani beauty meets modern aesthetic techniques.
            </p>
            <p className="text-stone-600 leading-relaxed mb-8 text-sm md:text-base">
              Specializing in signature bridal looks that range from the classic "Baraat" red to the soft "Walima" glam, we ensure every bride feels like a queen. Our staff is trained in the latest skincare technologies and hygiene protocols.
            </p>

            <div className="grid grid-cols-3 gap-2 md:gap-4 text-center border-t border-stone-200 pt-8">
              <div>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-rose-500">15+</h3>
                <p className="text-xs md:text-sm text-stone-500 mt-1">Years Experience</p>
              </div>
              <div>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-rose-500">2k+</h3>
                <p className="text-xs md:text-sm text-stone-500 mt-1">Happy Brides</p>
              </div>
              <div>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-rose-500">50+</h3>
                <p className="text-xs md:text-sm text-stone-500 mt-1">Awards Won</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;