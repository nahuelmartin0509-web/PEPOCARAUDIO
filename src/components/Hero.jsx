import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Cpu, Wrench, MessageSquare, Star, MapPin, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  const whatsappUrl = "https://wa.me/5491155705378?text=Hola%2C%20Pepo%20CarAudio.%20Queria%20consultar%20por%20un%20trabajo%20para%20mi%20vehiculo.%20Marca%2C%20modelo%20y%20a%C3%B1o%3A";

  return (
    <section id="hero" className="relative pt-20 pb-12 sm:pt-28 sm:pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* LOGO EN VERSIÓN MÓVIL (CENTRADO ARRIBA DEL HERO) */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex md:hidden justify-center items-center pb-5 pt-1"
        >
          <a href="#hero" className="inline-block group" aria-label="Pepo CarAudio">
            <img
              src="./assets/logo.png"
              alt="Pepo CarAudio - Electromecánica y Audio Car"
              className="h-12 w-auto object-contain drop-shadow-[0_4px_24px_rgba(250,204,21,0.22)] transition-transform active:scale-95"
            />
          </a>
        </motion.div>

        {/* CONTENEDOR HERO ADAPTADO (MÓVIL Y DESKTOP WIDESCREEN) */}
        <div className="relative rounded-2xl sm:rounded-3xl border border-white/10 bg-[#09090B] overflow-hidden flex flex-col md:flex-row md:items-center shadow-2xl min-h-0 md:min-h-[620px] lg:min-h-[660px]">
          
          {/* FOTO HERO EN MÓVIL: ENCABEZADO VISUAL CON PANTALLA TOTALMENTE NÍTIDA */}
          <div className="relative md:hidden w-full h-56 sm:h-64 overflow-hidden border-b border-white/10 shrink-0">
            <img
              src="./assets/hero.jpg"
              alt="Pepo CarAudio Taller e Instalación Multimedia"
              fetchpriority="high"
              className="w-full h-full object-cover object-[78%_center]"
            />
            {/* Degradado inferior para fundir con el bloque de texto */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-[#09090B]/30 to-black/30 pointer-events-none" />
            
            {/* Badges visuales sobre la foto en móvil */}
            <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#09090B]/85 border border-[#FACC15]/40 text-[#FACC15] text-[10px] font-bold uppercase tracking-wider backdrop-blur-md shadow-lg">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FACC15] animate-pulse" />
              <span>Instalación en Taller</span>
            </div>

            <div className="absolute bottom-3 right-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#09090B]/90 border border-white/20 text-white text-[10px] font-bold backdrop-blur-md shadow-lg">
              <span className="text-[#FACC15]">★</span>
              <span>+16.000 Trabajos</span>
            </div>
          </div>

          {/* FOTO HERO EN DESKTOP WIDESCREEN CON POSICIONAMIENTO LATERAL */}
          <img
            src="./assets/hero.jpg"
            alt="Pepo CarAudio Taller e Instalación Multimedia"
            fetchpriority="high"
            className="hidden md:block absolute inset-0 w-full h-full object-cover object-[78%_center] lg:object-[80%_center] z-0"
          />

          {/* DEGRADADOS CINEMATOGRÁFICOS EN DESKTOP */}
          <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#09090B] via-[#09090B]/90 md:via-[#09090B]/80 to-transparent z-10 pointer-events-none" />
          <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-[#09090B] via-transparent to-[#09090B]/40 z-10 pointer-events-none" />

          {/* CONTENIDO TEXTUAL */}
          <div className="relative z-20 w-full md:max-w-2xl px-5 py-7 sm:px-10 sm:py-12 lg:px-16">
            
            {/* BADGE TECNOLÓGICO */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#38BDF8]/20 bg-[#38BDF8]/10 text-[#38BDF8] text-[10px] sm:text-xs font-semibold tracking-wider uppercase mb-4 sm:mb-5"
            >
              <span className="w-2 h-2 rounded-full bg-[#38BDF8] shadow-[0_0_8px_#38BDF8] animate-pulse" />
              <span>32 AÑOS DE EXPERIENCIA • LABORATORIO PROPIO</span>
            </motion.div>

            {/* TITULAR H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl sm:text-4xl lg:text-5xl font-heading font-black uppercase text-white leading-[1.12] sm:leading-[1.08] tracking-tight mb-3 sm:mb-4"
            >
              Especialistas en pantallas originales{' '}
              <span className="text-[#FACC15] block sm:inline">y electrónica automotriz.</span>
            </motion.h1>

            {/* SUBTÍTULO */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xs sm:text-base text-zinc-300 leading-relaxed max-w-xl mb-6 sm:mb-8 font-normal"
            >
              Negocio familiar con 32 años de trayectoria en Villa Lynch y más de 16.000 trabajos completados. Venta, reparación en laboratorio propio, activación de funciones originales y equipamiento integral en un mismo lugar.
            </motion.p>

            {/* BOTONERA CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8 sm:mb-10"
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

            {/* 4 DATOS CLAVE (GRILLA 2x2 EN MÓVIL / 4 COLUMNAS EN DESKTOP) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 pt-5 sm:pt-6 border-t border-white/10"
            >
              <div className="bg-white/[0.03] sm:bg-transparent p-2.5 sm:p-0 rounded-lg sm:rounded-none border border-white/5 sm:border-0">
                <div className="flex items-center gap-1.5 text-[#FACC15] text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-0.5">
                  <MapPin size={12} className="shrink-0" />
                  <span className="truncate">Trayectoria</span>
                </div>
                <div className="text-white text-xs sm:text-sm font-semibold">
                  32 años en el rubro
                </div>
                <div className="text-zinc-500 text-[10px] hidden sm:block">
                  Negocio familiar
                </div>
              </div>

              <div className="bg-white/[0.03] sm:bg-transparent p-2.5 sm:p-0 rounded-lg sm:rounded-none border border-white/5 sm:border-0">
                <div className="flex items-center gap-1.5 text-[#FACC15] text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-0.5">
                  <Wrench size={12} className="shrink-0" />
                  <span className="truncate">Experiencia</span>
                </div>
                <div className="text-white text-xs sm:text-sm font-semibold">
                  +16.000 trabajos
                </div>
                <div className="text-zinc-500 text-[10px] hidden sm:block">
                  Completados con éxito
                </div>
              </div>

              <div className="bg-white/[0.03] sm:bg-transparent p-2.5 sm:p-0 rounded-lg sm:rounded-none border border-white/5 sm:border-0">
                <div className="flex items-center gap-1.5 text-[#FACC15] text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-0.5">
                  <Cpu size={12} className="shrink-0" />
                  <span className="truncate">Laboratorio</span>
                </div>
                <div className="text-white text-xs sm:text-sm font-semibold">
                  Propio en el local
                </div>
                <div className="text-zinc-500 text-[10px] hidden sm:block">
                  Sin intermediarios
                </div>
              </div>

              <div className="bg-white/[0.03] sm:bg-transparent p-2.5 sm:p-0 rounded-lg sm:rounded-none border border-white/5 sm:border-0">
                <div className="flex items-center gap-1.5 text-[#FACC15] text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-0.5">
                  <Star size={12} fill="#FACC15" className="shrink-0" />
                  <span className="truncate">Reputación</span>
                </div>
                <div className="text-white text-xs sm:text-sm font-semibold">
                  4.9 ★ en Google
                </div>
                <div className="text-zinc-500 text-[10px] hidden sm:block">
                  +500 Reseñas
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
              <h4 className="text-xs sm:text-sm font-bold text-white uppercase">32 años y +16.000 trabajos</h4>
              <p className="text-xs text-zinc-400">Atención personalizada, criterio técnico real y garantía familiar en cada intervención.</p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
