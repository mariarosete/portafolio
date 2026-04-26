import React from "react";
import ContactForm from "./ContactForm";
import {
  Github,
  Linkedin,
  Mail,
  Send,
} from "lucide-react";
import { PROFILE as PERFIL } from "../data/profile";

/**
 * Sección de contacto 
 */
const Contacto: React.FC = () => (
  <section
    id="contacto"
    className="relative max-w-[1440px] mx-auto px-4 md:px-6 pt-16 md:pt-24 pb-14 md:pb-20"
  >
    <div className="grid gap-10 xl:grid-cols-[0.9fr_1.1fr] items-start">
      {/* COLUMNA IZQUIERDA */}
      <div className="max-w-2xl">
        <div className="inline-flex items-center gap-2 text-rose-400 text-[11px] sm:text-xs uppercase tracking-[0.28em]">
          <Mail className="w-4 h-4" />
          <span>Contacto</span>
        </div>

        <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-black leading-[0.95] tracking-tight">
          <span className="text-white/80">Disponible para</span>
          <span className="block bg-gradient-to-r from-rose-500 via-pink-500 to-fuchsia-600 bg-clip-text text-transparent italic">
            nuevos proyectos
          </span>
        </h2>

        <p className="mt-6 max-w-xl text-white/58 text-base sm:text-lg leading-8">
          Estoy abierta a oportunidades y proyectos donde aportar valor desde el desarrollo backend y APIs, complementando con frontend para construir aplicaciones completas.
        </p>

        { }
        <div className="mt-8 rounded-[28px] p-[1px] bg-gradient-to-br from-rose-500/16 via-fuchsia-500/8 to-amber-300/8 shadow-[0_16px_55px_-30px_rgba(0,0,0,0.65)]">
          <div className="rounded-[28px] border border-white/10 bg-[#120b1f]/80 backdrop-blur-xl p-5 sm:p-6">
            <p className="text-[11px] uppercase tracking-[0.28em] text-rose-400">
              Disponibilidad
            </p>
            <p className="mt-4 text-white text-xl sm:text-2xl font-bold leading-tight">
              Lista para nuevos retos
            </p>
            <p className="mt-3 text-white/62 text-sm sm:text-[15px] leading-7">
              Si crees que mi perfil puede encajar en tu equipo o proyecto,
              estaré encantada de hablar contigo.
            </p>
          </div>
        </div>

        {/* Datos de contacto */}
        <div className="mt-8">
          <div className="max-w-[420px] rounded-[24px] p-[1px] bg-gradient-to-br from-rose-500/14 via-fuchsia-500/8 to-amber-300/8">
            <div className="rounded-[24px] border border-white/10 bg-[#120b1f]/80 backdrop-blur-xl p-4">
              <div className="flex items-start gap-3">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-rose-500/20 bg-rose-500/10 text-rose-400">
                  <Mail className="w-5 h-5" />
                </div>

                <div className="min-w-0">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-white/40">
                    Email
                  </p>

                  <a
                    href="mailto:marlarosete89@gmail.com"
                    className="mt-2 block break-all text-white font-medium hover:text-rose-300 transition"
                  >
                    marlarosete89@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Redes */}
        <div className="mt-8">
          <p className="text-[11px] uppercase tracking-[0.26em] text-white/35">
            También puedes encontrarme en
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            {[
              {
                Icono: Github,
                href: PERFIL.socials.github,
                etiqueta: "GitHub",
              },
              {
                Icono: Linkedin,
                href: PERFIL.socials.linkedin,
                etiqueta: "LinkedIn",
              }
            ].map(({ Icono, href, etiqueta }) => (
              <a
                key={etiqueta}
                aria-label={etiqueta}
                title={etiqueta}
                href={href}
                target={etiqueta === "Email" ? undefined : "_blank"}
                rel={etiqueta === "Email" ? undefined : "noreferrer"}
                className="
                  inline-flex items-center justify-center gap-2
                  rounded-2xl px-4 py-3
                  text-sm font-semibold text-white/90
                  border border-white/10 bg-white/5
                  backdrop-blur-xl
                  transition-all duration-300
                  hover:bg-white/10 hover:-translate-y-[1px]
                "
              >
                <Icono className="w-4 h-4" />
                {etiqueta}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* COLUMNA DERECHA */}

{/* COLUMNA DERECHA */}
<div className="xl:mt-10 w-full xl:max-w-[720px] xl:ml-auto rounded-[32px] p-[1px] bg-gradient-to-br from-rose-500/18 via-fuchsia-500/8 to-amber-300/8 shadow-[0_20px_70px_-35px_rgba(0,0,0,0.7)]">
  <div className="rounded-[32px] border border-white/10 bg-[#120b1f]/80 backdrop-blur-xl p-5 sm:p-6 md:p-8">
    <div className="flex items-center gap-3">
      <div className="grid h-11 w-11 place-items-center rounded-2xl border border-rose-500/20 bg-rose-500/10 text-rose-400">
        <Send className="w-5 h-5" />
      </div>
      <div>
        <p className="text-[11px] uppercase tracking-[0.24em] text-white/40">
          Formulario
        </p>
        <h3 className="text-white text-xl font-bold">
          Envíame un mensaje
        </h3>
      </div>
    </div>

    <p className="mt-4 text-white/58 text-sm sm:text-[15px] leading-7">
      Cuéntame brevemente tu idea, propuesta o interés, y te responderé
      lo antes posible.
    </p>

    <div className="mt-6">
      <ContactForm />
    </div>
  </div>
</div>
    </div>
  </section>
);

export default Contacto;