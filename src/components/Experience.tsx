import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "./ui/SectionTitle";
import { EXPERIENCE } from "../data/profile";
import { Briefcase } from "lucide-react";

const Experience: React.FC = () => (
  <section id="experiencia" className="max-w-[1440px] mx-auto px-4 md:px-6 pt-10 pb-6">
    <SectionTitle id="experiencia" icon={<Briefcase className="w-7 h-7" />}>
      Experiencia profesional reciente
    </SectionTitle>

    <div className="relative pl-6 before:absolute before:left-3 before:top-0 before:h-full before:w-px before:bg-gradient-to-b from-rose-300 to-amber-300">
      {EXPERIENCE.map((x) => (
        <motion.div
          key={x.company}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="relative pl-6 pb-6"
        >
          <span className="absolute left-[-2px] top-2 h-3 w-3 rounded-full bg-white ring-4 ring-amber-200" />

          <article className="rounded-2xl border bg-white p-5 transition hover:shadow-md hover:-translate-y-[1px]">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <h3 className="font-semibold">{x.company}</h3>
                <p className="text-slate-700 mt-1">{x.role}</p>

                {Array.isArray(x.techs) && x.techs.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {x.techs.map((t: string) => (
                      <span
                        key={t}
                        className="inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-medium text-slate-700 bg-gradient-to-r from-rose-50 to-amber-50 ring-1 ring-rose-200/50 shadow-[inset_0_0_0_1px_rgba(244,63,94,.08)]"
                        title={t}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <span
                className="shrink-0 inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold
                           text-white bg-gradient-to-r from-rose-500 to-amber-400
                           shadow-[0_8px_20px_-8px_rgba(244,63,94,.45)]"
                title={x.period}
              >
                {x.period}
              </span>
            </div>

            <ul className="mt-3 list-disc pl-5 text-slate-600 space-y-1">
              {x.points.map((p: string) => <li key={p}>{p}</li>)}
            </ul>
          </article>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Experience;
