import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-stone-700 pb-12">
          
          <div>
            <h3 className="font-serif text-3xl mb-4 text-gold-300">Noor-e-Jahan</h3>
            <p className="text-stone-400 leading-relaxed max-w-sm">
              Elevating beauty standards in Pakistan with luxury treatments and expert care. Your radiance is our priority.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-rose-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-sky-500 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3 text-stone-400">
              <li><a href="#home" className="hover:text-gold-300 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-gold-300 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-gold-300 transition-colors">Services</a></li>
              <li><a href="#gallery" className="hover:text-gold-300 transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-gold-300 transition-colors">Book Appointment</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">Newsletter</h4>
            <p className="text-stone-400 mb-4">Subscribe for latest beauty trends and exclusive offers.</p>
            <div className="flex">
              <input type="email" placeholder="Your Email" className="bg-stone-800 text-white px-4 py-3 rounded-l-lg focus:outline-none w-full" />
              <button className="bg-gold-600 px-4 py-3 rounded-r-lg font-bold hover:bg-gold-500 transition-colors">
                Join
              </button>
            </div>
          </div>

        </div>
        
        <div className="pt-8 text-center text-stone-500 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Noor-e-Jahan Beauty Salon. All rights reserved.</p>
          <div className="mt-2 md:mt-0 space-x-4">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
