import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "./ui/SectionTitle";
import { ArrowUpRight, Trophy, Code2, PlayCircle } from "lucide-react";
import { PROJECTS as PROYECTOS, getTechBadge } from "../data/profile";

const Proyectos: React.FC = () => {
  // Control “ver más” por tarjeta (solo afecta a móvil)
  const [open, setOpen] = useState<Record<string, boolean>>({});

  const toggle = (key: string) =>
    setOpen((prev) => ({ ...prev, [key]: !prev[key] }));

  const items = useMemo(() => PROYECTOS ?? [], []);

  return (
    <section
      id="proyectos"
      className="max-w-[1440px] mx-auto px-4 md:px-6 pt-10 pb-6"
    >
      <SectionTitle
        id="proyectos"
        icon={<Code2 className="w-7 h-7 text-rose-600" />}
      >
        Proyectos destacados
      </SectionTitle>

      {/* Grid responsiva: 1 columna en móvil, 2 en md+ */}
      <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
        {items.map((proyecto) => {
          const usarContain = proyecto.fit === "contain";
          const key = proyecto.title;
          const isOpen = !!open[key];

          return (
            <motion.div
              key={key}
              whileHover={{ y: -6, rotateX: 0.5, rotateY: -0.5 }}
              whileTap={{ scale: 0.995 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className="
                group relative rounded-3xl p-[2px]
                bg-gradient-to-br from-rose-300/0 via-rose-200/0 to-amber-200/0
                hover:from-rose-300/70 hover:via-rose-200/60 hover:to-amber-200/70
                shadow-sm hover:shadow-[0_40px_120px_-30px_rgba(244,63,94,.35)]
              "
            >
              <article className="rounded-[22px] overflow-hidden border bg-white h-full">
                {/* Banner */}
                <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-b from-white to-slate-50">
                  <img
                    src={proyecto.banner}
                    alt={proyecto.title}
                    loading="lazy"
                    decoding="async"
                    style={{ objectPosition: proyecto.position ?? "center" }}
                    className={[
                      "absolute inset-0 w-full h-full transition-transform duration-500",
                      usarContain
                        ? "object-contain p-2 md:p-3 group-hover:scale-[1.02]"
                        : "object-cover group-hover:scale-[1.04]",
                    ].join(" ")}
                  />

                  {proyecto.award && (
                    <div className="absolute left-3 top-3">
                      <span
                        className="
                          inline-flex items-center gap-1.5 rounded-full
                          px-3 py-1 text-[11px] sm:text-xs font-semibold text-white
                          bg-gradient-to-r from-rose-500 to-amber-400
                          shadow-[0_8px_20px_-8px_rgba(244,63,94,.5)]
                        "
                        title={proyecto.award}
                        aria-label="Proyecto con mención honorífica"
                      >
                        <Trophy className="w-4 h-4" />
                        {proyecto.award}
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-4 sm:p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-semibold text-[16px] sm:text-lg leading-snug">
                      {proyecto.title}
                    </h3>
                  </div>

                  <p
                    className={[
                      "mt-2 text-slate-600 text-[13.5px] sm:text-[15px] leading-relaxed",
                      isOpen ? "" : "line-clamp-3",
                    ].join(" ")}
                  >
                    {proyecto.description}
                  </p>

                  {/* Botón ver más/menos*/}
                  <div className="mt-2 sm:hidden">
                    <button
                      type="button"
                      onClick={() => toggle(key)}
                      className="
                        text-rose-700 text-sm
                        underline underline-offset-4
                        decoration-rose-300
                      "
                    >
                      {isOpen ? "Ver menos" : "Ver más"}
                    </button>
                  </div>

                  <ul className="mt-3 flex flex-wrap gap-2">
                    {proyecto.tech.map((tecno) => {
                      const badge = getTechBadge(tecno);
                      const Icon = badge?.Icono;

                      if (!badge || !Icon) {
                        return (
                          <li key={tecno}>
                            <span
                              className="
                                inline-flex items-center rounded-full
                                px-2.5 py-1
                                text-[10.5px] sm:text-[11px]
                                font-medium text-slate-700
                                bg-gradient-to-r from-rose-50 to-amber-50
                                ring-1 ring-rose-200/60
                                shadow-[inset_0_0_0_1px_rgba(244,63,94,.08)]
                                whitespace-nowrap
                              "
                            >
                              {tecno}
                            </span>
                          </li>
                        );
                      }

                      return (
                        <li key={tecno}>
                          <span
                            className={[
                              "inline-flex items-center gap-2 rounded-full",
                              "px-2.5 py-1",
                              "text-[10.5px] sm:text-[11px] font-medium",
                              "ring-1 shadow-[inset_0_0_0_1px_rgba(0,0,0,.04)]",
                              "whitespace-nowrap",
                              badge.ring,
                              badge.bg,
                            ].join(" ")}
                            title={tecno}
                          >
                            <span
                              className="
                                inline-flex items-center justify-center
                                h-5 w-5 rounded-full
                                bg-white/70 ring-1 ring-black/5
                              "
                              aria-hidden="true"
                            >
                              <Icon className="h-3.5 w-3.5" />
                            </span>
                           
                            {tecno === "Material Design" ? (
                              <>
                                <span className="sm:hidden">MDesign</span>
                                <span className="hidden sm:inline">
                                  Material Design
                                </span>
                              </>
                            ) : (
                              tecno
                            )}
                          </span>
                        </li>
                      );
                    })}
                  </ul>

                  <div className="mt-4 flex flex-col sm:flex-row gap-2 sm:gap-3">
                    <a
                      href={proyecto.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        inline-flex justify-center items-center gap-2
                        rounded-2xl px-4 py-2
                        text-[13.5px] sm:text-sm
                        text-white bg-gradient-to-r from-rose-500 to-amber-400
                        shadow hover:brightness-110 transition
                      "
                    >
                      Repositorio GitHub <ArrowUpRight className="w-4 h-4" />
                    </a>

                    {proyecto.demo && (
                      <a
                        href={proyecto.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="
                          inline-flex justify-center items-center gap-2
                          rounded-2xl px-4 py-2
                          text-[13.5px] sm:text-sm
                          text-white bg-gradient-to-r from-rose-500 to-amber-400
                          shadow hover:brightness-110 transition
                        "
                      >
                        Ver demo <PlayCircle className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Proyectos;
