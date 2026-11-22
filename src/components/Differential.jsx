import React from 'react';
import { motion } from 'framer-motion';

const pillars = [
  {
    num: '01',
    title: 'REFERENTES EN VOLKSWAGEN Y PEUGEOT',
    desc: 'Resolvemos a diario la falla de fábrica más común en pantallas de VW Amarok y Peugeot 208 / 2008, instalando el táctil original en versión de vidrio reforzado.',
  },
  {
    num: '02',
    title: 'LABORATORIO ELECTRÓNICO PROPIO',
    desc: 'No tercerizamos reparaciones. Contamos con laboratorio propio en el taller para diagnosticar y reparar módulos, placas y displays con total precisión.',
  },
  {
    num: '03',
    title: 'EQUIPAMIENTO INTEGRAL',
    desc: 'Además de multimedia y electrónica, realizamos instalaciones de audio, alarmas, cierres centralizados, iluminación LED y tratamientos acrílicos y cerámicos.',
  },
  {
    num: '04',
    title: '32 AÑOS Y +16.000 TRABAJOS',
    desc: 'Asesoramiento honesto y directo con quienes trabajan sobre tu auto. Más de 16.000 trabajos completados priorizando la prolijidad de fábrica y la satisfacción de cada cliente.',
  },
];

export default function Differential() {
  return (
    <section id="diferencial" className="py-20 bg-[#09090B] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ENCABEZADO */}
        <div className="max-w-3xl mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#FACC15]/20 bg-[#FACC15]/10 text-[#FACC15] text-xs font-bold uppercase tracking-wider mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-[#FACC15] shadow-[0_0_8px_#FACC15]" />
            <span>32 AÑOS EN EL RUBRO</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black uppercase text-white tracking-tight mb-4"
          >
            TODO EN UN MISMO LUGAR.{' '}
            <span className="text-[#FACC15] block sm:inline">VENTA, LABORATORIO Y EXPERIENCIA REAL.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base text-zinc-400"
          >
            Somos un negocio familiar con más de tres décadas de trayectoria. Combinamos equipamiento integral con un laboratorio electrónico propio que nos convierte en referentes de la zona.
          </motion.p>
        </div>

        {/* 4 PILARES EN GRILLA RESPONSIVE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, index) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#141417] border border-white/10 rounded-2xl p-6 sm:p-7 relative overflow-hidden flex flex-col justify-between group hover:border-[#FACC15]/40 transition-all duration-300"
            >
              {/* LÍNEA DECORATIVA SUPERIOR EN AMARILLO */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FACC15] to-transparent opacity-40 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* NÚMERO EDITORIAL GRANDE */}
                <div className="font-heading font-black text-4xl sm:text-5xl text-[#FACC15] tracking-tighter mb-4">
                  {item.num}
                </div>

                <h3 className="text-base sm:text-lg font-heading font-bold text-white uppercase mb-3">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-white/5 flex items-center justify-between text-zinc-500 text-[10px] uppercase font-bold tracking-widest">
                <span>Pepo CarAudio</span>
                <span className="text-[#FACC15]">★</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
