import React from "react";
import { motion } from "framer-motion";
import { EXPERIENCE as EXPERIENCIA, PROFILE as PERFIL } from "../data/profile";
import {
  Briefcase,
  CalendarDays,
  Building2
} from "lucide-react";

type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  techs?: string[];
  points: string[];
};

const Experiencia: React.FC = () => {
  const items = (EXPERIENCIA as ExperienceItem[]) ?? [];

  return (
    <section
      id="experiencia"
      className="relative max-w-[1440px] mx-auto px-4 md:px-6 pt-16 md:pt-24 pb-14 md:pb-20"
    >
      {/* Encabezado */}
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 text-rose-400 text-[11px] sm:text-xs uppercase tracking-[0.28em]">
          <Briefcase className="w-4 h-4" />
          <span>Experiencia profesional reciente</span>
        </div>

        <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-black leading-[0.95] tracking-tight">
          <span className="text-white/80">Experiencia que</span>
          <span className="block bg-gradient-to-r from-rose-500 via-pink-500 to-fuchsia-600 bg-clip-text text-transparent">
            aporta contexto real
          </span>
        </h2>

        <p className="mt-6 max-w-2xl text-white/55 text-base sm:text-lg leading-8">
        Experiencia en entornos reales, centrada en desarrollo backend, APIs REST y construcción de aplicaciones web mantenibles.
        </p>
      </div>

      {/* Grid de experiencias */}
      <div className="mt-12 md:mt-14 grid gap-6 md:grid-cols-2">
        {items.map((experiencia, index) => {
          const summaryPoints = experiencia.points?.slice(0, 2) ?? [];

          return (
            <motion.article
              key={`${experiencia.company}-${experiencia.period}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="relative h-full"
            >
              {/* Card */}
              <div className="h-full rounded-[24px] p-[1px] bg-gradient-to-br from-rose-500/18 via-fuchsia-500/8 to-amber-300/8 shadow-[0_16px_55px_-32px_rgba(0,0,0,0.65)]">
                <div className="h-full rounded-[24px] border border-white/10 bg-[#120b1f]/80 backdrop-blur-xl px-5 py-5 sm:px-6 sm:py-6 transition-all duration-300 hover:-translate-y-[2px] hover:bg-[#171126]/85">
                  <div className="flex h-full flex-col gap-5">
                    {/* fila superior */}
                    <div className="flex items-center justify-between gap-3">
                      <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-white/60">
                        <CalendarDays className="h-4 w-4 text-rose-400/80" />
                        <span>{experiencia.period}</span>
                      </div>
                    </div>

                    {/* Cabecera principal */}
                    <div>
                      <h3 className="text-2xl sm:text-[30px] font-black italic leading-tight text-white">
                        {experiencia.role}
                      </h3>

                      <p className="mt-2 flex items-center gap-2 text-rose-500 font-semibold uppercase tracking-[0.08em] text-sm sm:text-base">
                        <Building2 className="w-4 h-4 text-rose-400" />
                        {experiencia.company}
                      </p>
                    </div>

                    {/* Resumen */}
                    <ul className="space-y-3 text-white/72 text-sm sm:text-[15px] leading-7">
                      {summaryPoints.map((punto) => (
                        <li key={punto} className="flex gap-3">
                          <span className="mt-[10px] h-1.5 w-1.5 rounded-full bg-rose-400/80 shrink-0" />
                          <span>{punto}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>

      <div className="mt-12 md:mt-16 md:col-span-2">
        {/* línea */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* contenido */}
        <div className="mt-6 text-center">
          <p className="text-white/50 text-sm sm:text-[15px]">
            Si quieres ver mi trayectoria con más detalle, puedes descargar mi CV completo.
          </p>

          <div className="mt-8">
            <a
              href={PERFIL.cv}
              target="_blank"
              rel="noreferrer"
              className="
          inline-flex items-center justify-center gap-2
          rounded-2xl px-5 py-3
          font-semibold text-white
          bg-gradient-to-r from-rose-500 to-fuchsia-600
          shadow-[0_15px_40px_-12px_rgba(244,63,94,.45)]
          transition hover:brightness-110 hover:-translate-y-[1px]
        "
            >
              Descargar CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiencia;