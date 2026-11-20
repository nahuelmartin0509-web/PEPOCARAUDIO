import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Differential from './components/Differential';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import QuoteCalculator from './components/QuoteCalculator';
import Location from './components/Location';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-[#09090B] text-white flex flex-col selection:bg-[#FACC15] selection:text-[#09090B]">
      {/* HEADER STICKY CON GLASSMORPHISM */}
      <Navbar />

      {/* CONTENIDO PRINCIPAL */}
      <main className="flex-1">
        {/* SECCIÓN 1: HERO */}
        <Hero />

        {/* SECCIÓN 2: SERVICIOS */}
        <Services />

        {/* SECCIÓN 3: DIFERENCIAL */}
        <Differential />

        {/* SECCIÓN 4: TRABAJOS REALIZADOS (CON LIGHTBOX) */}
        <Gallery />

        {/* SECCIÓN 5: RESEÑAS Y CONFIANZA */}
        <Reviews />

        {/* SECCIÓN 6: CTA CON MINI-COTIZADOR WHATSAPP */}
        <QuoteCalculator />

        {/* SECCIÓN 7: UBICACIÓN Y CONTACTO (CON GOOGLE MAPS DARK) */}
        <Location />
      </main>

      {/* SECCIÓN 8: FOOTER */}
      <Footer />

      {/* BOTÓN FLOTANTE WHATSAPP CON TOOLTIP */}
      <FloatingWhatsApp />
    </div>
  );
}
