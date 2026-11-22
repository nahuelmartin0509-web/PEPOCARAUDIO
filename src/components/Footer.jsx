import React from 'react';
import { Phone, MessageSquare, MapPin } from 'lucide-react';
import { InstagramIcon } from './Icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#070709] border-t border-white/10 pt-16 pb-12 text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* PARTE SUPERIOR */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/5">
          
          {/* COLUMNA 1: LOGO E IDENTIDAD */}
          <div className="space-y-4">
            <img
              src="./assets/logo.png"
              alt="Pepo CarAudio"
              className="h-10 w-auto object-contain"
            />
            <p className="text-zinc-400 text-xs leading-relaxed max-w-sm">
              Especialistas en integración, instalación y reparación de audio, pantallas multimedia y electrónica automotriz.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/pepocaraudio/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-[#FACC15] hover:border-[#FACC15] transition-colors"
                aria-label="Instagram de Pepo CarAudio"
              >
                <InstagramIcon size={15} />
              </a>
              <a
                href="https://wa.me/541147538506"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-[#25D366] hover:border-[#25D366] transition-colors"
                aria-label="WhatsApp de Pepo CarAudio"
              >
                <MessageSquare size={15} />
              </a>
            </div>
          </div>

          {/* COLUMNA 2: NAVEGACIÓN */}
          <div>
            <h4 className="text-xs font-heading font-extrabold uppercase tracking-widest text-white mb-4">
              Navegación
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#hero" className="hover:text-[#FACC15] transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-[#FACC15] transition-colors">
                  Servicios Especializados
                </a>
              </li>
              <li>
                <a href="#diferencial" className="hover:text-[#FACC15] transition-colors">
                  El Estándar Pepo
                </a>
              </li>
              <li>
                <a href="#trabajos" className="hover:text-[#FACC15] transition-colors">
                  Trabajos Realizados
                </a>
              </li>
              <li>
                <a href="#opiniones" className="hover:text-[#FACC15] transition-colors">
                  Opiniones de Clientes
                </a>
              </li>
              <li>
                <a href="#ubicacion" className="hover:text-[#FACC15] transition-colors">
                  Ubicación & Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMNA 3: SERVICIOS */}
          <div>
            <h4 className="text-xs font-heading font-extrabold uppercase tracking-widest text-white mb-4">
              Servicios
            </h4>
            <ul className="space-y-2.5 text-zinc-400">
              <li>Pantallas y Multimedia</li>
              <li>Apple CarPlay y Android Auto</li>
              <li>Reparación de Módulos</li>
              <li>Sistemas Originales (OEM)</li>
              <li>Cámaras y Sensores</li>
              <li>Reparación de Pantallas y Displays</li>
            </ul>
          </div>

          {/* COLUMNA 4: CONTACTO RÁPIDO */}
          <div>
            <h4 className="text-xs font-heading font-extrabold uppercase tracking-widest text-white mb-4">
              Taller Villa Lynch
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2.5">
                <MapPin size={15} className="text-[#FACC15] shrink-0 mt-0.5" />
                <span>C. 91 1345, Villa Lynch, San Martín, Bs. As.</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={15} className="text-[#FACC15] shrink-0" />
                <a href="tel:+541147538506" className="hover:text-white transition-colors">
                  +54 11 4753-8506
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageSquare size={15} className="text-[#FACC15] shrink-0" />
                <a href="https://wa.me/541147538506" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  WhatsApp: +54 11 4753-8506
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* PARTE INFERIOR */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
          <p>
            Pepo CarAudio · Audio, multimedia y electrónica automotriz.
          </p>
          <p>
            Villa Lynch · General San Martín · Buenos Aires
          </p>
        </div>

      </div>
    </footer>
  );
}
