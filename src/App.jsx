import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';
import Home from '@/pages/Home';
import ServiceDetail from '@/pages/ServiceDetail';
import ScrollToTop from '@/components/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8f6f3] to-[#ede9e3]">
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
        </Routes>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;