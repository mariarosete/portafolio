import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "./ui/SectionTitle";
import { CERTS as CERTIFICADOS } from "../data/profile";
import { BadgeCheck, ExternalLink } from "lucide-react";

/**
 * Lista de certificados con animación al entrar en viewport.
 * Cada tarjeta es un enlace que abre la certificación en una nueva pestaña.
 */
const Certificados: React.FC = () => (
  // Contenedor principal de la sección
  <section id="certificados" className="max-w-[1440px] mx-auto px-4 md:px-6 pt-10 pb-6">
    {/* Título de sección con icono */}
    <SectionTitle id="certificados" icon={<BadgeCheck className="w-7 h-7" />}>
      Certificados
    </SectionTitle>

    {/* Grid responsiva: 1 columna en móvil, 2 en md+ */}
    <div className="grid md:grid-cols-2 gap-4">
      {CERTIFICADOS.map((certificado) => (
        // Enlace animado: se desvanece y sube al entrar en pantalla 
        <motion.a
          key={certificado.title}                 // clave única por título
          href={certificado.link}                 // URL del certificado
          target="_blank"                         // abrir en nueva pestaña
          rel="noreferrer"                        // seguridad al abrir nueva pestaña
          initial={{ opacity: 0, y: 8 }}          // estado inicial (invisible y 8px abajo)
          whileInView={{ opacity: 1, y: 0 }}      // estado al entrar en viewport
          viewport={{ once: true }}               // animar solo la primera vez
          transition={{ duration: 0.35 }}         // duración de la animación
          className="group block"                 // 'group' para hover coordinado
        >
          {/* Borde degradado + sombra suave */}
          <div className="rounded-2xl p-[2px] bg-gradient-to-r from-rose-300/35 via-rose-200/30 to-amber-200/35 hover:from-rose-300/55 hover:via-rose-200/50 hover:to-amber-200/55 shadow-[0_16px_40px_-24px_rgba(244,63,94,.30)] transition">
            {/* Tarjeta interior con blur y borde sutil */}
            <div className="rounded-[14px] ring-1 ring-white/70 bg-white/95 backdrop-blur-[2px] px-4 py-3 flex items-center gap-4">
              
              {/* Logo  */}
              <div className="shrink-0 w-12 h-12 rounded-xl ring-1 ring-slate-200 bg-white p-1.5 flex items-center justify-center overflow-hidden">
                {certificado.logo && (
                  <img
                    src={certificado.logo}
                    alt={`${certificado.org} logo`}
                    title={certificado.org}
                    className="w-full h-full object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                )}
              </div>

              {/* Texto principal: título, organización y fecha, y opcionalmente ID */}
              <div className="flex-1">
                <h3 className="font-semibold leading-tight">{certificado.title}</h3>
                <p className="text-slate-600 text-sm">
                  {certificado.org} · {certificado.date}
                </p>
             
                {"credId" in certificado && (certificado as any).credId && (
                  <p className="text-xs text-slate-500 mt-0.5">
                    ID: {(certificado as any).credId}
                  </p>
                )}
              </div>

              {/* Icono de “abrir enlace” que cambia de color al hacer hover en la tarjeta */}
              <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-slate-600 transition" />
            </div>
          </div>
        </motion.a>
      ))}
    </div>
  </section>
);

export default Certificados;
