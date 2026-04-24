import React from "react";
import { motion } from "framer-motion";
import { EDUCATION as EDUCACION } from "../data/profile";
import {
  GraduationCap,
  School,
  CalendarDays,

} from "lucide-react";

/**
 * Sección de Educación
 */
const Educacion: React.FC = () => (
  <section
    id="educacion"
    className="relative max-w-[1440px] mx-auto px-4 md:px-6 pt-16 md:pt-24 pb-14 md:pb-20"
  >
    {/* encabezado */}
    <div className="max-w-3xl">
      <div className="inline-flex items-center gap-2 text-rose-400 text-[11px] sm:text-xs uppercase tracking-[0.28em]">
        <GraduationCap className="w-4 h-4" />
        <span>Formación académica</span>
      </div>

      <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-black leading-[0.95] tracking-tight">
        <span className="text-white/80">Base técnica,</span>
        <span className="block bg-gradient-to-r from-rose-500 via-pink-500 to-fuchsia-600 bg-clip-text text-transparent">
          evolución constante
        </span>
      </h2>

      <p className="mt-6 max-w-2xl text-white/55 text-base sm:text-lg leading-8">
      Formación técnica orientada al desarrollo backend y aplicaciones web, con base en .NET, APIs REST y arquitecturas modernas.
      </p>
    </div>

    <div className="relative mt-12 md:mt-14">
      <div className="absolute left-[15px] top-2 bottom-2 hidden md:block w-px bg-gradient-to-b from-rose-500/50 via-fuchsia-500/20 to-transparent" />

      <div className="space-y-6 md:space-y-7">
        {EDUCACION.map((estudio, index) => (
          <motion.article
            key={`${estudio.title}-${estudio.period}`}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="relative md:pl-14"
          >
            {/* nodo */}
            <div className="absolute left-[1px] top-8 z-10 hidden md:flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-rose-500 via-pink-500 to-fuchsia-600 shadow-[0_0_24px_rgba(244,63,94,0.35)]">
              <div className="h-3 w-3 rounded-full bg-[#0b0818]" />
            </div>

            {/* card */}
            <div className="max-w-4xl rounded-[24px] p-[1px] bg-gradient-to-br from-rose-500/18 via-fuchsia-500/8 to-amber-300/8 shadow-[0_16px_55px_-32px_rgba(0,0,0,0.65)]">
              <div className="rounded-[24px] border border-white/10 bg-[#120b1f]/80 backdrop-blur-xl px-5 py-4 sm:px-6 sm:py-5 md:px-6 md:py-5 transition-all duration-300 hover:-translate-y-[2px] hover:bg-[#171126]/85">
                <div className="flex flex-col gap-4 sm:gap-5">
                  {/* cabecera */}
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div className="min-w-0">
                      
                      <h3 className="mt-3 text-lg sm:text-xl md:text-[22px] font-bold leading-tight text-white">
                        {estudio.title}
                      </h3>

                      <div className="mt-1.5 inline-flex items-center gap-2 text-white/68 text-sm sm:text-[15px]">
                        <School className="h-4 w-4 shrink-0 text-rose-300/80" />
                        <span>{estudio.center}</span>
                      </div>
                    </div>

                    <div className="shrink-0">
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/78">
                        <CalendarDays className="h-4 w-4 text-rose-400" />
                        {estudio.period}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Educacion;