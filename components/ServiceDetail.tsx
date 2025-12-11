import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, CheckCircle } from 'lucide-react';
import { services } from '../data/services';

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const service = services.find(s => s.id === id);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-rose-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-stone-800 mb-4">Service Not Found</h2>
          <Link to="/" className="text-rose-500 hover:underline">Back to Home</Link>
        </div>
      </div>
    );
  }

  const handleBookNow = () => {
    // Navigate to home and scroll to contact
    navigate('/#contact');
  };

  return (
    <div className="pt-20 min-h-screen bg-rose-50">
      {/* Hero Banner for Service */}
      <div className="relative h-[400px] w-full bg-stone-900 overflow-hidden">
        <img 
          src={service.imageUrl} 
          alt={service.title} 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
          <div className="max-w-7xl mx-auto">
             <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
               <ArrowLeft size={20} className="mr-2" /> Back to Services
             </Link>
             <h1 className="font-serif text-4xl md:text-6xl text-white font-bold mb-4 drop-shadow-md">{service.title}</h1>
             <div className="flex items-center gap-4 text-gold-300">
                <span className="text-xl md:text-2xl font-bold">{service.price}</span>
                {service.duration && (
                  <span className="flex items-center gap-1 text-sm md:text-base text-stone-300">
                    <Clock size={16} /> {service.duration}
                  </span>
                )}
             </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-rose-100 mb-8">
              <h2 className="font-serif text-3xl text-stone-900 mb-6">Description</h2>
              <p className="text-stone-600 leading-relaxed text-lg mb-8">
                {service.longDescription || service.description}
              </p>
              
              {service.features && (
                <>
                  <h3 className="font-serif text-2xl text-stone-900 mb-6">What's Included</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                        <span className="text-stone-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
            
            <div className="bg-rose-100 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="font-bold text-rose-900 text-xl mb-2">Ready to transform your look?</h3>
                <p className="text-rose-700">Book your appointment with our experts today.</p>
              </div>
              <button 
                onClick={handleBookNow}
                className="bg-rose-500 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-rose-600 transition-transform transform hover:-translate-y-1 whitespace-nowrap"
              >
                Book This Service
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
             <div className="bg-white rounded-2xl p-6 shadow-lg border-t-4 border-gold-400 sticky top-24">
                <h3 className="font-serif text-2xl text-stone-900 mb-6">Why Choose Us?</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-gold-100 flex items-center justify-center text-gold-600 flex-shrink-0">1</div>
                    <p className="text-sm text-stone-600">Certified cosmetologists with international experience.</p>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-gold-100 flex items-center justify-center text-gold-600 flex-shrink-0">2</div>
                    <p className="text-sm text-stone-600">Premium, authentic products (MAC, Huda Beauty, etc).</p>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-gold-100 flex items-center justify-center text-gold-600 flex-shrink-0">3</div>
                    <p className="text-sm text-stone-600">Strict hygiene and sterilization protocols.</p>
                  </li>
                </ul>
                <div className="mt-8 pt-6 border-t border-stone-100 text-center">
                  <p className="text-stone-500 text-sm mb-4">Have questions?</p>
                  <a href="https://wa.me/923001234567" target="_blank" rel="noreferrer" className="text-rose-500 font-bold hover:underline">
                    Chat on WhatsApp
                  </a>
                </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;