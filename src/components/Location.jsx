import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, MessageSquare, Clock, Navigation, ExternalLink } from 'lucide-react';
import { InstagramIcon } from './Icons';

export default function Location() {
  const mapsUrl = "https://www.google.com/maps/place/Pepo+CarAudio+(Autoradio)/@-34.5896503,-58.5582063,13.54z/data=!4m6!3m5!1s0x95bcb7a1c598fe25:0xf2ce84c2a86a0af7!8m2!3d-34.5835783!4d-58.5305114";
  const whatsappUrl = "https://wa.me/541147538506?text=Hola%2C%20Pepo%20CarAudio.%20Queria%20consultar%20por%20un%20trabajo%20para%20mi%20vehiculo.%20Marca%2C%20modelo%20y%20a%C3%B1o%3A";
  const instagramUrl = "https://www.instagram.com/pepocaraudio/";

  return (
    <section id="ubicacion" className="py-20 bg-[#09090B] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CABECERA */}
        <div className="max-w-3xl mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#38BDF8]/20 bg-[#38BDF8]/10 text-[#38BDF8] text-xs font-bold uppercase tracking-wider mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-[#38BDF8] shadow-[0_0_8px_#38BDF8]" />
            <span>Taller & Punto de Atención</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black uppercase text-white tracking-tight mb-4"
          >
            Vení a conocernos.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base text-zinc-400"
          >
            Ubicados estratégicamente en Villa Lynch, General San Martín, a pocos minutos de General Paz.
          </motion.p>
        </div>

        {/* CONTENEDOR 2 COLUMNAS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* COLUMNA IZQUIERDA: DATOS DE CONTACTO */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-[#141417] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between"
          >
            <div className="space-y-6">
              
              {/* DIRECCIÓN */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#FACC15]/10 flex items-center justify-center text-[#FACC15] shrink-0 mt-1">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1">
                    Dirección
                  </h4>
                  <p className="text-sm sm:text-base text-white font-medium">
                    C. 91 1345, B1672 Villa Lynch
                  </p>
                  <p className="text-xs text-zinc-400">
                    General San Martín, Buenos Aires, Argentina
                  </p>
                </div>
              </div>

              {/* TELÉFONO */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#FACC15]/10 flex items-center justify-center text-[#FACC15] shrink-0 mt-1">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1">
                    Teléfono directo
                  </h4>
                  <a
                    href="tel:+541147538506"
                    className="text-sm sm:text-base text-white font-medium hover:text-[#FACC15] transition-colors"
                  >
                    +54 11 4753-8506
                  </a>
                </div>
              </div>

              {/* WHATSAPP */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#FACC15]/10 flex items-center justify-center text-[#FACC15] shrink-0 mt-1">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1">
                    WhatsApp oficial
                  </h4>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base text-white font-medium hover:text-[#FACC15] transition-colors"
                  >
                    +54 11 4753-8506
                  </a>
                </div>
              </div>

              {/* INSTAGRAM */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#FACC15]/10 flex items-center justify-center text-[#FACC15] shrink-0 mt-1">
                  <InstagramIcon size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1">
                    Instagram
                  </h4>
                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base text-white font-medium hover:text-[#FACC15] transition-colors"
                  >
                    @pepocaraudio
                  </a>
                </div>
              </div>

              {/* HORARIOS */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#FACC15]/10 flex items-center justify-center text-[#FACC15] shrink-0 mt-1">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1">
                    Horarios de atención
                  </h4>
                  <p className="text-sm text-white font-medium">
                    Lunes a viernes de 09:00 a 13:00 y de 14:00 a 18:00
                  </p>
                  <p className="text-xs text-[#FACC15] font-semibold mt-1">
                    * Horarios de referencia, a confirmar previamente.
                  </p>
                </div>
              </div>

            </div>

            {/* BOTONES RÁPIDOS MÓVILES/DESKTOP */}
            <div className="pt-6 mt-6 border-t border-white/10 grid grid-cols-2 gap-3">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white text-[#09090B] font-heading font-extrabold text-xs uppercase hover:bg-zinc-200 transition-colors"
              >
                <Navigation size={14} />
                <span>Cómo llegar</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] text-[#09090B] font-heading font-extrabold text-xs uppercase hover:bg-[#20ba59] transition-colors"
              >
                <MessageSquare size={14} />
                <span>WhatsApp</span>
              </a>
            </div>
          </motion.div>

          {/* COLUMNA DERECHA: GOOGLE MAPS INTERACTIVO CON FILTRO OSCURO */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-[#141417] border border-white/10 rounded-2xl overflow-hidden flex flex-col min-h-[380px] sm:min-h-[460px] relative shadow-2xl"
          >
            {/* MAPA EMBEBIDO CON FILTRO CSS PARA MODO OSCURO */}
            <div className="relative w-full flex-1 min-h-[320px] bg-[#121214] overflow-hidden">
              <iframe
                title="Pepo CarAudio Ubicación en Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13140.237225139039!2d-58.53952377519655!3d-34.58357829999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb7a1c598fe25%3A0xf2ce84c2a86a0af7!2sPepo%20CarAudio%20(Autoradio)!5e0!3m2!1ses-419!2sar!4v1710000000000!5m2!1ses-419!2sar"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full absolute inset-0 map-dark-mode"
              />
            </div>

            {/* BARRA INFERIOR DEL MAPA */}
            <div className="p-4 bg-[#141417] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div className="text-zinc-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                <span>Pepo CarAudio · Villa Lynch, San Martín</span>
              </div>
              
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FACC15] hover:underline font-bold inline-flex items-center gap-1.5"
              >
                <span>Abrir en Google Maps</span>
                <ExternalLink size={13} />
              </a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
