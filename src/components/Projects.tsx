import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "./ui/SectionTitle";
import { ArrowUpRight, Trophy } from "lucide-react";
import { PROJECTS } from "../data/profile";

const Projects: React.FC = () => (
  <section id="proyectos" className="max-w-[1440px] mx-auto px-4 md:px-6 pt-10 pb-6">
    <SectionTitle id="proyectos">Proyectos destacados</SectionTitle>

    <div className="grid md:grid-cols-2 gap-6">
      {PROJECTS.map((p) => {
        const useContain = p.fit === "contain";
        return (
          <motion.div key={p.title} whileHover={{ y: -6, rotateX: 0.5, rotateY: -0.5 }} whileTap={{ scale: 0.995 }} transition={{ type: "spring", stiffness: 260, damping: 18 }} className="group relative rounded-3xl p-[2px] bg-gradient-to-br from-rose-300/0 via-rose-200/0 to-amber-200/0 hover:from-rose-300/70 hover:via-rose-200/60 hover:to-amber-200/70 shadow-sm hover:shadow-[0_40px_120px_-30px_rgba(244,63,94,.35)]">
            <article className="rounded-[22px] overflow-hidden border bg-white h-full">
              <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-b from-white to-slate-50">
                <img
                  src={p.banner}
                  alt={p.title}
                  loading="lazy"
                  decoding="async"
                  style={{ objectPosition: p.position ?? "center" }}
                  className={[
                    "absolute inset-0 w-full h-full transition-transform duration-500",
                    useContain ? "object-contain p-2 md:p-3 group-hover:scale-[1.02]" : "object-cover group-hover:scale-[1.04]",
                  ].join(" ")}
                />
                {p.award && (
                  <div className="absolute left-3 top-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold text-white bg-gradient-to-r from-rose-500 to-amber-400 shadow-[0_8px_20px_-8px_rgba(244,63,94,.5)]" title={p.award} aria-label="Proyecto con mención honorífica">
                      <Trophy className="w-4 h-4" />
                      {p.award}
                    </span>
                  </div>
                )}
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                </div>

                <p className="mt-2 text-slate-600">{p.description}</p>

                <ul className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <li key={t}>
                      <span className="inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-medium text-slate-700 bg-gradient-to-r from-rose-50 to-amber-50 ring-1 ring-rose-200/60 shadow-[inset_0_0_0_1px_rgba(244,63,94,.08)]">
                        {t}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4">
                  <a href={p.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-white bg-gradient-to-r from-rose-500 to-amber-400 shadow hover:brightness-110 transition">
                    Ver proyecto <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </article>
          </motion.div>
        );
      })}
    </div>
  </section>
);

export default Projects;
