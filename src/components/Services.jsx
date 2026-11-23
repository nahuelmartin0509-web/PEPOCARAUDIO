import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, ArrowRight, ChevronDown, CheckCircle2, Sparkles, Wrench } from 'lucide-react';

const mainServices = [
  {
    id: '01',
    category: 'PANTALLAS ORIGINALES',
    title: 'CAMBIO DE PANTALLA TÁCTIL Y LCD',
    desc: 'Especialistas en fallas de fábrica en equipos originales. Reemplazamos el táctil dañado por el repuesto original en versión de vidrio reforzado de alta durabilidad. Alta demanda y stock permanente para Volkswagen Amarok y Peugeot 208 / 2008, entre otros modelos.',
    img: './assets/CAMBIO DE PANTALLA TACTIL Y LCD.jpg',
    query: 'Cambio de pantalla táctil y LCD (Amarok / 208 / otros)',
  },
  {
    id: '02',
    category: 'LABORATORIO ELECTRÓNICO',
    title: 'REPARACIÓN DE MÓDULOS DE RADIO Y PANTALLAS ORIGINALES',
    desc: 'Diagnóstico y reparación electrónica en nuestro laboratorio propio. Solucionamos fallas de encendido, placas, sonido y pantallas bloqueadas sin necesidad de cambiar el equipo completo.',
    img: './assets/REPARACIÓN DE MÓDULOS DE RADIO Y PANTALLAS ORIGINALES.png',
    query: 'Reparación de módulos de radio y pantallas originales',
  },
  {
    id: '03',
    category: 'SEGURIDAD & INTEGRACIÓN',
    title: 'ACTIVACIÓN DE CÁMARAS EN PANTALLAS ORIGINALES',
    desc: 'Instalación e integración de cámaras de reversa y sensores sobre la pantalla original de fábrica, manteniendo la estética y los comandos del vehículo.',
    img: './assets/ACTIVACIÓN DE CÁMARAS EN PANTALLAS ORIGINALES.jpg',
    query: 'Activación de cámaras en pantallas originales',
  },
  {
    id: '04',
    category: 'SOFTWARE & CONECTIVIDAD',
    title: 'ACTUALIZACIONES DE SOFTWARE Y SISTEMAS',
    desc: 'Actualización de firmware, mapas, radares, habilitación de App Connect, desbloqueo de protección de componentes y programación de número VIN.',
    img: './assets/ACTUALIZACIONES DE SOFTWARE Y SISTEMAS.jpg',
    query: 'Actualizaciones de software, App Connect y sistemas',
  },
];

const specificJobs = [
  'Activación App Connect (VW Beetle, Amarok, Vento)',
  'Cambio de pantalla LCD (Chevrolet Cruze, Tracker)',
  'Habilitación de parlantes traseros (Renault Kwid)',
  'Cámara de reversa (Peugeot 208)',
  'Reparación de pantalla (Fiat 500)',
  'Reparación de pantalla Sync 3 (Ford Ka)',
  'Cámara de reversa (VW Polo, Virtus, Tiguan)',
  'Reparación de pantalla (Fiat Línea, Punto)',
  'Desbloqueo de protección de componentes (Volkswagen)',
  'Reparación de pantalla "System not configured" (Renault)',
  'Reparación de pantalla (Volkswagen Golf MK7)',
  'Puerto USB (VW Amarok, Beetle, Vento, Scirocco, Suran)',
  'Reparación de cámara de reversa (Ford Fiesta Kinetic)',
  'Reparación de pantalla (Ford Fiesta Kinetic Titanium)',
  'Reparación de estéreo con explosiones por parlantes (Ford Fiesta Kinetic)',
  'Programación de número VIN en pantalla original (Peugeot 208, 2008)',
  'Cámara de reversa (Volkswagen Suran, Gol Trend)',
  'Cámara original (Toyota Hilux, Corolla, Etios, Yaris)',
  'Reparación de pantalla táctil MyLink (Chevrolet Tracker, Onix)',
  'Reparación de pantalla táctil multimedia (Chevrolet S10, Trailblazer)',
  'Reparación de pantalla Nav + actualización (Renault)',
  'Reparación de estéreo Nav (Peugeot 308, 408)',
  'Reparación de pantalla táctil (Peugeot 208, 2008)',
  'Instalación de cámara de reversa original (Volkswagen)',
  'Reparación de pantalla original (Peugeot 208)',
  'Actualización de software, mapas y radares táctil (Peugeot 308, 408)',
  'Reparación de calefacción (Chevrolet Onix, Prisma, Spin)',
  'Solución de pantalla táctil (Jeep Compass, Cherokee)',
  'Solución de pantalla táctil 8.4 (Jeep Compass, Cherokee)',
  'Reparación de pantalla (Citroën Aircross, C4)',
  'Reparación de pantalla táctil (VW Amarok, Vento, Suran)',
];

