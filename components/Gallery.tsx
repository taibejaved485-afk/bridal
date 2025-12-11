import React, { useState } from 'react';

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  // Using picsum seeds to simulate consistent photography
  const images = [
    { src: 'https://picsum.photos/id/64/600/800', cat: 'Bridal' },
    { src: 'https://picsum.photos/id/65/600/600', cat: 'Makeup' },
    { src: 'https://picsum.photos/id/331/600/800', cat: 'Hair' },
    { src: 'https://picsum.photos/id/325/600/600', cat: 'Mehndi' },
    { src: 'https://picsum.photos/id/129/600/800', cat: 'Bridal' },
    { src: 'https://picsum.photos/id/435/600/600', cat: 'Party' },
  ];

  const categories = ['All', 'Bridal', 'Makeup', 'Hair', 'Mehndi', 'Party'];

  const filteredImages = activeCategory === 'All' 
    ? images 
    : images.filter(img => img.cat === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-rose-500 font-bold tracking-wider uppercase text-sm">Portfolio</span>
          <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mt-2">Real Brides, Real Beauty</h2>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center flex-wrap gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 border ${
                activeCategory === category
                  ? 'bg-rose-500 border-rose-500 text-white shadow-lg transform scale-105'
                  : 'bg-white border-rose-200 text-stone-600 hover:border-rose-500 hover:text-rose-500'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredImages.map((img, idx) => (
            <div 
              // Changing key forces re-render to trigger animation
              key={`${img.src}-${activeCategory}`} 
              className="relative break-inside-avoid group overflow-hidden rounded-lg cursor-pointer fade-in-up"
            >
              <img 
                src={img.src} 
                alt={`${img.cat} Portfolio ${idx}`} 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-serif text-2xl tracking-widest uppercase border-b-2 border-gold-400 pb-1">
                  {img.cat}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#" className="inline-block px-10 py-3 border-2 border-stone-800 text-stone-800 font-semibold uppercase hover:bg-stone-800 hover:text-white transition-colors duration-300">
            View Full Portfolio
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;