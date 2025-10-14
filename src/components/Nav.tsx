import React, { useEffect, useState } from "react";
import { Github, Linkedin, Mail, FileDown, Menu, X } from "lucide-react";
import { PROFILE } from "../data/profile";
import useScrollSpy from "../hooks/useScrollSpy";

const Nav: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const active = useScrollSpy([
    "inicio","sobre-mi","educacion","certificados","experiencia","proyectos","tecnologias","contacto",
  ]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = prev; };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const LinkAccent = ({
    href, children,
  }: { href: `#${string}`; children: React.ReactNode }) => {
    const id = href.slice(1);
    const isActive = active === id;
    return (
      <a
        href={href}
        className={`relative px-3 py-2 rounded-xl text-sm font-medium transition group ${
          isActive ? "text-slate-900" : "text-slate-800 hover:text-slate-900"
        }`}
      >
        <span className="relative z-10">{children}</span>
        <span
          className={`absolute left-2 right-2 -bottom-0.5 h-[3px] rounded-full transition-opacity bg-gradient-to-r from-rose-500 to-amber-400 ${
            isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
          }`}
        />
      </a>
    );
  };

  const MobileLink = ({
    href, children,
  }: { href: `#${string}`; children: React.ReactNode }) => (
    <a
      href={href}
      onClick={() => setOpen(false)}
      className="block px-4 py-3 rounded-xl text-slate-900 hover:bg-white/50 transition"
    >
      {children}
    </a>
  );

  return (
    <header
      className={`sticky top-0 z-50 transition-all backdrop-blur-md ${
        scrolled
          ? "bg-gradient-to-r from-rose-300/95 via-rose-200/95 to-amber-200/95 border-b border-rose-200/70 shadow-[0_6px_18px_-4px_rgba(244,63,94,.35)]"
          : "bg-gradient-to-r from-rose-200/95 via-rose-100/95 to-amber-100/95"
      }`}
    >
      <nav className="max-w-[1440px] mx-auto h-14 px-4 md:px-6 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2 font-semibold tracking-tight text-slate-900 shrink-0">
          <img src="/favicon.svg" alt="Logo MR" className="h-5 w-5 rounded-md" loading="lazy" decoding="async" />
          <span className="whitespace-nowrap">María Rosete</span>
        </a>

        <ul className="hidden min-[1126px]:flex items-center gap-1.5">
          <li><LinkAccent href="#sobre-mi">Sobre mí</LinkAccent></li>
          <li><LinkAccent href="#educacion">Educación</LinkAccent></li>
          <li><LinkAccent href="#certificados">Certificados</LinkAccent></li>
          <li><LinkAccent href="#experiencia">Experiencia</LinkAccent></li>
          <li><LinkAccent href="#proyectos">Proyectos</LinkAccent></li>
          <li><LinkAccent href="#tecnologias">Tecnologías</LinkAccent></li>
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
              href={PROFILE.cv}
              target="_blank"
              rel="noopener"
              className="h-9 px-3 rounded-2xl text-white inline-flex items-center gap-2 bg-gradient-to-r from-rose-500 to-amber-400 hover:brightness-110"
            >
              <FileDown className="w-4 h-4" /> Descargar CV
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-1">
          <a aria-label="GitHub" href={PROFILE.socials.github} target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-white/30">
            <Github className="w-5 h-5 text-slate-800" />
          </a>
          <a aria-label="LinkedIn" href={PROFILE.socials.linkedin} target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-white/30">
            <Linkedin className="w-5 h-5 text-slate-800" />
          </a>
          <a aria-label="Email" href={PROFILE.socials.email} className="p-2 rounded-lg hover:bg-white/30">
            <Mail className="w-5 h-5 text-slate-800" />
          </a>

          <button
            aria-label="Abrir menú"
            className="hidden max-[1125px]:inline-flex p-2 ml-1 rounded-lg hover:bg-white/30"
            onClick={() => setOpen(true)}
          >
            <Menu className="w-6 h-6 text-slate-900" />
          </button>
        </div>
      </nav>

      {open && (
        <div className="hidden max-[1125px]:block">
          <div className="fixed inset-0 z-40 bg-black/30" onClick={() => setOpen(false)} />
          <div
            className="fixed top-14 inset-x-0 z-50 mx-4 rounded-2xl p-[2px]
                       bg-gradient-to-r from-rose-300 via-rose-200 to-amber-200
                       shadow-[0_20px_60px_-20px_rgba(0,0,0,.35)]"
            role="dialog"
            aria-modal="true"
          >
            <div className="rounded-2xl bg-white/90 ring-1 ring-white/70 backdrop-blur-[2px]">
              <div className="flex items-center justify-between px-4 py-3">
                <span className="font-semibold text-slate-900">Menú</span>
                <button aria-label="Cerrar menú" className="p-2 rounded-lg hover:bg-black/5" onClick={() => setOpen(false)}>
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="px-2 pb-3 space-y-1">
                <MobileLink href="#sobre-mi">Sobre mí</MobileLink>
                <MobileLink href="#educacion">Educación</MobileLink>
                <MobileLink href="#certificados">Certificados</MobileLink>
                <MobileLink href="#experiencia">Experiencia</MobileLink>
                <MobileLink href="#proyectos">Proyectos</MobileLink>
                <MobileLink href="#tecnologias">Tecnologías</MobileLink>
                <MobileLink href="#contacto">Contacto</MobileLink>

                <div className="border-t border-rose-200/60 my-2" />

                <div className="px-2 pb-3 flex flex-col gap-2">
                  <a
                    href="#contacto"
                    onClick={() => setOpen(false)}
                    className="inline-flex h-10 items-center justify-center gap-2 rounded-xl px-4 text-white
                               bg-gradient-to-r from-rose-500 to-amber-400 hover:brightness-110"
                  >
                    <Mail className="w-4 h-4" /> Contacto
                  </a>
                  <a
                    href={PROFILE.cv}
                    target="_blank"
                    rel="noopener"
                    onClick={() => setOpen(false)}
                    className="inline-flex h-10 items-center justify-center gap-2 rounded-xl px-4 text-white
                               bg-gradient-to-r from-rose-500 to-amber-400 hover:brightness-110"
                  >
                    <FileDown className="w-4 h-4" /> Descargar CV
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Nav;
