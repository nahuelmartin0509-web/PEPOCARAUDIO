import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [hovered, setHovered] = useState(false);
  const whatsappUrl = "https://wa.me/541147538506?text=Hola%2C%20Pepo%20CarAudio.%20Queria%20consultar%20por%20un%20trabajo%20para%20mi%20vehiculo.%20Marca%2C%20modelo%20y%20a%C3%B1o%3A";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      
      {/* TOOLTIP EN DESKTOP */}
      <div
        className={`hidden md:flex items-center gap-2 bg-[#141417]/95 border border-white/10 px-3.5 py-2 rounded-xl text-xs font-semibold text-white shadow-xl backdrop-blur-md transition-all duration-300 pointer-events-none ${
          hovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
        <span>¿Consultás por tu vehículo?</span>
      </div>

      {/* BOTÓN FLOTANTE */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative group w-14 h-14 rounded-full bg-[#25D366] text-[#09090B] flex items-center justify-center shadow-[0_4px_25px_rgba(37,211,102,0.4)] hover:scale-105 active:scale-95 transition-all duration-300"
        aria-label="Contactar por WhatsApp"
      >
        {/* AURA DE PULSO SUTIL */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />

        <MessageSquare size={26} className="fill-current stroke-[2] relative z-10" />
      </a>
    </div>
  );
}
