import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "./ui/SectionTitle";
import { EXPERIENCE as EXPERIENCIA } from "../data/profile";
import { Briefcase } from "lucide-react";

/**
 * Sección de Experiencia profesional.
 * Cada experiencia aparece con una animación suave al entrar en pantalla.
 */
const Experiencia: React.FC = () => (
  <section
    id="experiencia"
    className="max-w-[1440px] mx-auto px-3 sm:px-4 md:px-6 pt-10 pb-6"
  >
    {/* Título */}
    <SectionTitle id="experiencia" icon={<Briefcase className="w-7 h-7" />}>
      Experiencia profesional reciente
    </SectionTitle>
    
    <div
      className="
        relative pl-4 sm:pl-6
        before:absolute before:left-2.5 sm:before:left-3 before:top-0
        before:h-full before:w-px before:bg-gradient-to-b from-rose-300 to-amber-300
      "
    >
      {EXPERIENCIA.map((experiencia) => (
        // Tarjeta + animación de aparición
        <motion.div
          key={experiencia.company}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="relative pl-5 sm:pl-6 pb-5 sm:pb-6"
        >
          {/* Punto de la línea de tiempo */}
          <span className="absolute left-[-1px] sm:left-[-2px] top-2 h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-white ring-4 ring-amber-200" />

          {/* Tarjeta de experiencia */}
          <article className="rounded-2xl border bg-white p-4 sm:p-5 transition hover:shadow-md hover:-translate-y-[1px]">
            {/* Encabezado: empresa/rol + periodo a la derecha */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              {/* Empresa, rol y tech pills */}
              <div className="min-w-0">
                <h3 className="font-semibold text-[17px] sm:text-base">
                  {experiencia.company}
                </h3>
                <p className="text-slate-700 mt-1 leading-6">
                  {experiencia.role}
                </p>
        
                {Array.isArray(experiencia.techs) && experiencia.techs.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1.5 sm:gap-2">
                    {experiencia.techs.map((tecno: string) => (
                      <span
                        key={tecno}
                        className="
                          inline-flex items-center rounded-full px-2 py-1
                          text-[11px] sm:text-[12px] font-medium text-slate-700
                          bg-gradient-to-r from-rose-50 to-amber-50
                          ring-1 ring-rose-200/50
                          shadow-[inset_0_0_0_1px_rgba(244,63,94,.08)]
                          whitespace-nowrap
                        "
                        title={tecno}
                      >
                        {tecno}
                      </span>
                    ))}
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

            {/* Lista de logros*/}
            <ul className="mt-3 list-disc pl-5 text-slate-600 space-y-1.5 text-[15px] leading-6">
              {experiencia.points.map((punto: string) => (
                <li key={punto}>{punto}</li>
              ))}
            </ul>
          </article>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Experiencia;
