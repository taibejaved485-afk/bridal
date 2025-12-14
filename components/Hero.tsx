import React from 'react';

const Hero: React.FC = () => {
  return (
    <div id="home" className="relative h-screen min-h-[550px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          // Traditional Pakistani Bridal Image (Red Lehenga & Jewelry)
          backgroundImage: 'url(https://images.unsplash.com/photo-1595959183082-7bce70752538?q=80&w=2070&auto=format&fit=crop)' 
        }}
      >
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto fade-in-up">
        <h2 className="text-gold-100 font-sans tracking-[0.2em] text-xs sm:text-sm md:text-lg mb-3 sm:mb-4 uppercase">
          Welcome to Noor-e-Jahan
        </h2>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white font-bold mb-6 leading-tight drop-shadow-lg">
          Unveil Your <br/> <span className="text-gold-300 italic">Inner Radiance</span>
        </h1>
        <p className="text-stone-100 text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-xl md:max-w-2xl mx-auto font-light leading-relaxed">
          Pakistan's premier destination for bridal transformations, luxurious facials, and modern hair styling.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto px-6 sm:px-0">
          <a 
            href="#contact" 
            className="w-full sm:w-auto px-8 py-4 bg-gold-500 text-white font-semibold rounded-full hover:bg-gold-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center"
          >
            Book Appointment
          </a>
          <a 
            href="#services" 
            className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md border border-white/50 text-white font-semibold rounded-full hover:bg-white/20 transition-all text-center"
          >
            View Services
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;