import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ZoomIn, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { InstagramIcon } from './Icons';

const works = [
  {
    id: 1,
    title: 'PANTALLAS TÁCTILES VW AMAROK Y PEUGEOT 208 / 2008',
    desc: 'Reemplazo de táctil dañado por falla de fábrica utilizando repuesto original de vidrio reforzado.',
    img: './assets/PANTALLAS TÁCTILES VW AMAROK Y PEUGEOT 208  2008.png',
    tag: 'Multimedia',
  },
  {
    id: 2,
    title: 'ACTIVACIÓN APP CONNECT Y SOFTWARE ORIGINAL',
    desc: 'Desbloqueo de funciones originales, actualización de mapas, radares y programación VIN.',
    img: './assets/ACTIVACIÓN APP CONNECT Y SOFTWARE ORIGINAL.jfif',
    tag: 'Conectividad',
  },
  {
    id: 3,
    title: 'CÁMARAS DE REVERSA EN PANTALLAS ORIGINALES',
    desc: 'Integración limpia sobre el sistema de fábrica para Volkswagen, Peugeot, Toyota y más.',
    img: './assets/CÁMARAS DE REVERSA EN PANTALLAS ORIGINALES.jfif',
    tag: 'Seguridad',
  },
  {
    id: 4,
    title: 'LABORATORIO DE REPARACIÓN ELECTRÓNICA',
    desc: 'Diagnóstico y reparación de módulos de radio, displays LCD y placas multimedia en el local.',
    img: './assets/LABORATORIO DE REPARACIÓN ELECTRÓNICA.jpeg',
    tag: 'Laboratorio',
  },
];

export default function Gallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  // MANEJO DE TECLAS ESC Y FLECHAS
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImageIndex === null) return;
      if (e.key === 'Escape') setSelectedImageIndex(null);
      if (e.key === 'ArrowRight') {
        setSelectedImageIndex((prev) => (prev + 1) % works.length);
      }
      if (e.key === 'ArrowLeft') {
        setSelectedImageIndex((prev) => (prev - 1 + works.length) % works.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex]);

  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((prev) => (prev + 1) % works.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((prev) => (prev - 1 + works.length) % works.length);
  };

  return (
    <section id="trabajos" className="py-20 bg-[#09090B] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CABECERA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#38BDF8]/20 bg-[#38BDF8]/10 text-[#38BDF8] text-xs font-bold uppercase tracking-wider mb-4"
            >
              <span className="w-2 h-2 rounded-full bg-[#38BDF8] shadow-[0_0_8px_#38BDF8]" />
              <span>Portfolio de Taller</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black uppercase text-white tracking-tight"
            >
              Trabajos que hablan por sí solos.
            </motion.h2>
          </div>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            href="https://www.instagram.com/pepocaraudio/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl border border-white/15 bg-white/5 text-white hover:border-[#FACC15]/60 hover:text-[#FACC15] text-xs font-heading font-bold uppercase tracking-wider transition-all duration-200 shrink-0 hover:bg-[#FACC15]/5"
          >
            <InstagramIcon size={16} />
            <span>Ver más trabajos en Instagram</span>
          </motion.a>
        </div>

        {/* GRILLA EDITORIAL DE FOTOS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {works.map((work, index) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedImageIndex(index)}
              className="group relative bg-[#141417] border border-white/10 rounded-2xl overflow-hidden cursor-pointer hover:border-[#FACC15]/50 transition-all duration-300"
            >
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-black">
                <img
                  src={work.img}
                  alt={work.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-110"
                />
                
                {/* OVERLAY OSCURO CON INFORMACIÓN AL HOVER */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-[#09090B]/60 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* BOTÓN EXPANDIR FLOTANTE */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#09090B]/80 border border-white/15 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 group-hover:bg-[#FACC15] group-hover:text-[#09090B]">
                  <ZoomIn size={16} />
                </div>

                {/* ETIQUETA SUPERIOR */}
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#09090B]/80 border border-white/10 text-[#FACC15]">
                    {work.tag}
                  </span>
                </div>

                {/* TEXTO INFERIOR */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h4 className="text-sm font-heading font-extrabold text-white uppercase mb-1 group-hover:text-[#FACC15] transition-colors">
                    {work.title}
                  </h4>
                  <p className="text-xs text-zinc-400 line-clamp-2">
                    {work.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* MODAL LIGHTBOX EN PANTALLA COMPLETA */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImageIndex(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-8"
          >
            {/* BOTÓN CERRAR */}
            <button
              onClick={() => setSelectedImageIndex(null)}
              className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/10 hover:bg-[#FACC15] text-white hover:text-black transition-colors"
              aria-label="Cerrar vista completa"
            >
              <X size={24} />
            </button>

            {/* BOTÓN ANTERIOR */}
            <button
              onClick={handlePrev}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-black/60 border border-white/10 hover:border-[#FACC15] text-white hover:text-[#FACC15] transition-all"
              aria-label="Anterior foto"
            >
              <ChevronLeft size={28} />
            </button>

            {/* BOTÓN SIGUIENTE */}
            <button
              onClick={handleNext}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-black/60 border border-white/10 hover:border-[#FACC15] text-white hover:text-[#FACC15] transition-all"
              aria-label="Siguiente foto"
            >
              <ChevronRight size={28} />
            </button>

            {/* CONTENEDOR DE IMAGEN AMPLIFICADA */}
            <motion.div
              key={selectedImageIndex}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl max-h-[85vh] w-full bg-[#141417] border border-white/15 rounded-2xl overflow-hidden flex flex-col shadow-2xl"
            >
              <div className="relative flex-1 bg-black flex items-center justify-center min-h-[300px] sm:min-h-[480px]">
                <img
                  src={works[selectedImageIndex].img}
                  alt={works[selectedImageIndex].title}
                  className="max-w-full max-h-[70vh] object-contain"
                />
              </div>

              <div className="p-6 bg-[#141417] border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#FACC15] mb-1 block">
                    {works[selectedImageIndex].tag} · Foto {selectedImageIndex + 1} de {works.length}
                  </span>
                  <h3 className="text-base sm:text-lg font-heading font-extrabold text-white uppercase">
                    {works[selectedImageIndex].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                    {works[selectedImageIndex].desc}
                  </p>
                </div>

                <a
                  href={`https://wa.me/5491155705378?text=${encodeURIComponent(`Hola, Pepo CarAudio. Vi la foto de ${works[selectedImageIndex].title} en su web y quería consultar para mi auto.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 inline-flex items-center gap-2 bg-[#FACC15] text-[#09090B] font-heading font-extrabold text-xs uppercase px-5 py-3 rounded-lg hover:shadow-[0_0_20px_rgba(250,204,21,0.4)] transition-all"
                >
                  Consultar por este trabajo
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
