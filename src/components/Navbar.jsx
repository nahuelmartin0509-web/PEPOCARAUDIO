import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageSquare, Phone } from 'lucide-react';
import { WhatsAppIcon } from './Icons';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Diferencial', href: '#diferencial' },
    { name: 'Trabajos', href: '#trabajos' },
    { name: 'Ubicación', href: '#ubicacion' },
    { name: 'Opiniones', href: '#opiniones' },
  ];

  const whatsappUrl = "https://wa.me/5491155705378?text=Hola%2C%20Pepo%20CarAudio.%20Queria%20consultar%20por%20un%20trabajo%20para%20mi%20vehiculo.%20Marca%2C%20modelo%20y%20a%C3%B1o%3A";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#09090B]/85 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl'
          : 'bg-[#09090B]/40 backdrop-blur-sm border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* LOGO */}
        <div className="flex items-center">
          <a
            href="#hero"
            className="flex items-center gap-3 group"
          >
            <img
              src="./assets/logo.png"
              alt="Pepo CarAudio"
              className="h-8 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </a>
        </div>

        {/* NAVEGACIÓN DESKTOP */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-widest font-semibold text-zinc-400 hover:text-[#FACC15] transition-colors duration-200 relative py-1 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#FACC15] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* CTA DERECHA */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="tel:+541147538506"
            className="flex items-center gap-2 text-xs font-semibold text-zinc-300 hover:text-white transition-colors"
          >
            <Phone size={14} className="text-[#38BDF8]" />
            <span className="hidden lg:inline">4753-8506</span>
          </a>
          
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#FACC15] text-[#09090B] font-heading font-extrabold text-xs tracking-wider uppercase px-4 py-2.5 rounded-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(250,204,21,0.45)] active:translate-y-0"
          >
            <MessageSquare size={14} className="stroke-[2.5]" />
            <span>Consultar</span>
          </a>
        </div>

        {/* BOTÓN HAMBURGUESA MÓVIL */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-[#25D366] text-white rounded-md font-bold text-xs flex items-center justify-center shadow-[0_0_12px_rgba(37,211,102,0.35)]"
            aria-label="WhatsApp"
          >
            <WhatsAppIcon size={18} />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-300 hover:text-white rounded-md border border-white/10 bg-white/5"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* MENÚ MÓVIL DESPLEGABLE */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#09090B]/95 backdrop-blur-xl border-b border-white/10 px-6 pt-4 pb-6 overflow-hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-semibold uppercase tracking-wider text-zinc-300 hover:text-[#FACC15] py-2 border-b border-white/5 flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-[#FACC15]">→</span>
                </a>
              ))}
              <div className="pt-2 flex flex-col gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#FACC15] text-[#09090B] font-heading font-extrabold text-xs uppercase py-3 rounded-md shadow-[0_0_20px_rgba(250,204,21,0.3)]"
                >
                  <MessageSquare size={16} />
                  <span>Consultar por WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
