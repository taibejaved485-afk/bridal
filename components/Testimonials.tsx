import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Review } from '../types';

const reviews: Review[] = [
  {
    id: '1',
    name: 'Ayesha Malik',
    rating: 5,
    comment: "I got my Walima makeup done from here and it was absolutely stunning! The staff is so polite and Hina did magic with my hair. Highly recommended for brides.",
    date: 'Oct 2023'
  },
  {
    id: '2',
    name: 'Fatima Ahmed',
    rating: 5,
    comment: "Best facial in Lahore! My skin felt so fresh and glowing afterwards. The ambiance is very luxurious and clean.",
    date: 'Nov 2023'
  },
  {
    id: '3',
    name: 'Zainab Khan',
    rating: 4,
    comment: "Lovely mehndi designs. The artist was very quick and the color came out dark and beautiful. Will definitely visit again.",
    date: 'Dec 2023'
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-16 md:py-20 bg-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-rose-500 font-bold tracking-wider uppercase text-sm">Testimonials</span>
          <h2 className="font-serif text-3xl md:text-5xl text-stone-900 mt-2">What Our Clients Say</h2>
        </div>

        {/* Updated grid: 1 col on mobile, 2 cols on tablet, 3 cols on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-8 rounded-xl shadow-md relative border-t-4 border-gold-400">
              <Quote className="absolute top-4 right-4 text-rose-100 transform rotate-180" size={48} />
              <div className="flex text-gold-500 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-stone-600 mb-6 italic leading-relaxed text-sm md:text-base">"{review.comment}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-stone-200 rounded-full flex items-center justify-center font-bold text-stone-500">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 text-sm">{review.name}</h4>
                  <p className="text-xs text-stone-400">{review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;