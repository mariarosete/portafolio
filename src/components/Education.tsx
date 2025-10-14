import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "./ui/SectionTitle";
import { EDUCATION } from "../data/profile";
import { GraduationCap } from "lucide-react";

const Education: React.FC = () => (
  <section
    id="educacion"
    className="max-w-[1440px] mx-auto px-4 md:px-6 pt-10 pb-6
               bg-gradient-to-b from-rose-50/40 to-amber-50/40 rounded-3xl"
  >
    <SectionTitle id="educacion" icon={<GraduationCap className="w-7 h-7" />}>
      Educación
    </SectionTitle>

    <div className="relative pl-6 before:absolute before:left-3 before:top-0 before:h-full before:w-px before:bg-gradient-to-b before:from-rose-300 before:to-amber-300">
      {EDUCATION.map((e) => (
        <motion.div
          key={e.title}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="relative pl-6 pb-6"
        >
          <span className="absolute left-[-4px] top-4 h-4 w-4 rounded-full bg-gradient-to-br from-rose-400 to-amber-400">
            <span className="block m-[3px] h-[10px] w-[10px] rounded-full bg-white" />
          </span>

          <div className="relative rounded-2xl bg-white p-4 shadow-sm transition hover:shadow-md hover:-translate-y-[1px]">
            <span className="pointer-events-none absolute left-0 top-0 h-full w-[3px] rounded-l-2xl bg-gradient-to-b from-rose-400 to-amber-400" />
            <h3 className="font-semibold">{e.title}</h3>
            <p className="text-slate-600">{e.center}</p>
            <div className="mt-2">
              <span className="inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium text-white bg-gradient-to-r from-rose-500 to-amber-400">
                {e.period}
              </span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Education;
