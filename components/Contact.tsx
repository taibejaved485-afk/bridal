import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          
          {/* Contact Info & Form */}
          <div className="order-2 lg:order-1">
             <span className="text-rose-500 font-bold tracking-wider uppercase text-sm">Get in Touch</span>
             <h2 className="font-serif text-3xl md:text-5xl text-stone-900 mt-2 mb-8">Book Your Appointment</h2>
             
             <div className="space-y-6 mb-10">
               <div className="flex items-start gap-4">
                 <div className="w-12 h-12 bg-rose-50 rounded-full flex items-center justify-center flex-shrink-0 text-rose-500">
                   <MapPin size={24} />
                 </div>
                 <div>
                   <h4 className="font-bold text-stone-800 text-lg">Visit Us</h4>
                   <p className="text-stone-600">12-B, Block Y, DHA Phase 3, Lahore, Pakistan</p>
                 </div>
               </div>
               
               <div className="flex items-start gap-4">
                 <div className="w-12 h-12 bg-rose-50 rounded-full flex items-center justify-center flex-shrink-0 text-rose-500">
                   <Phone size={24} />
                 </div>
                 <div>
                   <h4 className="font-bold text-stone-800 text-lg">Call Us</h4>
                   <p className="text-stone-600">+92 300 1234567</p>
                   <p className="text-stone-600">+92 42 35748899</p>
                 </div>
               </div>

               <div className="flex items-start gap-4">
                 <div className="w-12 h-12 bg-rose-50 rounded-full flex items-center justify-center flex-shrink-0 text-rose-500">
                   <Clock size={24} />
                 </div>
                 <div>
                   <h4 className="font-bold text-stone-800 text-lg">Opening Hours</h4>
                   <p className="text-stone-600">Mon - Sat: 11:00 AM - 9:00 PM</p>
                   <p className="text-stone-600">Sunday: By Appointment Only</p>
                 </div>
               </div>
             </div>

             <form className="space-y-4">
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 <input type="text" placeholder="Name" className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 focus:outline-none focus:border-rose-400 focus:ring-1 focus:ring-rose-400" />
                 <input type="text" placeholder="Phone" className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 focus:outline-none focus:border-rose-400 focus:ring-1 focus:ring-rose-400" />
               </div>
               <input type="email" placeholder="Email Address" className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 focus:outline-none focus:border-rose-400 focus:ring-1 focus:ring-rose-400" />
               <select className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 focus:outline-none focus:border-rose-400 focus:ring-1 focus:ring-rose-400 text-stone-600">
                 <option>Select Service</option>
                 <option>Bridal Makeup</option>
                 <option>Party Makeup</option>
                 <option>Hair Styling</option>
                 <option>Facial</option>
               </select>
               <textarea placeholder="Message" rows={4} className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 focus:outline-none focus:border-rose-400 focus:ring-1 focus:ring-rose-400"></textarea>
               <button className="w-full bg-stone-900 text-white font-bold uppercase tracking-wider py-4 rounded-lg hover:bg-stone-800 transition-colors">
                 Send Message
               </button>
             </form>
          </div>

          {/* Map */}
          <div className="h-[300px] md:h-[500px] w-full bg-stone-200 rounded-2xl overflow-hidden shadow-lg border-4 border-white order-1 lg:order-2">
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27214.37397227763!2d74.37659555!3d31.481525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190674f51f50c5%3A0x6e3d237190013e8d!2sDHA%20Phase%203%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1709234567890!5m2!1sen!2s" 
               width="100%" 
               height="100%" 
               style={{border:0}} 
               allowFullScreen={true} 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
             ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;