const additionalEquip = [
  'Audio y multimedia automotor',
  'Alarmas y cierres centralizados',
  'Iluminación LED y luces auxiliares',
  'Tratamientos acrílicos y cerámicos',
];

export default function Services() {
  const [isOpen, setIsOpen] = useState(false);

  const getWhatsappUrl = (serviceName) => {
    const text = encodeURIComponent(`Hola, Pepo CarAudio. Quería consultar por ${serviceName} para mi vehículo. Marca, modelo y año: `);
    return `https://wa.me/5491155705378?text=${text}`;
  };

  return (
    <section id="servicios" className="py-20 bg-[#09090B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CABECERA DE SECCIÓN */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#FACC15]/20 bg-[#FACC15]/10 text-[#FACC15] text-xs font-bold uppercase tracking-wider mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-[#FACC15] shadow-[0_0_8px_#FACC15]" />
            <span>Servicios Especializados</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black uppercase text-white tracking-tight mb-4"
          >
            Soluciones integrales para tu vehículo.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base text-zinc-400"
          >
            Somos referentes en la zona en reparación de pantallas originales, además de ofrecer equipamiento completo en audio, seguridad, iluminación y estética.
          </motion.p>
        </div>

        {/* GRILLA DE 4 SERVICIOS PRINCIPALES (2x2 en Desktop, 1 columna en Móvil) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {mainServices.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group bg-[#141417] border border-white/10 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-[#FACC15]/40 hover:shadow-[0_8px_30px_rgba(0,0,0,0.6)]"
            >
              <div>
                {/* CONTENEDOR DE IMAGEN CON ZOOM EN HOVER */}
                <div className="relative h-52 sm:h-60 w-full overflow-hidden bg-black">
                  <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141417] via-transparent to-transparent opacity-80" />
                  
                  {/* CATEGORÍA FLOTANTE */}
                  <div className="absolute top-3 right-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#38BDF8]/15 border border-[#38BDF8]/30 text-[#38BDF8]">
                      {item.category}
                    </span>
                  </div>

                  {/* NÚMERO IDENTIFICADOR */}
                  <div className="absolute top-3 left-3">
                    <span className="text-xs font-heading font-black text-[#FACC15] bg-[#09090B]/80 px-2 py-0.5 rounded border border-white/10">
                      {item.id}
                    </span>
                  </div>
                </div>

                {/* TEXTO DE LA TARJETA */}
                <div className="p-6">
                  <h3 className="text-base sm:text-lg font-heading font-extrabold text-white uppercase mb-2 group-hover:text-[#FACC15] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* BOTÓN DE CONSULTA POR WHATSAPP */}
              <div className="px-6 pb-6 pt-2">
                <a
                  href={getWhatsappUrl(item.query)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-between gap-2 text-xs font-bold uppercase tracking-wider py-3 px-4 rounded-lg border border-white/10 bg-white/5 text-zinc-200 group-hover:border-[#FACC15]/50 group-hover:bg-[#FACC15] group-hover:text-[#09090B] transition-all duration-200"
                >
                  <span className="inline-flex items-center gap-2">
                    <MessageSquare size={14} />
                    <span>Consultar por este servicio</span>
                  </span>
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>

            </motion.div>
          ))}
        </div>

        {/* BLOQUE SECUNDARIO DESPLEGABLE (ACORDEÓN ELEGANTE) */}
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#141417] border border-white/10 rounded-2xl overflow-hidden transition-all duration-300">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-full flex items-center justify-between p-5 sm:p-6 text-left hover:bg-white/5 transition-colors focus:outline-none group"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#FACC15]/10 flex items-center justify-center text-[#FACC15] shrink-0">
                  <Wrench size={18} />
                </div>
                <div>
                  <span className="text-xs sm:text-sm font-heading font-extrabold uppercase tracking-wider text-white group-hover:text-[#FACC15] transition-colors">
                    Ver otros servicios y trabajos específicos por modelo
                  </span>
                  <span className="block text-[11px] text-zinc-400 mt-0.5">
                    Soluciones directas por marca: VW, Peugeot, Ford, Chevrolet, Renault, Fiat, Toyota, Jeep y Citroën
                  </span>
                </div>
              </div>

              <div className={`w-8 h-8 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-[#FACC15] transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#FACC15]/10 border-[#FACC15]/40' : ''}`}>
                <ChevronDown size={18} />
              </div>
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  className="overflow-hidden border-t border-white/10 bg-[#09090B]/90"
                >
                  <div className="p-6 sm:p-8 space-y-8">
                    
                    {/* TRABAJOS ESPECÍFICOS POR MODELO */}
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FACC15]" />
                        <h4 className="text-xs font-heading font-extrabold uppercase tracking-widest text-[#FACC15]">
                          Trabajos específicos de pantalla y electrónica por marca y modelo
                        </h4>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                        {specificJobs.map((job, idx) => (
                          <a
                            key={idx}
                            href={getWhatsappUrl(job)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-start gap-2.5 p-3 rounded-xl border border-white/5 bg-[#141417]/70 hover:border-[#FACC15]/40 hover:bg-[#141417] transition-all group"
                          >
                            <CheckCircle2 size={15} className="text-[#FACC15] shrink-0 mt-0.5" />
                            <span className="text-xs text-zinc-300 group-hover:text-white transition-colors">
                              {job}
                            </span>
                          </a>
                        ))}
                      </div>
                    </div>

                    {/* EQUIPAMIENTO ADICIONAL DEL TALLER */}
                    <div className="pt-6 border-t border-white/10">
                      <div className="flex items-center gap-2 mb-4">
                        <Sparkles size={14} className="text-[#38BDF8]" />
                        <h4 className="text-xs font-heading font-extrabold uppercase tracking-widest text-[#38BDF8]">
                          Equipamiento adicional del taller
                        </h4>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                        {additionalEquip.map((item, idx) => (
                          <div
                            key={idx}
                            className="p-3.5 rounded-xl border border-white/10 bg-[#141417] text-xs font-semibold text-zinc-200 flex items-center gap-2.5"
                          >
                            <span className="w-2 h-2 rounded-full bg-[#38BDF8]" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA DIRECTO EN DESPLEGABLE */}
                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#141417] p-5 rounded-xl border border-white/10">
                      <div>
                        <div className="text-xs font-bold text-white uppercase">¿No encontrás tu modelo o falla en la lista?</div>
                        <div className="text-xs text-zinc-400">Escribinos directamente con la marca, modelo y año para evaluar tu caso.</div>
                      </div>
                      <a
                        href="https://wa.me/5491155705378?text=Hola%2C%20Pepo%20CarAudio.%20Queria%20consultar%20por%20un%20trabajo%20especifico%20para%20mi%20vehiculo.%20Marca%2C%20modelo%20y%20a%C3%B1o%3A"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#FACC15] text-[#09090B] font-heading font-extrabold text-xs uppercase px-5 py-2.5 rounded-lg shrink-0 hover:shadow-[0_0_20px_rgba(250,204,21,0.35)] transition-all"
                      >
                        <MessageSquare size={14} />
                        <span>Consultar por mi auto</span>
                      </a>
                    </div>

                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
