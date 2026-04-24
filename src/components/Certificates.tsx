import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { CERTS as CERTIFICADOS } from "../data/profile";
import { BadgeCheck, ExternalLink, Award, CalendarDays } from "lucide-react";

const Certificados: React.FC = () => {
  const items = useMemo(() => CERTIFICADOS ?? [], []);
  const [showAll, setShowAll] = useState(false);
  const MOBILE_LIMIT = 6;
  const hasMore = items.length > MOBILE_LIMIT;

  return (
    <section
      id="certificados"
      className="relative max-w-[1440px] mx-auto px-4 md:px-6 pt-16 md:pt-24 pb-14 md:pb-20"
    >
      {/* Encabezado */}
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 text-rose-400 text-[11px] sm:text-xs uppercase tracking-[0.28em]">
          <BadgeCheck className="w-4 h-4" />
          <span>Certificaciones</span>
        </div>

        <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-black leading-[0.95] tracking-tight">
          <span className="text-white/80">Aprendizaje validado,</span>
          <span className="block bg-gradient-to-r from-rose-500 via-pink-500 to-fuchsia-600 bg-clip-text text-transparent">
            crecimiento continuo
          </span>
        </h2>

        <p className="mt-6 max-w-2xl text-white/55 text-base sm:text-lg leading-8">
        Formación complementaria orientada al desarrollo backend y aplicaciones web, con especial foco en .NET, APIs REST y tecnologías modernas.
        </p>
      </div>

      {/* Grid */}
      <div className="mt-10 md:mt-12 grid gap-4 sm:gap-5 md:gap-6 md:grid-cols-2 xl:grid-cols-3">
        {items.map((certificado, idx) => {
          const hideOnMobile = !showAll && idx >= MOBILE_LIMIT;
          const isOnline = certificado.online !== false;

          return (
            <motion.a
              key={certificado.title}
              href={isOnline ? certificado.link : undefined}
              target={isOnline ? "_blank" : undefined}
              rel={isOnline ? "noreferrer" : undefined}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.35, delay: idx * 0.03 }}
              className={`group ${hideOnMobile ? "hidden md:block" : "block"} ${
                isOnline ? "cursor-pointer" : "cursor-default"
              }`}
            >
              <div
                className={[
                  "rounded-[22px] sm:rounded-[24px] p-[1px]",
                  "bg-gradient-to-br from-rose-500/18 via-fuchsia-500/8 to-amber-300/8",
                  "shadow-[0_16px_55px_-32px_rgba(0,0,0,0.65)]",
                  isOnline
                    ? "transition-all duration-300 group-hover:from-rose-500/28 group-hover:via-fuchsia-500/16 group-hover:to-amber-300/12 group-hover:-translate-y-[2px]"
                    : "",
                ].join(" ")}
              >
                <div
                  className={[
                    "rounded-[22px] sm:rounded-[24px] border border-white/10 bg-[#120b1f]/80 backdrop-blur-xl h-full flex flex-col",
                    "p-4 sm:p-5",
                    isOnline
                      ? "transition-colors duration-300 group-hover:bg-[#171126]/85"
                      : "",
                  ].join(" ")}
                >
                  {/* Fila superior */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2 text-[11px] sm:text-sm leading-5 min-w-0">
                      <span className="text-white/62 truncate">{certificado.org}</span>
                      <span className="text-white/20">·</span>
                      <CalendarDays className="h-3.5 w-3.5 text-rose-400 shrink-0" />
                      <span className="text-white/45">{certificado.date}</span>
                    </div>

                    {isOnline && (
                      <ExternalLink className="mt-0.5 h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-white/30 transition-all duration-300 group-hover:text-rose-400 group-hover:scale-110" />
                    )}
                  </div>

                  {/* Contenido principal */}
                  <div className="mt-3 sm:mt-4 flex items-start gap-3 sm:gap-4 flex-1">
                    <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 p-2 overflow-hidden">
                      {certificado.logo ? (
                        <img
                          src={certificado.logo}
                          alt={`${certificado.org} logo`}
                          title={certificado.org}
                          className="h-full w-full object-contain"
                          loading="lazy"
                          decoding="async"
                        />
                      ) : (
                        <Award className="h-5 w-5 sm:h-6 sm:w-6 text-rose-400" />
                      )}
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="text-[16px] sm:text-[19px] font-bold leading-snug text-white line-clamp-2">
                        {certificado.title}
                      </h3>
                    </div>
                  </div>

                  {/* ID opcional */}
                  {"credId" in certificado && (certificado as any).credId && (
                    <div className="mt-2.5 sm:mt-3 flex items-center gap-2 text-[11px] sm:text-[13px] text-white/45 min-w-0">
                      <span className="uppercase tracking-[0.16em] text-white/30 shrink-0">
                        ID
                      </span>
                      <span className="text-white/65 truncate">
                        {(certificado as any).credId}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </motion.a>
          );
        })}
      </div>

      {/* Botón solo móvil */}
      {hasMore && (
        <div className="mt-5 md:hidden">
          <button
            type="button"
            onClick={() => setShowAll((v) => !v)}
            className="
              w-full inline-flex items-center justify-center
              rounded-2xl px-4 py-3
              text-sm font-semibold text-white/85
              border border-white/10 bg-white/5
              backdrop-blur-xl
              transition-all duration-300
              hover:bg-white/10
            "
          >
            {showAll ? "Ver menos" : `Ver todos (${items.length})`}
          </button>
        </div>
      )}
    </section>
  );
};

export default Certificados;