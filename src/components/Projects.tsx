import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Trophy, Code2, PlayCircle, Github, Video } from "lucide-react";
import { PROJECTS as PROYECTOS, getTechBadge } from "../data/profile";

const Proyectos: React.FC = () => {
  const [open, setOpen] = useState<Record<string, boolean>>({});

  const toggle = (key: string) =>
    setOpen((prev) => ({ ...prev, [key]: !prev[key] }));

  const items = useMemo(() => PROYECTOS ?? [], []);

  const featured = items.slice(0, 2);
  const secondary = items.slice(2);

  const GithubButton = ({ proyecto, compact = false }: { proyecto: any; compact?: boolean }) => (
    <a
      href={proyecto.repo}
      target="_blank"
      rel="noreferrer"
      className={[
        "inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/90 transition hover:bg-white/10",
        compact ? "h-10 w-10" : "h-11 w-11",
      ].join(" ")}
    >
      <Github className={compact ? "w-4 h-4" : "w-5 h-5"} />
    </a>
  );

  const DemoButton = ({ proyecto, compact = false }: { proyecto: any; compact?: boolean }) => {
    if (!proyecto.demo) return null;

    const isVideo = proyecto.demoType === "video";

    return (
      <a
        href={proyecto.demo}
        target="_blank"
        rel="noreferrer"
        className={[
          "inline-flex items-center justify-center gap-2 rounded-2xl font-semibold text-white bg-gradient-to-r from-rose-500 to-fuchsia-600 shadow-[0_15px_40px_-12px_rgba(244,63,94,.45)] transition hover:brightness-110",
          compact ? "px-3 py-2 text-xs" : "px-4 py-2.5 text-sm",
        ].join(" ")}
      >
        {isVideo ? <Video className="w-4 h-4" /> : <PlayCircle className="w-4 h-4" />}
        {isVideo ? "Ver vídeo" : "Probar"}
      </a>
    );
  };
  return (
    <section
      id="proyectos"
      className="relative max-w-[1440px] mx-auto px-4 md:px-6 pt-16 md:pt-24 pb-14 md:pb-20"
    >
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 text-rose-400 text-[11px] sm:text-xs uppercase tracking-[0.28em]">
          <Code2 className="w-4 h-4" />
          <span>Proyectos destacados</span>
        </div>

        <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-black leading-[0.95] tracking-tight">
          <span className="text-white/80">Proyectos llevados</span>
          <span className="block bg-gradient-to-r from-rose-500 via-pink-500 to-fuchsia-600 bg-clip-text text-transparent italic">
            a la práctica
          </span>
        </h2>

        <p className="mt-6 max-w-2xl text-white/55 text-base sm:text-lg leading-8">
          Proyectos centrados en backend y APIs REST, conectados a frontend para crear aplicaciones web reales.
        </p>
      </div>

      {/* PROYECTOS PRINCIPALES */}
      <div className="mt-12 md:mt-14">
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 pr-6 lg:hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {featured.map((proyecto) => {
            const key = proyecto.title;
            const isOpen = !!open[key];
            const usarContain = proyecto.fit === "contain";

            return (
              <motion.article
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4 }}
                className="group min-w-[82%] snap-start"
              >
                <div className="h-full rounded-[26px] p-[1px] bg-gradient-to-br from-rose-500/20 via-fuchsia-500/10 to-amber-300/10 shadow-[0_18px_60px_-30px_rgba(0,0,0,0.65)]">
                  <div className="rounded-[26px] border border-white/10 bg-[#120b1f]/80 backdrop-blur-xl overflow-hidden h-full">
                    <div className="relative aspect-[16/9] overflow-hidden bg-[#0f0a1a]">
                      <img
                        src={proyecto.banner}
                        alt={proyecto.title}
                        loading="lazy"
                        decoding="async"
                        style={{ objectPosition: proyecto.position ?? "center" }}
                        className={[
                          "absolute inset-0 w-full h-full transition-transform duration-500",
                          usarContain ? "object-contain p-2.5" : "object-cover",
                        ].join(" ")}
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#090611] via-[#090611]/45 to-transparent" />

                      {proyecto.award && (
                        <div className="absolute left-3 top-3">
                          <span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-semibold text-white bg-gradient-to-r from-rose-500 to-amber-400">
                            <Trophy className="w-3.5 h-3.5" />
                            {proyecto.award}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="p-4">
                      <h3 className="text-[20px] font-black italic leading-[1.08] text-white">
                        {proyecto.title}
                      </h3>

                      <p
                        className={[
                          "mt-2.5 text-white/68 text-[14px] leading-6",
                          isOpen ? "" : "line-clamp-2",
                        ].join(" ")}
                      >
                        {proyecto.description}
                      </p>
                      {proyecto.note && (
                        <p className="mt-2 inline-flex max-w-full items-center rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] leading-tight text-white/60">
                          {proyecto.note}
                        </p>
                      )}
                      <div className="mt-1.5">
                        <button
                          type="button"
                          onClick={() => toggle(key)}
                          className="text-rose-400 text-sm underline underline-offset-4 decoration-rose-400/40"
                        >
                          {isOpen ? "Ver menos" : "Ver más"}
                        </button>
                      </div>

                      <ul className="mt-3 flex flex-nowrap items-center gap-1 overflow-hidden">
                        {proyecto.tech.slice(0, 3).map((tecno) => {
                          const badge = getTechBadge(tecno);
                          const Icon = badge?.Icono;

                          return (
                            <li key={tecno} className="min-w-0">
                              <span
                                className={[
                                  "inline-flex items-center gap-1 rounded-full px-1.5 py-[3px] text-[8px] font-medium ring-1 whitespace-nowrap",
                                  badge
                                    ? `${badge.ring} ${badge.bg}`
                                    : "text-slate-700 bg-gradient-to-r from-rose-50 to-amber-50 ring-rose-200/60",
                                ].join(" ")}
                                title={tecno}
                              >
                                {Icon && (
                                  <span className="inline-flex items-center justify-center h-3.5 w-3.5 rounded-full bg-white/70 ring-1 ring-black/5">
                                    <Icon className="h-2 w-2" />
                                  </span>
                                )}
                                {tecno === "Spring Boot" ? "Spring" : tecno}
                              </span>
                            </li>
                          );
                        })}
                      </ul>

                      <div className="mt-3 flex items-center gap-2">
                        <DemoButton proyecto={proyecto} compact />
                        <GithubButton proyecto={proyecto} compact />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-3 flex items-center justify-end gap-1.5 pr-2 text-xs font-medium text-white/45 lg:hidden">
          <span>Desliza</span>
          <span className="animate-pulse">→</span>
        </div>

        {/* DESKTOP */}
        <div className="hidden lg:grid gap-6 lg:grid-cols-2">
          {featured.map((proyecto) => {
            const key = proyecto.title;
            const isOpen = !!open[key];
            const usarContain = proyecto.fit === "contain";

            return (
              <motion.article
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4 }}
                className="group h-full"
              >
                <div className="h-full rounded-[28px] p-[1px] bg-gradient-to-br from-rose-500/20 via-fuchsia-500/10 to-amber-300/10 shadow-[0_18px_60px_-30px_rgba(0,0,0,0.65)]">
                  <div className="rounded-[28px] border border-white/10 bg-[#120b1f]/80 backdrop-blur-xl overflow-hidden h-full">
                    <div className="relative aspect-[16/9] overflow-hidden bg-[#0f0a1a]">
                      <img
                        src={proyecto.banner}
                        alt={proyecto.title}
                        loading="lazy"
                        decoding="async"
                        style={{ objectPosition: proyecto.position ?? "center" }}
                        className={[
                          "absolute inset-0 w-full h-full transition-transform duration-500",
                          usarContain
                            ? "object-contain p-3 md:p-4 group-hover:scale-[1.02]"
                            : "object-cover group-hover:scale-[1.03]",
                        ].join(" ")}
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#090611] via-[#090611]/45 to-transparent group-hover:opacity-10" />

                      {proyecto.award && (
                        <div className="absolute left-4 top-4">
                          <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] sm:text-xs font-semibold text-white bg-gradient-to-r from-rose-500 to-amber-400">
                            <Trophy className="w-4 h-4" />
                            {proyecto.award}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="p-5 sm:p-6">
                      <h3 className="text-2xl sm:text-[28px] font-black italic leading-tight text-white">
                        {proyecto.title}
                      </h3>

                      <p
                        className={[
                          "mt-3 text-white/68 text-sm sm:text-[15px] leading-7",
                          isOpen ? "" : "line-clamp-4",
                        ].join(" ")}
                      >
                        {proyecto.description}
                      </p>
                      {proyecto.note && (
                        <p className="mt-3 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs sm:text-sm text-white/65">
                          {proyecto.note}
                        </p>
                      )}


                      <ul className="mt-4 flex flex-wrap gap-2">
                        {proyecto.tech.slice(0, 5).map((tecno) => {
                          const badge = getTechBadge(tecno);
                          const Icon = badge?.Icono;

                          return (
                            <li key={tecno}>
                              <span
                                className={[
                                  "inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-[10.5px] sm:text-[11px] font-medium ring-1 whitespace-nowrap",
                                  badge
                                    ? `${badge.ring} ${badge.bg}`
                                    : "text-slate-700 bg-gradient-to-r from-rose-50 to-amber-50 ring-rose-200/60",
                                ].join(" ")}
                                title={tecno}
                              >
                                {Icon && (
                                  <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-white/70 ring-1 ring-black/5">
                                    <Icon className="h-3.5 w-3.5" />
                                  </span>
                                )}
                                {tecno}
                              </span>
                            </li>
                          );
                        })}
                      </ul>

                      <div className="mt-3.5 flex gap-2">
                        <DemoButton proyecto={proyecto} />
                        <GithubButton proyecto={proyecto} />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* PROYECTOS SECUNDARIOS */}
      <div className="mt-8 grid gap-4 sm:gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {secondary.map((proyecto) => {
          const key = proyecto.title;
          const isOpen = !!open[key];
          const usarContain = proyecto.fit === "contain";

          return (
            <motion.article
              key={key}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.35 }}
              className="group h-full"
            >
              <div className="h-full rounded-[24px] p-[1px] bg-gradient-to-br from-rose-500/14 via-fuchsia-500/8 to-amber-300/8 shadow-[0_14px_45px_-28px_rgba(0,0,0,0.65)]">
                <div className="rounded-[24px] border border-white/10 bg-[#120b1f]/80 backdrop-blur-xl overflow-hidden h-full flex flex-col">
                  <div className="relative aspect-[16/10] sm:aspect-[4/3] overflow-hidden bg-[#0f0a1a]">
                    <img
                      src={proyecto.banner}
                      alt={proyecto.title}
                      loading="lazy"
                      decoding="async"
                      style={{ objectPosition: proyecto.position ?? "center" }}
                      className={[
                        "absolute inset-0 w-full h-full transition-transform duration-500",
                        usarContain
                          ? "object-contain object-center p-0 group-hover:scale-[1.02]"
                          : "object-cover object-center group-hover:scale-[1.03]",
                      ].join(" ")}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#090611] via-[#090611]/55 to-transparent group-hover:opacity-10" />
                  </div>

                  <div className="p-3.5 sm:p-4 flex flex-col flex-1">
                    <h3 className="text-[15px] sm:text-[20px] font-black italic leading-tight text-white sm:min-h-[56px]">
                      {proyecto.title}
                    </h3>

                    <p
                      className={[
                        "mt-2 text-white/65 text-[13px] sm:text-sm leading-6 sm:min-h-[110px]",
                        isOpen ? "" : "line-clamp-3 sm:line-clamp-5",
                      ].join(" ")}
                    >
                      {proyecto.description}
                    </p>
                    {proyecto.note && (
                      <p className="mt-3 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs sm:text-sm text-white/65">
                        {proyecto.note}
                      </p>
                    )}

                    <div className="mt-2 sm:hidden">
                      <button
                        type="button"
                        onClick={() => toggle(key)}
                        className="text-rose-400 text-sm underline underline-offset-4 decoration-rose-400/40"
                      >
                        {isOpen ? "Ver menos" : "Ver más"}
                      </button>
                    </div>

                    <ul className="mt-3 flex flex-wrap gap-1.5 sm:min-h-[52px]">
                      {proyecto.tech.slice(0, 3).map((tecno) => {
                        const badge = getTechBadge(tecno);
                        const Icon = badge?.Icono;

                        return (
                          <li key={tecno}>
                            <span
                              className={[
                                "inline-flex items-center gap-1.5 rounded-full px-2 py-[3px] text-[9px] sm:text-[10px] font-medium ring-1 whitespace-nowrap",
                                badge
                                  ? `${badge.ring} ${badge.bg}`
                                  : "text-slate-700 bg-gradient-to-r from-rose-50 to-amber-50 ring-rose-200/60",
                              ].join(" ")}
                              title={tecno}
                            >
                              {Icon && (
                                <span className="inline-flex items-center justify-center h-4 w-4 rounded-full bg-white/70 ring-1 ring-black/5">
                                  <Icon className="h-3 w-3" />
                                </span>
                              )}
                              {tecno}
                            </span>
                          </li>
                        );
                      })}
                    </ul>

                    <div className="mt-3.5 flex gap-2">
                      <DemoButton proyecto={proyecto} />
                      <GithubButton proyecto={proyecto} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
};

export default Proyectos;