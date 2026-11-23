import React from 'react';
import { motion } from 'framer-motion';
import { Star, ExternalLink, ShieldCheck, MapPin } from 'lucide-react';

const googleReviews = [
  {
    id: 1,
    name: 'Gastón Kiyisawa',
    initial: 'G',
    avatarColor: 'bg-[#2E7D32]',
    detail: '2 opiniones',
    time: 'Hace 3 meses',
    rating: 5,
    comment: 'Excelente trabajo!! Excelente la atención!!! Damián un genio!! Llevaba meses sin que un técnico me de una solución a la pantalla y una respuesta fehaciente!! El pudo dar con la tecla, sin vueltas! 1 día probando la reparación, sin problemas!! Muy recomendable!',
    link: 'https://maps.app.goo.gl/jLkySrm39k8qqwUP9',
  },
  {
    id: 2,
    name: 'Marcelo Pino',
    initial: 'M',
    avatarColor: 'bg-[#1976D2]',
    detail: 'Local Guide · 17 opiniones · 6 fotos',
    isLocalGuide: true,
    time: 'Hace 3 meses',
    rating: 5,
    comment: 'Llegué por recomendación y la verdade voy muy contento por el trabajo que hicieron en la pantalla del 208. Gente muy dedicada y detallista es lo que marco la diferencia! Muchas gracias !',
    link: 'https://maps.app.goo.gl/5vAwRcvet6Eg3hXr6',
  },
  {
    id: 3,
    name: 'Franco Perrone',
    initial: 'F',
    avatarColor: 'bg-[#1B5E20]',
    detail: '3 opiniones',
    isNew: true,
    time: 'Hace 2 semanas',
    rating: 5,
    comment: 'El trato al cliente es excelente, el servicio impecable y para cerrar la rapidez y buena predisposición inigualable. Si me surge otra eventualidad sin dudas acudiría de nuevo a este lugar. En este caso tenía que regrabar todo el sistema de mi Ford ka 2019',
    link: 'https://maps.app.goo.gl/MXtgtfJyEtuyh5Dc9',
  },
  {
    id: 4,
    name: 'Iván Peralta',
    initial: 'I',
    avatarColor: 'bg-[#D32F2F]',
    detail: '5 opiniones · 1 foto',
    time: 'Hace 4 meses',
    rating: 5,
    comment: 'Trabajan espectacular, super prolijos, me fascino como quedo el laburo, siempre ellos recomendando los mejores respuestos y componentes para no renegar nunca mas!, lo recomiendo al 100%, dejo adjuntas fotos del laburazo que se mandaron, es una pantalla para una kangoo 2008, tiene para la musica, mapa, y hasta la cámara de reversa que es súper útil.',
    link: 'https://maps.app.goo.gl/KaRQiZsEoEW9LoS57',
  },
  {
    id: 5,
    name: 'Ana Castiglia',
    initial: 'A',
    avatarColor: 'bg-[#795548]',
    detail: '2 opiniones · 1 foto',
    time: 'Hace 1 mes',
    rating: 5,
    comment: 'Excelente atención y muy atento Damian. Repararon la camara de reversa en un ford fiesta en el tiempo que me dijeron. Super recomendable!',
    link: 'https://maps.app.goo.gl/WXncVUAu7khVMBAc6',
  },
  {
    id: 6,
    name: 'Esteban Basgall',
    initial: 'E',
    avatarColor: 'bg-[#3949AB]',
    detail: '11 opiniones · 5 fotos',
    time: 'Hace 1 mes',
    rating: 5,
    comment: 'Recomiendo al 100%! Muy buena atención y explicación del trabajo q va a hacer! Fui con mi camioneta a cambiarle el táctil de la pantalla y a instalar una cámara de marcha atrás y me explicó lo q iba a hacer y como....y me actualizó el estéreo sin costo! Un genio',
    link: 'https://maps.app.goo.gl/De3ZKe2u3spCwzBQ6',
  },
  {
    id: 7,
    name: 'Tomas Pegasano',
    initial: 'T',
    avatarColor: 'bg-[#00796B]',
    detail: '1 opinión · 3 fotos',
    time: 'Hace 2 meses',
    rating: 5,
    comment: 'Fui para instalar un Discovery media en un vento 2012, excelente atención me resolvieron todas las dudas, me desbloquearon la unidad y me habilitaron carplay y android auto. Además pedí que me programen la radio para que muestre los sensores de estacionamiento y la figura del vento. Trabajo muy prolijo quedo todo funcionando 10 puntos. Realmente super recomendado dejo fotos del antes y después.',
    link: 'https://maps.app.goo.gl/gAJbq7txPCj1hfve8',
  },
  {
    id: 8,
    name: 'Lautaro Nicolas Poma',
    initial: 'L',
    avatarColor: 'bg-[#F57C00]',
    detail: '1 opinión · 4 fotos',
    isNew: true,
    time: 'Hace 2 semanas',
    rating: 5,
    comment: 'Excelente atención y servicio. Me cambiaron la pantalla de mi Peugeot 208 y quedó todo perfecto. Muy buena predisposición, trabajo prolijo y rápido. Súper recomendables, ¡muchas gracias!',
    link: 'https://maps.app.goo.gl/noyaaCK5q1kHKutE6',
  },
];

export default function Reviews() {
  const mapsProfileUrl = "https://www.google.com/maps/place/Pepo+CarAudio+(Autoradio)/@-34.5896503,-58.5582063,13.54z/data=!4m6!3m5!1s0x95bcb7a1c598fe25:0xf2ce84c2a86a0af7!8m2!3d-34.5835783!4d-58.5305114";

  return (
    <section id="opiniones" className="py-20 bg-[#09090B] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CABECERA GOOGLE REVIEWS */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-zinc-300 text-xs font-bold uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
              <span>Reseñas Reales y Verificadas</span>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <div className="bg-white px-3.5 py-1.5 rounded-xl shadow-md shrink-0">
                <img
                  src="./assets/google-reviews.png"
                  alt="Google Reviews"
                  className="h-8 sm:h-9 w-auto object-contain"
                />
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black uppercase text-white tracking-tight">
                  Opiniones de Clientes
                </h2>
                <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                  Experiencias reales sobre reparación de pantallas, cámaras y software en nuestro taller.
                </p>
              </div>
            </div>
          </div>

          {/* TARJETA RESUMEN 4.9 ESTRELLAS */}
          <div className="bg-[#141417] border border-white/10 rounded-2xl p-4 sm:px-6 sm:py-4 flex items-center gap-5 shrink-0">
            <div className="text-center border-r border-white/10 pr-5">
              <div className="font-heading font-black text-3xl sm:text-4xl text-[#FACC15] leading-none">
                4,9
              </div>
              <div className="flex items-center justify-center gap-0.5 text-[#FACC15] mt-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} fill="#FACC15" />
                ))}
              </div>
            </div>

            <div>
              <div className="text-xs sm:text-sm font-bold text-white">
                +500 opiniones en Google
              </div>
              <a
                href={mapsProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-[#38BDF8] hover:underline flex items-center gap-1 mt-0.5"
              >
                <span>Ver perfil oficial</span>
                <ExternalLink size={11} />
              </a>
            </div>
          </div>
        </div>

        {/* GRILLA DE LAS 8 RESEÑAS (2 FILAS DE 4 EN DESKTOP, 2 COLUMNAS EN TABLET, 1 EN MÓVIL) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {googleReviews.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-[#141417] border border-white/10 hover:border-[#FACC15]/40 rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] group"
            >
              <div>
                {/* CABECERA DEL REVIEW: AVATAR + NOMBRE + TIEMPO */}
                <div className="flex items-start gap-3 mb-3">
                  <div
                    className={`w-10 h-10 rounded-full ${item.avatarColor} text-white font-bold text-sm flex items-center justify-center shrink-0 shadow-md`}
                  >
                    {item.initial}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5">
                      <h3 className="text-xs sm:text-sm font-bold text-white truncate">
                        {item.name}
                      </h3>
                      {item.isLocalGuide && (
                        <span className="text-[9px] font-bold text-[#FACC15] bg-[#FACC15]/10 px-1.5 py-0.2 rounded border border-[#FACC15]/20 shrink-0">
                          Guide
                        </span>
                      )}
                    </div>
                    
                    <div className="text-[11px] text-zinc-400 truncate">
                      {item.detail}
                    </div>
                  </div>
                </div>

                {/* 5 ESTRELLAS + TIEMPO */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-1 text-[#FACC15]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={14} fill="#FACC15" />
                    ))}
                  </div>

                  <div className="flex items-center gap-1.5">
                    {item.isNew && (
                      <span className="text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
                        Nueva
                      </span>
                    )}
                    <span className="text-[10px] text-zinc-500">
                      {item.time}
                    </span>
                  </div>
                </div>

                {/* COMENTARIO REAL DEL CLIENTE */}
                <p className="text-xs text-zinc-300 leading-relaxed italic">
                  "{item.comment}"
                </p>
              </div>

              {/* BOTÓN VER REVIEW CON LINK DIRECTO */}
              <div className="pt-4 mt-4 border-t border-white/5">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-between px-3.5 py-2.5 rounded-lg border border-white/10 bg-white/5 hover:bg-[#FACC15] hover:text-[#09090B] hover:border-[#FACC15] text-xs font-heading font-bold uppercase tracking-wider text-zinc-200 transition-all duration-200 group/btn"
                >
                  <span>Ver review</span>
                  <ExternalLink
                    size={13}
                    className="text-zinc-400 group-hover/btn:text-[#09090B] transition-colors"
                  />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTÓN INFERIOR: ABRIR TODAS LAS RESEÑAS EN GOOGLE MAPS */}
        <div className="mt-12 text-center">
          <a
            href={mapsProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/20 bg-[#141417] hover:border-[#FACC15] hover:text-[#FACC15] text-white text-xs font-heading font-extrabold uppercase tracking-wider transition-all duration-200 shadow-lg"
          >
            <span>Ver las +500 opiniones en Google Maps</span>
            <ExternalLink size={14} />
          </a>
        </div>

      </div>
    </section>
  );
}
