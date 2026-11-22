import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Send, Car, Calendar, Wrench } from 'lucide-react';

const serviceOptions = [
  'Cambio de pantalla táctil (VW Amarok / Peugeot 208 / otros)',
  'Reparación de módulo de radio o pantalla original',
  'Activación de cámara en pantalla original',
  'Actualización de software / App Connect / VIN',
  'Audio, alarmas, iluminación LED o estética vehicular',
  'Otro servicio / Consulta general',
];

export default function QuoteCalculator() {
  const [selectedService, setSelectedService] = useState(
    'Cambio de pantalla táctil (VW Amarok / Peugeot 208 / otros)'
  );
  const [carModel, setCarModel] = useState('');
  const [carYear, setCarYear] = useState('');

  const handleWhatsappSubmit = (e) => {
    e.preventDefault();

    let text = '';
    const hasData = carModel.trim() || carYear.trim() || selectedService;

    if (hasData && (carModel.trim() || carYear.trim())) {
      text = `Hola, Pepo CarAudio. Quería consultar por un presupuesto para mi vehículo:\n\n• Servicio: ${selectedService}\n• Vehículo: ${carModel.trim() || 'A confirmar'}\n• Año: ${carYear.trim() || 'A confirmar'}\n\n¿Podrían indicarme opciones y disponibilidad?`;
    } else {
      text = `Hola, Pepo CarAudio. Quería consultar por un trabajo de ${selectedService} para mi vehículo. Marca, modelo y año: `;
    }

    const url = `https://wa.me/5491155705378?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="cotizador" className="py-20 bg-[#09090B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* BANNER CTA CON MINI-COTIZADOR */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-br from-[#141417] via-[#141417] to-[#1e1b11] border border-[#FACC15]/30 rounded-3xl p-8 sm:p-12 lg:p-14 overflow-hidden shadow-2xl"
        >
          {/* LUZ DECORATIVA AMARILLA */}
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-[#FACC15]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* TEXTO DE CABECERA */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#FACC15]/20 bg-[#FACC15]/10 text-[#FACC15] text-xs font-bold uppercase tracking-wider mb-4">
                <span className="w-2 h-2 rounded-full bg-[#FACC15] shadow-[0_0_8px_#FACC15]" />
                <span>Atención Personalizada</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-heading font-black uppercase text-white tracking-tight mb-4">
                ¿Qué necesita tu vehículo?
              </h2>

              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-6">
                Contanos qué querés instalar, actualizar o reparar. Nuestro equipo técnico evalúa compatibilidad y te brinda la mejor solución.
              </p>

              <div className="space-y-3 text-xs sm:text-sm text-zinc-400">
                <p className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FACC15]" />
                  <span>Respuesta rápida y directa con el taller</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FACC15]" />
                  <span>Presupuesto personalizado sin compromiso</span>
                </p>
              </div>
            </div>

            {/* FORMULARIO MINI-COTIZADOR */}
            <div className="lg:col-span-6">
              <form
                onSubmit={handleWhatsappSubmit}
                className="bg-[#09090B]/90 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-xl"
              >
                <div className="text-xs font-heading font-bold uppercase tracking-wider text-[#FACC15] mb-5 flex items-center justify-between">
                  <span>Consulta Rápida por WhatsApp</span>
                  <MessageSquare size={16} />
                </div>

                {/* CAMPO 1: SERVICIO */}
                <div className="mb-4">
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2 flex items-center gap-2">
                    <Wrench size={14} className="text-[#FACC15]" />
                    <span>Servicio de interés</span>
                  </label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full bg-[#141417] border border-white/15 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FACC15] transition-colors cursor-pointer"
                  >
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-[#141417] text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* CAMPO 2 Y 3: VEHÍCULO Y AÑO */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2 flex items-center gap-2">
                      <Car size={14} className="text-[#FACC15]" />
                      <span>Marca y modelo</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Ej: VW Amarok / 208"
                      value={carModel}
                      onChange={(e) => setCarModel(e.target.value)}
                      className="w-full bg-[#141417] border border-white/15 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#FACC15] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2 flex items-center gap-2">
                      <Calendar size={14} className="text-[#FACC15]" />
                      <span>Año</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Ej: 2021"
                      value={carYear}
                      onChange={(e) => setCarYear(e.target.value)}
                      maxLength={4}
                      className="w-full bg-[#141417] border border-white/15 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#FACC15] transition-colors"
                    />
                  </div>
                </div>

                {/* BOTÓN SUBMIT WHATSAPP */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2.5 bg-[#FACC15] text-[#09090B] font-heading font-extrabold text-xs sm:text-sm tracking-wider uppercase py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(250,204,21,0.45)] active:translate-y-0"
                >
                  <Send size={16} className="stroke-[2.5]" />
                  <span>Consultar por WhatsApp</span>
                </button>

                <p className="text-[11px] text-zinc-500 text-center mt-3">
                  Se abrirá WhatsApp con los datos de tu vehículo listos para enviar.
                </p>
              </form>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
