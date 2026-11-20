import React from 'react';
import { motion } from 'framer-motion';
import { Star, ExternalLink, CheckCircle2 } from 'lucide-react';

export default function Reviews() {
  const mapsReviewsUrl = "https://www.google.com/maps/place/Pepo+CarAudio+(Autoradio)/@-34.5896503,-58.5582063,13.54z/data=!4m6!3m5!1s0x95bcb7a1c598fe25:0xf2ce84c2a86a0af7!8m2!3d-34.5835783!4d-58.5305114";

  return (
    <section id="opiniones" className="py-20 bg-[#09090B] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TARJETA DE REPUTACIÓN AUTOMOTRIZ */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-br from-[#141417] via-[#141417] to-[#1c1c22] border border-white/10 rounded-3xl p-8 sm:p-12 overflow-hidden shadow-2xl"
        >
          {/* DECORACIÓN LUMÍNICA DE FONDO */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FACC15]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#FACC15]/20 bg-[#FACC15]/10 text-[#FACC15] text-xs font-bold uppercase tracking-wider mb-4">
                <span className="w-2 h-2 rounded-full bg-[#FACC15] shadow-[0_0_8px_#FACC15]" />
                <span>Reputación y Confianza</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black uppercase text-white tracking-tight mb-4">
                La confianza se construye con cada trabajo.
              </h2>

              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-6">
                Nuestro compromiso es la prolijidad técnica y la satisfacción de cada cliente que confía su vehículo en nuestro taller de Villa Lynch.
              </p>

              {/* LISTA DE GARANTÍAS DE CALIDAD */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-zinc-300">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} className="text-[#FACC15] shrink-0" />
                  <span>Calificación observada en perfil comercial oficial</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} className="text-[#FACC15] shrink-0" />
                  <span>Atención personalizada y asesoramiento previo</span>
                </div>
              </div>
            </div>

            {/* BLOQUE DE PUNTUACIÓN DESTACADA */}
            <div className="w-full lg:w-auto shrink-0 bg-[#09090B]/80 border border-white/10 p-6 sm:p-8 rounded-2xl flex flex-col items-center text-center shadow-lg">
              
              <div className="flex items-baseline gap-2 mb-2">
                <span className="font-heading font-black text-5xl sm:text-6xl text-[#FACC15]">
                  4,9
                </span>
                <span className="text-zinc-500 font-bold text-2xl">/5</span>
              </div>

              {/* 5 ESTRELLAS */}
              <div className="flex items-center gap-1.5 text-[#FACC15] mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="#FACC15" />
                ))}
              </div>

              <div className="text-sm font-bold text-white mb-1">
                Más de 500 reseñas en Google
              </div>
              <p className="text-[11px] text-zinc-400 mb-6">
                Calificación promedio verificada
              </p>

              <a
                href={mapsReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-white/20 bg-white/5 hover:border-[#FACC15] hover:text-[#FACC15] text-white text-xs font-heading font-extrabold uppercase tracking-wider transition-all duration-200"
              >
                <span>Leer opiniones en Google</span>
                <ExternalLink size={14} />
              </a>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
