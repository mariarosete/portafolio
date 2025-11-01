import React from "react";
import SectionTitle from "./ui/SectionTitle";
import ContactForm from "./ContactForm";
import { Github, Linkedin, Mail } from "lucide-react";
import { PROFILE as PERFIL } from "../data/profile";

/**
 * Sección de contacto:
 * - Muestra botones a redes (GitHub, LinkedIn, Email)
 * - Incluye el formulario de contacto
 */
const Contacto: React.FC = () => (
  // Contenedor de sección 
  <section id="contacto" className="max-w-[1440px] mx-auto px-4 md:px-6 pt-10 pb-6">
  {/* Título */}
  <SectionTitle
    id="contacto"
    icon={<Mail className="w-7 h-7 text-rose-600" />}
  >
    Contacto
  </SectionTitle>

    {/*
      Tarjeta superior con borde degradado:
      - .group nos permite coordinar efectos hover entre padre e hijos
      - Sombra suave y blur sutil 
    */}
    <div className="group rounded-3xl p-[2px] bg-gradient-to-r from-rose-300/50 via-rose-200/45 to-amber-200/55 shadow-[0_20px_60px_-20px_rgba(244,63,94,.25)]">
      <div className="rounded-3xl bg-white/90 backdrop-blur-[2px] ring-1 ring-white/70 p-5 md:p-6">
        {/* Botones de redes alineada a la derecha */}
        <div className="ml-auto flex items-center justify-end gap-3">
          {/*
            Lista de acciones sociales.
            - Abrimos en nueva pestaña salvo el email 
            - Iconos de Lucide ajustados a 20px (w-5 h-5)
          */}
          {[
            { Icono: Github,   href: PERFIL.socials.github,   etiqueta: "GitHub"   },
            { Icono: Linkedin, href: PERFIL.socials.linkedin, etiqueta: "LinkedIn" },
            { Icono: Mail,     href: PERFIL.socials.email,    etiqueta: "Email"    },
          ].map(({ Icono, href, etiqueta }) => (
            <a
              key={etiqueta}
              aria-label={etiqueta}
              title={etiqueta}
              href={href}
              // Email no necesita nueva pestaña
              target={etiqueta === "Email" ? undefined : "_blank"}
              rel={etiqueta === "Email" ? undefined : "noreferrer"}
              className="
                relative inline-flex items-center justify-center h-11 w-11
                rounded-xl text-white bg-amber-400
                shadow-[0_10px_25px_-10px_rgba(245,158,11,.55)]
                ring-1 ring-amber-300/50
                transition-all duration-200
                hover:bg-[length:100%_100%] hover:bg-gradient-to-r hover:from-rose-500 hover:to-amber-400 hover:brightness-110
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-300
              "
            >
             
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-200 group-hover:opacity-100 bg-gradient-to-r from-rose-400/20 to-amber-400/20"
              />
             
              <Icono className="w-5 h-5 relative z-[1]" />
            </a>
          ))}
        </div>
      </div>
    </div>

    {/* Formulario de contacto */}
    <div className="mt-6">
      <ContactForm />
    </div>
  </section>
);

export default Contacto;

