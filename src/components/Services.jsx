import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, ArrowRight } from 'lucide-react';

const services = [
  {
    id: '01',
    category: 'MULTIMEDIA',
    title: 'PANTALLAS Y MULTIMEDIA',
    desc: 'Instalación y actualización de sistemas multimedia, integración de pantallas y reemplazo de equipos originales.',
    img: './assets/servicio-pantallas.jpg',
    query: 'Pantallas y Multimedia',
  },
  {
    id: '02',
    category: 'CONECTIVIDAD',
    title: 'APPLE CARPLAY Y ANDROID AUTO',
    desc: 'Activación, configuración e integración de sistemas de conectividad para disfrutar de tus aplicaciones desde el vehículo.',
    img: './assets/servicio-carplay.jpg',
    query: 'Apple CarPlay y Android Auto',
  },
  {
    id: '03',
    category: 'ELECTRÓNICA',
    title: 'REPARACIÓN DE MÓDULOS',
    desc: 'Diagnóstico y reparación de módulos multimedia y sistemas electrónicos del automóvil.',
    img: './assets/servicio-modulos.jpg',
    query: 'Reparación de Módulos',
  },
  {
    id: '04',
    category: 'OEM INTEGRACIÓN',
    title: 'SISTEMAS ORIGINALES',
    desc: 'Configuración, desbloqueo e integración de funciones en sistemas originales, según compatibilidad del vehículo.',
    img: './assets/servicio-originales.jpg',
    query: 'Sistemas Originales',
  },
  {
    id: '05',
    category: 'SEGURIDAD',
    title: 'CÁMARAS Y SENSORES',
    desc: 'Instalación e integración de cámaras de retroceso y sensores de estacionamiento.',
    img: './assets/servicio-camaras.jpg',
    query: 'Cámaras y Sensores de Estacionamiento',
  },
  {
    id: '06',
    category: 'LABORATORIO',
    title: 'REPARACIÓN DE PANTALLAS',
    desc: 'Soluciones para pantallas, módulos táctiles y sistemas multimedia.',
    img: './assets/servicio-reparacion.jpg',
    query: 'Reparación de Pantallas y Displays',
  },
];

export default function Services() {
  const getWhatsappUrl = (serviceName) => {
    const text = encodeURIComponent(`Hola, Pepo CarAudio. Quería consultar por ${serviceName} para mi vehículo. Marca, modelo y año: `);
    return `https://wa.me/541147538506?text=${text}`;
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
            Soluciones para que tu vehículo esté a otro nivel.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base text-zinc-400"
          >
            Tecnología, conectividad y diagnóstico con el estándar y prolijidad que tu auto merece.
          </motion.p>
        </div>

        {/* GRILLA DE SERVICIOS (3x2 en Desktop, 1 columna en Móvil) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item, index) => (
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
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-black">
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
                  className="w-full inline-flex items-center justify-between gap-2 text-xs font-bold uppercase tracking-wider py-2.5 px-3 rounded-lg border border-white/10 bg-white/5 text-zinc-200 group-hover:border-[#FACC15]/50 group-hover:bg-[#FACC15] group-hover:text-[#09090B] transition-all duration-200"
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

      </div>
    </section>
  );
}
