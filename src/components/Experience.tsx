import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "./ui/SectionTitle";
import { EXPERIENCE as EXPERIENCIA, TECH_BADGE_MAP } from "../data/profile";
import { Briefcase } from "lucide-react";

type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  techs?: string[];
  points: string[];
};

function TechChip({ tech }: { tech: string }) {
  const cfg = TECH_BADGE_MAP?.[tech];
  const Icono = cfg?.Icono;

  const ring = cfg?.ring ?? "ring-rose-200/70";
  const bg = cfg?.bg ?? "bg-white text-slate-900";

  return (
    <span
      title={tech}
      className="
        shrink-0 inline-flex items-center gap-2
        rounded-full px-3 py-1.5
        text-[12px] text-slate-800
        bg-white
        ring-1 ring-rose-200/70
        shadow-sm
        hover:shadow-md hover:-translate-y-[1px]
        transition
      "
    >
      <span
        className={`
          grid place-items-center
          w-6 h-6 rounded-full
          ring-1 ${ring}
          ${bg}
        `}
        aria-hidden="true"
      >
        {Icono ? (
          <Icono className="w-3.5 h-3.5" />
        ) : (
          <span className="text-[11px]">•</span>
        )}
      </span>
      {tech}
    </span>
  );
}

/**
 * Sección de Experiencia profesional.
 * 
 */
const Experiencia: React.FC = () => {
  const items = (EXPERIENCIA as ExperienceItem[]) ?? [];
  const [openKey, setOpenKey] = useState<string | null>(null);

  const keyed = useMemo(
    () =>
      items.map((e) => ({
        ...e,
        key: `${e.company}-${e.period}`,
      })),
    [items]
  );

  return (
    <section
      id="experiencia"
      className="max-w-[1440px] mx-auto px-3 sm:px-4 md:px-6 pt-10 pb-6"
    >
      <SectionTitle
        id="experiencia"
        icon={<Briefcase className="w-7 h-7 text-rose-600" />}
      >
        Experiencia profesional reciente
      </SectionTitle>

      <div
        className="
          relative pl-4 sm:pl-6
          before:absolute before:left-2.5 sm:before:left-3 before:top-0
          before:h-full before:w-px before:bg-gradient-to-b from-rose-300 to-amber-300
        "
      >
        {keyed.map((experiencia) => {
          const isOpen = openKey === experiencia.key;

          const points = experiencia.points ?? [];
          const hasMore = points.length > 3;
          const visiblePoints = isOpen ? points : points.slice(0, 3);

          return (
            <motion.div
              key={experiencia.key}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              className="relative pl-5 sm:pl-6 pb-5 sm:pb-6"
            >
              <span className="absolute left-[-1px] sm:left-[-2px] top-2 h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-white ring-4 ring-amber-200" />

              <article className="rounded-2xl border bg-white/90 backdrop-blur-[2px] p-4 sm:p-5 transition hover:shadow-md hover:-translate-y-[1px]">
                <div className="flex flex-col gap-2 sm:gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0">
                    <h3 className="font-semibold text-[16px] sm:text-[17px] text-slate-900">
                      {experiencia.company}
                    </h3>

                    <p className="text-slate-700 mt-1 text-[13.5px] sm:text-[14.5px] leading-snug">
                      {experiencia.role}
                    </p>
                   
                    {Array.isArray(experiencia.techs) &&
                      experiencia.techs.length > 0 && (
                        <div className="mt-3 -mx-1 px-1 overflow-x-auto md:overflow-visible">
                          <div className="flex flex-nowrap gap-2 pb-2 md:flex-wrap md:pb-0">
                            {experiencia.techs.map((tecno) => (
                              <TechChip key={`${experiencia.key}-${tecno}`} tech={tecno} />
                            ))}
                          </div>
                        </div>
                      )}
                  </div>

                  <span
                    className="
                      sm:ml-3 inline-flex self-start sm:self-auto items-center
                      rounded-full px-2.5 py-1 text-xs font-semibold text-white
                      bg-gradient-to-r from-rose-500 to-amber-400
                      shadow-[0_8px_20px_-8px_rgba(244,63,94,.45)]
                      whitespace-nowrap leading-none
                      [@media(orientation:landscape)]:text-[11px]
                      [@media(orientation:landscape)]:px-2
                      [@media(orientation:landscape)]:py-0.5
                    "
                    title={experiencia.period}
                  >
                    {experiencia.period}
                  </span>
                </div>

                
                <ul className="mt-4 space-y-2 text-slate-600 text-[13.5px] sm:text-[15px] leading-relaxed">
                  {visiblePoints.map((punto) => (
                    <li key={punto} className="flex gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-slate-500/70 shrink-0" />
                      <span>{punto}</span>
                    </li>
                  ))}
                </ul>

         
                {hasMore && (
                  <div className="mt-3 sm:hidden">
                    <button
                      type="button"
                      onClick={() =>
                        setOpenKey(isOpen ? null : experiencia.key)
                      }
                      className="
                        inline-flex items-center
                        text-rose-700 text-sm
                        underline underline-offset-4
                        decoration-rose-300
                      "
                    >
                      {isOpen ? "Ver menos" : "Ver más"}
                    </button>
                  </div>
                )}
              </article>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Experiencia;
