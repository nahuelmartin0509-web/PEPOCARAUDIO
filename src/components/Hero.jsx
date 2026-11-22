import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Cpu, Wrench, MessageSquare, Star, MapPin } from 'lucide-react';

export default function Hero() {
  const whatsappUrl = "https://wa.me/541147538506?text=Hola%2C%20Pepo%20CarAudio.%20Queria%20consultar%20por%20un%20trabajo%20para%20mi%20vehiculo.%20Marca%2C%20modelo%20y%20a%C3%B1o%3A";

  return (
    <section id="hero" className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CONTENEDOR HERO WIDESCREEN */}
        <div className="relative rounded-2xl sm:rounded-3xl border border-white/10 bg-[#09090B] overflow-hidden min-h-[560px] sm:min-h-[620px] lg:min-h-[660px] flex items-center shadow-2xl">
          
          {/* FOTO HERO CON POSICIONAMIENTO OPTIMIZADO */}
          <img
            src="./assets/hero.jpg"
            alt="Pepo CarAudio Taller e Instalación Multimedia"
            fetchpriority="high"
            className="absolute inset-0 w-full h-full object-cover object-[78%_center] sm:object-[75%_center] lg:object-[80%_center] z-0"
          />

          {/* DEGRADADO CINEMATOGRÁFICO LATERAL SUAVE:
              Mantiene la izquierda con contraste perfecto para textos
              y deja la pantalla del auto visible y luminosa a la derecha */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#09090B] via-[#09090B]/90 sm:via-[#09090B]/85 md:via-[#09090B]/75 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-transparent to-[#09090B]/40 z-10 pointer-events-none" />

          {/* CONTENIDO TEXTUAL */}
          <div className="relative z-20 max-w-2xl px-6 py-12 sm:px-12 sm:py-16 lg:px-16">
            
            {/* BADGE TECNOLÓGICO */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#38BDF8]/20 bg-[#38BDF8]/10 text-[#38BDF8] text-[10px] sm:text-xs font-semibold tracking-wider uppercase mb-5"
            >
              <span className="w-2 h-2 rounded-full bg-[#38BDF8] shadow-[0_0_8px_#38BDF8] animate-pulse" />
              <span>32 AÑOS DE EXPERIENCIA • LABORATORIO PROPIO</span>
            </motion.div>

            {/* TITULAR H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black uppercase text-white leading-[1.08] tracking-tight mb-4"
            >
              Especialistas en pantallas originales{' '}
              <span className="text-[#FACC15] block sm:inline">y electrónica automotriz.</span>
            </motion.h1>

            {/* SUBTÍTULO */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-xl mb-8 font-normal"
            >
              Negocio familiar con 32 años de trayectoria en Villa Lynch. Venta, reparación en laboratorio propio, activación de funciones originales y equipamiento integral en un mismo lugar.
            </motion.p>

            {/* BOTONERA CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10"
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#FACC15] text-[#09090B] font-heading font-extrabold text-xs sm:text-sm tracking-wider uppercase px-7 py-3.5 rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(250,204,21,0.45)] active:translate-y-0 text-center"
              >
                <MessageSquare size={16} className="stroke-[2.5]" />
                <span>Consultá por tu vehículo</span>
                <ArrowRight size={16} className="stroke-[2.5]" />
              </a>

              <a
                href="#trabajos"
                className="inline-flex items-center justify-center gap-2 border border-white/20 bg-white/5 hover:border-[#FACC15]/60 hover:text-[#FACC15] text-white font-heading font-bold text-xs sm:text-sm tracking-wider uppercase px-6 py-3.5 rounded-lg transition-all duration-200 text-center hover:bg-[#FACC15]/5"
              >
                <span>Ver trabajos realizados</span>
              </a>
            </motion.div>

            {/* 3 DATOS CLAVE */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10"
            >
              <div>
                <div className="flex items-center gap-1.5 text-[#FACC15] text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-0.5">
                  <MapPin size={12} />
                  <span>Trayectoria</span>
                </div>
                <div className="text-white text-xs sm:text-sm font-semibold">
                  32 años en el rubro (Negocio familiar)
                </div>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-[#FACC15] text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-0.5">
                  <Cpu size={12} />
                  <span>Laboratorio Propio</span>
                </div>
                <div className="text-white text-xs sm:text-sm font-semibold">
                  Todo en un mismo lugar
                </div>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-[#FACC15] text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-0.5">
                  <Star size={12} fill="#FACC15" />
                  <span>Reputación</span>
                </div>
                <div className="text-white text-xs sm:text-sm font-semibold">
                  4.9 ★ (+500 Reseñas en Google)
                </div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* CHIPS DE CREDENCIALES COMPLEMENTARIOS (3 PILARES BREVES) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-3.5 p-4 rounded-xl border border-white/10 bg-[#141417]/80 hover:border-[#FACC15]/30 transition-colors"
          >
            <div className="w-10 h-10 rounded-lg bg-[#FACC15]/10 flex items-center justify-center text-[#FACC15] shrink-0">
              <Cpu size={20} />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-white uppercase">Laboratorio propio en el local</h4>
              <p className="text-xs text-zinc-400">Diagnóstico y reparación directa sin intermediarios. Todo se resuelve en nuestro taller.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-3.5 p-4 rounded-xl border border-white/10 bg-[#141417]/80 hover:border-[#FACC15]/30 transition-colors"
          >
            <div className="w-10 h-10 rounded-lg bg-[#FACC15]/10 flex items-center justify-center text-[#FACC15] shrink-0">
              <Wrench size={20} />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-white uppercase">Especialistas en fallas de fábrica</h4>
              <p className="text-xs text-zinc-400">Reemplazo con repuestos originales y versiones de vidrio reforzado para evitar futuras roturas.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-3.5 p-4 rounded-xl border border-white/10 bg-[#141417]/80 hover:border-[#FACC15]/30 transition-colors"
          >
            <div className="w-10 h-10 rounded-lg bg-[#FACC15]/10 flex items-center justify-center text-[#FACC15] shrink-0">
              <ShieldCheck size={20} />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-white uppercase">32 años de respaldo familiar</h4>
              <p className="text-xs text-zinc-400">Atención personalizada, criterio técnico real y garantía en cada intervención.</p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
