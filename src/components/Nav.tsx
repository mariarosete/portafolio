import React, { useEffect, useState } from "react";
import { Github, Linkedin, Mail, FileDown, Menu, X } from "lucide-react";
import { PROFILE as PERFIL } from "../data/profile";
import useScrollSpy from "../hooks/useScrollSpy";

const Nav: React.FC = () => {
  // Estado: si el header ya pasó cierto scroll para aplicar fondo/borde/sombra
  const [desplazado, setDesplazado] = useState(false);
  // Estado: si el panel móvil (menú) está abierto
  const [abierto, setAbierto] = useState(false);

  // Sección activa según el scroll 
  const activo = useScrollSpy([
    "inicio",
    "sobre-mi",
    "educacion",
    "certificados",
    "experiencia",
    "proyectos",
    "tecnologias",
  ]);

  // Observa el scroll para cambiar el estilo del header
  useEffect(() => {
    const onScroll = () => setDesplazado(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Bloquea el scroll del body cuando el panel móvil está abierto
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = abierto ? "hidden" : "";
    return () => { document.body.style.overflow = prev; };
  }, [abierto]);

  // Cerrar con tecla Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setAbierto(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  /**
   * Enlace con “subrayado” degradado cuando está activo (para el menú desktop)
   */
  const EnlaceAcento = ({
    href,
    children,
  }: {
    href: `#${string}`;
    children: React.ReactNode;
  }) => {
    const id = href.slice(1);
    const esActivo = activo === id;
    return (
      <a
        href={href}
        className={`relative px-3 py-2 rounded-xl text-sm font-medium transition group ${
          esActivo ? "text-slate-900" : "text-slate-800 hover:text-slate-900"
        }`}
      >
        <span className="relative z-10">{children}</span>
        <span
          className={`absolute left-2 right-2 -bottom-0.5 h-[3px] rounded-full transition-opacity bg-gradient-to-r from-rose-500 to-amber-400 ${
            esActivo ? "opacity-100" : "opacity-0 group-hover:opacity-100"
          }`}
        />
      </a>
    );
  };

  /**
   * Enlace del panel móvil; al hacer clic cierra el panel
   */
  const EnlaceMovil = ({
    href,
    children,
  }: {
    href: `#${string}`;
    children: React.ReactNode;
  }) => (
    <a
      href={href}
      onClick={() => setAbierto(false)}
      className="block px-4 py-3 rounded-xl text-slate-900 hover:bg-white/50 transition"
    >
      {children}
    </a>
  );

  return (
    <header
      className={`sticky top-0 z-50 transition-all backdrop-blur-md ${
        desplazado
          ? "bg-gradient-to-r from-rose-300/95 via-rose-200/95 to-amber-200/95 border-b border-rose-200/70 shadow-[0_6px_18px_-4px_rgba(244,63,94,.35)]"
          : "bg-gradient-to-r from-rose-200/95 via-rose-100/95 to-amber-100/95"
      }`}
    >
      {/* Barra principal */}
      <nav className="max-w-[1440px] mx-auto h-14 px-4 md:px-6 flex items-center justify-between">
        {/* Logo + nombre (enlace a #inicio) */}
        <a
          href="#inicio"
          className="flex items-center gap-2 font-semibold tracking-tight text-slate-900 shrink-0"
        >
          <img
            src="/favicon.svg"
            alt="Logo MR"
            className="h-5 w-5 rounded-md"
            loading="lazy"
            decoding="async"
          />
          <span className="whitespace-nowrap">María Rosete</span>
        </a>

        {/* Navegación desktop (se oculta en <=1125px) */}
        <ul className="hidden min-[1126px]:flex items-center gap-1.5">
          <li><EnlaceAcento href="#sobre-mi">Sobre mí</EnlaceAcento></li>
          <li><EnlaceAcento href="#educacion">Educación</EnlaceAcento></li>
          <li><EnlaceAcento href="#certificados">Certificados</EnlaceAcento></li>
          <li><EnlaceAcento href="#experiencia">Experiencia</EnlaceAcento></li>
          <li><EnlaceAcento href="#proyectos">Proyectos</EnlaceAcento></li>
          <li><EnlaceAcento href="#tecnologias">Tecnologías</EnlaceAcento></li>
          <li>
            <a
              href="#contacto"
              className="h-9 px-3 rounded-2xl text-white inline-flex items-center gap-2 bg-gradient-to-r from-rose-500 to-amber-400 hover:brightness-110"
            >
              <Mail className="w-4 h-4" /> Contacto
            </a>
          </li>
          <li>
            <a
              href={PERFIL.cv}
              target="_blank"
              rel="noopener"
              className="h-9 px-3 rounded-2xl text-white inline-flex items-center gap-2 bg-gradient-to-r from-rose-500 to-amber-400 hover:brightness-110"
            >
              <FileDown className="w-4 h-4" /> Descargar CV
            </a>
          </li>
        </ul>

        {/* Botones a la derecha + hamburguesa móvil */}
        <div className="flex items-center gap-1">
          <a
            aria-label="GitHub"
            href={PERFIL.socials.github}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg hover:bg-white/30"
          >
            <Github className="w-5 h-5 text-slate-800" />
          </a>
          <a
            aria-label="LinkedIn"
            href={PERFIL.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg hover:bg-white/30"
          >
            <Linkedin className="w-5 h-5 text-slate-800" />
          </a>
          <a
            aria-label="Email"
            href={PERFIL.socials.email}
            className="p-2 rounded-lg hover:bg-white/30"
          >
            <Mail className="w-5 h-5 text-slate-800" />
          </a>

          {/* Botón hamburguesa (solo visible en <=1125px) */}
          <button
            aria-label="Abrir menú"
            className="hidden max-[1125px]:inline-flex p-2 ml-1 rounded-lg hover:bg-white/30"
            onClick={() => setAbierto(true)}
          >
            <Menu className="w-6 h-6 text-slate-900" />
          </button>
        </div>
      </nav>

      {/* Panel móvil deslizante */}
      {abierto && (
        <div className="hidden max-[1125px]:block">
          {/* Capa oscura: al tocar, cierra el menú */}
          <div
            className="fixed inset-0 z-40 bg-black/30"
            onClick={() => setAbierto(false)}
          />
          <div
            className="fixed top-14 inset-x-0 z-50 mx-4 rounded-2xl p-[2px]
                       bg-gradient-to-r from-rose-300 via-rose-200 to-amber-200
                       shadow-[0_20px_60px_-20px_rgba(0,0,0,.35)]"
            role="dialog"
            aria-modal="true"
          >
            {/* Contenedor del panel:
               - flex col: header + cuerpo desplazable
               - max-h con dvh: cabe en móvil horizontal
            */}
            <div className="rounded-2xl bg-white/90 ring-1 ring-white/70 backdrop-blur-[2px] flex flex-col max-h-[calc(100dvh-5rem)]">
              {/* Header del panel móvil */}
              <div className="flex items-center justify-between px-4 py-3">
                <span className="font-semibold text-slate-900">Menú</span>
                <button
                  aria-label="Cerrar menú"
                  className="p-2 rounded-lg hover:bg-black/5"
                  onClick={() => setAbierto(false)}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Cuerpo desplazable con enlaces */}
              <div className="px-2 pb-3 space-y-1 overflow-y-auto">
                <EnlaceMovil href="#sobre-mi">Sobre mí</EnlaceMovil>
                <EnlaceMovil href="#educacion">Educación</EnlaceMovil>
                <EnlaceMovil href="#certificados">Certificados</EnlaceMovil>
                <EnlaceMovil href="#experiencia">Experiencia</EnlaceMovil>
                <EnlaceMovil href="#proyectos">Proyectos</EnlaceMovil>
                <EnlaceMovil href="#tecnologias">Tecnologías</EnlaceMovil>

                {/* Separador */}
                <div className="border-t border-rose-200/60 my-2" />

                {/* Acciones rápidas */}
                <div className="px-2 pb-3 flex flex-col gap-2">
                  <a
                    href="#contacto"
                    onClick={() => setAbierto(false)}
                    className="inline-flex h-10 items-center justify-center gap-2 rounded-xl px-4 text-white
                               bg-gradient-to-r from-rose-500 to-amber-400 hover:brightness-110"
                  >
                    <Mail className="w-4 h-4" /> Contacto
                  </a>
                  <a
                    href={PERFIL.cv}
                    target="_blank"
                    rel="noopener"
                    onClick={() => setAbierto(false)}
                    className="inline-flex h-10 items-center justify-center gap-2 rounded-xl px-4 text-white
                               bg-gradient-to-r from-rose-500 to-amber-400 hover:brightness-110"
                  >
                    <FileDown className="w-4 h-4" /> Descargar CV
                  </a>
                </div>
                
                <div className="pb-[env(safe-area-inset-bottom)]" />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Nav;
