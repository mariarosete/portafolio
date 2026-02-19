import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "./ui/SectionTitle";
import { CERTS as CERTIFICADOS } from "../data/profile";
import { BadgeCheck, ExternalLink } from "lucide-react";

const Certificados: React.FC = () => {
  const items = useMemo(() => CERTIFICADOS ?? [], []);
  const [showAll, setShowAll] = useState(false);

  // En móvil mostramos menos por defecto
  const MOBILE_LIMIT = 6;

  const visible = showAll ? items : items.slice(0, MOBILE_LIMIT);
  const hasMore = items.length > MOBILE_LIMIT;

  return (
    <section
      id="certificados"
      className="max-w-[1440px] mx-auto px-4 md:px-6 pt-10 pb-6"
    >
      <SectionTitle
        id="certificados"
        icon={<BadgeCheck className="w-7 h-7 text-rose-600" />}
      >
        Certificados
      </SectionTitle>

      {/* Grid responsiva */}
      <div className="grid md:grid-cols-2 gap-4">
        {(visible ?? []).map((certificado) => (
          <motion.a
            key={certificado.title}
            href={certificado.link}
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
                {/* Logo */}
                <div className="shrink-0 w-12 h-12 rounded-xl ring-1 ring-slate-200 bg-white p-1.5 flex items-center justify-center overflow-hidden">
                  {certificado.logo && (
                    <img
                      src={certificado.logo}
                      alt={`${certificado.org} logo`}
                      title={certificado.org}
                      className="w-full h-full object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  )}
                </div>

                {/* Texto */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold leading-tight">
                    {certificado.title}
                  </h3>
                  <p className="text-slate-600 text-sm">
                    {certificado.org} · {certificado.date}
                  </p>

                  {"credId" in certificado && (certificado as any).credId && (
                    <p className="text-xs text-slate-500 mt-0.5">
                      ID: {(certificado as any).credId}
                    </p>
                  )}
                </div>

                <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-slate-600 transition" />
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Botón SOLO en móvil */}
      {hasMore && (
        <div className="mt-5 md:hidden">
          <button
            type="button"
            onClick={() => setShowAll((v) => !v)}
            className="
              w-full inline-flex items-center justify-center
              rounded-2xl px-4 py-2.5
              text-sm font-semibold
              text-rose-700 bg-white/90
              ring-1 ring-rose-200/70
              shadow-sm
              hover:shadow-md hover:-translate-y-[1px]
              transition
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
