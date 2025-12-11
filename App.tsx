import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ServiceDetail from './components/ServiceDetail';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Bot from './components/Bot';

function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-rose-50 overflow-x-hidden font-sans">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/service/:id" element={<ServiceDetail />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
        <Bot />
      </div>
    </HashRouter>
  );
}

export default App;