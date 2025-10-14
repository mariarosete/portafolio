import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "./ui/SectionTitle";
import { CERTS } from "../data/profile";
import { BadgeCheck, ExternalLink } from "lucide-react";

const Certificates: React.FC = () => (
  <section id="certificados" className="max-w-[1440px] mx-auto px-4 md:px-6 pt-10 pb-6">
    <SectionTitle id="certificados" icon={<BadgeCheck className="w-7 h-7" />}>
      Certificados
    </SectionTitle>

    <div className="grid md:grid-cols-2 gap-4">
      {CERTS.map((c) => (
        <motion.a
          key={c.title}
          href={c.link}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="group block"
        >
          <div className="rounded-2xl p-[2px] bg-gradient-to-r from-rose-300/35 via-rose-200/30 to-amber-200/35 hover:from-rose-300/55 hover:via-rose-200/50 hover:to-amber-200/55 shadow-[0_16px_40px_-24px_rgba(244,63,94,.30)] transition">
            <div className="rounded-[14px] ring-1 ring-white/70 bg-white/95 backdrop-blur-[2px] px-4 py-3 flex items-center gap-4">
              <div className="shrink-0 w-12 h-12 rounded-xl ring-1 ring-slate-200 bg-white p-1.5 flex items-center justify-center overflow-hidden">
                {c.logo && (
                  <img
                    src={c.logo}
                    alt={`${c.org} logo`}
                    title={c.org}
                    className="w-full h-full object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                )}
              </div>

              <div className="flex-1">
                <h3 className="font-semibold leading-tight">{c.title}</h3>
                <p className="text-slate-600 text-sm">{c.org} · {c.date}</p>
                {"credId" in c && (c as any).credId && (
                  <p className="text-xs text-slate-500 mt-0.5">ID: {(c as any).credId}</p>
                )}
              </div>

              <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-slate-600 transition" />
            </div>
          </div>
        </motion.a>
      ))}
    </div>
  </section>
);

export default Certificates;
