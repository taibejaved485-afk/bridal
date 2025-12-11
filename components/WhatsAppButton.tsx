import React from 'react';
import { Phone } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  return (
    <a 
      href="https://wa.me/923001234567" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 p-4 rounded-full bg-green-500 text-white shadow-2xl hover:bg-green-600 transition-all transform hover:scale-110 flex items-center gap-2 group"
    >
      <Phone size={24} fill="white" />
      <span className="font-semibold hidden group-hover:block transition-all duration-300">Chat on WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;
