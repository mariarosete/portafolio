import React, { useEffect, useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  FileDown,
  Menu,
  X,
  ChevronRight,
} from "lucide-react";
import { PROFILE as PERFIL } from "../data/profile";
import useScrollSpy from "../hooks/useScrollSpy";

const Nav: React.FC = () => {
  const [desplazado, setDesplazado] = useState(false);
  const [abierto, setAbierto] = useState(false);

  const activo = useScrollSpy([
    "inicio",
    "sobre-mi",
    "educacion",
    "certificados",
    "experiencia",
    "proyectos",
    "tecnologias",
    "contacto",
  ]);

  useEffect(() => {
    const onScroll = () => setDesplazado(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = abierto ? "hidden" : "";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [abierto]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setAbierto(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

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
        className={`group relative px-3 py-2 rounded-xl text-sm font-medium transition-colors ${esActivo ? "text-white" : "text-white/62 hover:text-rose-300"
          }`}
      >
        <span className="relative z-10">{children}</span>

        <span
          className={`absolute left-2 right-2 -bottom-0.5 h-[2px] rounded-full bg-gradient-to-r from-rose-500 via-pink-500 to-fuchsia-500 transition-opacity ${esActivo ? "opacity-100" : "opacity-0 group-hover:opacity-100"
            }`}
        />
      </a>
    );
  };

  const EnlaceMovil = ({
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
        onClick={() => setAbierto(false)}
        className={`group flex items-center justify-between rounded-2xl px-4 py-3.5 transition ${esActivo
            ? "bg-gradient-to-r from-rose-500/14 to-fuchsia-500/10 border border-rose-500/20 text-white"
            : "border border-transparent text-white/78 hover:bg-white/[0.04] hover:text-rose-300"
          }`}
      >
        <span className="font-medium">{children}</span>
        <ChevronRight
          className={`w-4 h-4 transition ${esActivo
              ? "text-rose-300"
              : "text-white/30 group-hover:text-rose-300"
            }`}
        />
      </a>
    );
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${desplazado
          ? "backdrop-blur-xl bg-[#0a0614]/80 border-b border-white/10 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.65)]"
          : "bg-transparent"
        }`}
    >
      <nav className="max-w-[1440px] mx-auto h-16 px-4 md:px-6 flex items-center justify-between">
        <a
          href="#inicio"
          className="flex items-center gap-3 font-semibold tracking-tight text-white shrink-0"
        >
          <img
            src="/favicon.svg"
            alt="Logo MR"
            className="h-12 w-12 object-contain"
          />
        </a>

        <ul className="hidden min-[1126px]:flex items-center gap-1">
          <li><EnlaceAcento href="#sobre-mi">Sobre mí</EnlaceAcento></li>
          <li><EnlaceAcento href="#educacion">Educación</EnlaceAcento></li>
          <li><EnlaceAcento href="#certificados">Certificados</EnlaceAcento></li>
          <li><EnlaceAcento href="#experiencia">Experiencia</EnlaceAcento></li>
          <li><EnlaceAcento href="#proyectos">Proyectos</EnlaceAcento></li>
          <li><EnlaceAcento href="#tecnologias">Tecnologías</EnlaceAcento></li>
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#contacto"
            className="
              hidden min-[1126px]:inline-flex items-center gap-2
              rounded-2xl px-4 py-2.5
              text-sm font-semibold text-white
              bg-gradient-to-r from-rose-500 to-fuchsia-600
              shadow-[0_15px_40px_-12px_rgba(244,63,94,.45)]
              transition hover:brightness-110
            "
          >
            <Mail className="w-4 h-4" />
            Contacto
          </a>

          <a
            href={PERFIL.cv}
            target="_blank"
            rel="noopener"
            className="
              hidden min-[1126px]:inline-flex items-center gap-2
              rounded-2xl px-4 py-2.5
              text-sm font-semibold text-white/90
              border border-white/10 bg-white/5
              backdrop-blur-xl
              transition hover:bg-rose-500/12 hover:border-rose-500/30 hover:text-rose-200
            "
          >
            <FileDown className="w-4 h-4" />
            Descargar CV
          </a>

          <a
            aria-label="GitHub"
            href={PERFIL.socials.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-white/10 bg-white/5 p-2.5 text-white/65 transition hover:bg-rose-500/12 hover:border-rose-500/30 hover:text-rose-300"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            aria-label="LinkedIn"
            href={PERFIL.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-white/10 bg-white/5 p-2.5 text-white/65 transition hover:bg-rose-500/12 hover:border-rose-500/30 hover:text-rose-300"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <a
            aria-label="Email"
            href={PERFIL.socials.email}
            className="rounded-xl border border-white/10 bg-white/5 p-2.5 text-white/65 transition hover:bg-rose-500/12 hover:border-rose-500/30 hover:text-rose-300"
          >
            <Mail className="w-4 h-4" />
          </a>

          <button
            aria-label="Abrir menú"
            className="hidden max-[1125px]:inline-flex rounded-xl border border-white/10 bg-white/5 p-2.5 text-white/85 transition hover:bg-rose-500/12 hover:border-rose-500/30 hover:text-rose-300"
            onClick={() => setAbierto(true)}
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </nav>

      {abierto && (
        <div className="hidden max-[1125px]:block">
          <div
            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-[3px]"
            onClick={() => setAbierto(false)}
          />

          <div
            className="fixed top-[76px] inset-x-0 z-50 mx-4 rounded-[28px] p-[1px]
                       bg-gradient-to-br from-rose-500/30 via-fuchsia-500/15 to-amber-300/15
                       shadow-[0_24px_70px_-20px_rgba(0,0,0,.6)]"
            role="dialog"
            aria-modal="true"
          >
            <div className="rounded-[28px] border border-white/10 bg-[#120b1f]/95 backdrop-blur-xl flex flex-col max-h-[calc(100dvh-6rem)] overflow-hidden">
              {/* cabecera */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.26em] text-rose-400">
                    Navegación
                  </p>
                  <p className="mt-1 text-white font-semibold">
                    Explora el portfolio
                  </p>
                </div>

                <button
                  aria-label="Cerrar menú"
                  className="rounded-xl border border-white/10 bg-white/5 p-2 text-white/80 transition hover:bg-rose-500/12 hover:border-rose-500/30 hover:text-rose-300"
                  onClick={() => setAbierto(false)}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* cuerpo */}
              <div className="overflow-y-auto px-3 py-3">
                <div className="space-y-1.5">
                  <EnlaceMovil href="#sobre-mi">Sobre mí</EnlaceMovil>
                  <EnlaceMovil href="#educacion">Educación</EnlaceMovil>
                  <EnlaceMovil href="#certificados">Certificados</EnlaceMovil>
                  <EnlaceMovil href="#experiencia">Experiencia</EnlaceMovil>
                  <EnlaceMovil href="#proyectos">Proyectos</EnlaceMovil>
                  <EnlaceMovil href="#tecnologias">Tecnologías</EnlaceMovil>
                  <EnlaceMovil href="#contacto">Contacto</EnlaceMovil>
                </div>

                <div className="my-4 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                {/* acciones */}
                <div className="grid gap-2 px-1">
                  <a
                    href="#contacto"
                    onClick={() => setAbierto(false)}
                    className="
                      inline-flex h-11 items-center justify-center gap-2 rounded-2xl px-4
                      text-sm font-semibold text-white
                      bg-gradient-to-r from-rose-500 to-fuchsia-600
                      shadow-[0_15px_40px_-12px_rgba(244,63,94,.45)]
                    "
                  >
                    <Mail className="w-4 h-4" />
                    Contacto
                  </a>

                  <a
                    href={PERFIL.cv}
                    target="_blank"
                    rel="noopener"
                    onClick={() => setAbierto(false)}
                    className="
                      inline-flex h-11 items-center justify-center gap-2 rounded-2xl px-4
                      text-sm font-semibold text-white/90
                      border border-white/10 bg-white/5
                      backdrop-blur-xl
                    "
                  >
                    <FileDown className="w-4 h-4" />
                    Descargar CV
                  </a>
                </div>

                {/* redes dentro del panel */}
                <div className="mt-5 px-1 pb-2">
                  <p className="mb-3 text-[11px] uppercase tracking-[0.24em] text-white/35">
                    También puedes encontrarme en
                  </p>

                  <div className="flex items-center gap-2">
                    <a
                      aria-label="GitHub"
                      href={PERFIL.socials.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/80 transition hover:bg-rose-500/12 hover:border-rose-500/30 hover:text-rose-300"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>

                    <a
                      aria-label="LinkedIn"
                      href={PERFIL.socials.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/80 transition hover:bg-rose-500/12 hover:border-rose-500/30 hover:text-rose-300"
                    >
                      <Linkedin className="w-4 h-4" />
                      LinkedIn
                    </a>

                    <a
                      aria-label="Email"
                      href={PERFIL.socials.email}
                      className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-3 text-white/80 transition hover:bg-rose-500/12 hover:border-rose-500/30 hover:text-rose-300"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
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