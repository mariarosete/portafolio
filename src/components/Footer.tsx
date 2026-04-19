import React from "react";
import {
  ChevronUp,
  Heart,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { PROFILE } from "../data/profile";

const Footer: React.FC = () => (
  <footer className="relative border-t border-white/10 bg-[#070312] overflow-hidden">
    {/* Glow sutil */}
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute left-[12%] top-0 h-24 w-24 rounded-full bg-fuchsia-600/10 blur-[80px]" />
      <div className="absolute right-[10%] bottom-0 h-24 w-24 rounded-full bg-rose-500/10 blur-[80px]" />
    </div>

    <div className="relative max-w-[1440px] mx-auto px-4 md:px-6 py-10 md:py-10">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        {/* Izquierda */}
        <div className="space-y-4 md:space-y-3">
          <div className="flex items-center gap-3">
            <img
              src="/favicon.svg"
              alt="Logo MR"
              className="h-7 w-7 object-contain"
            />
            <span className="text-white/85 font-semibold tracking-tight text-lg sm:text-base">
              {PROFILE.name}
            </span>
          </div>

          <p className="text-[15px] sm:text-sm text-white/50 leading-8 sm:leading-7 max-w-2xl">
            © {new Date().getFullYear()}{" "}
            <span className="text-white/80 font-medium">{PROFILE.name}</span>.{" "}
            Desarrollado con{" "}
            <Heart className="inline-block w-4 h-4 text-rose-500 mb-[2px]" />{" "}
            usando React, Vite y Tailwind CSS.
          </p>
        </div>

        {/* Derecha */}
        <div className="flex flex-col gap-5 lg:items-end">
          <div className="flex items-center gap-3">
            <a
              aria-label="GitHub"
              href={PROFILE.socials.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/10 bg-white/5 p-3 text-white/65 transition hover:bg-rose-500/12 hover:border-rose-500/30 hover:text-rose-300"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              aria-label="LinkedIn"
              href={PROFILE.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/10 bg-white/5 p-3 text-white/65 transition hover:bg-rose-500/12 hover:border-rose-500/30 hover:text-rose-300"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              aria-label="Email"
              href={PROFILE.socials.email}
              className="rounded-xl border border-white/10 bg-white/5 p-3 text-white/65 transition hover:bg-rose-500/12 hover:border-rose-500/30 hover:text-rose-300"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <a
            href="#inicio"
            className="
              inline-flex w-full sm:w-auto items-center justify-center gap-2
              rounded-2xl px-4 py-3
              text-sm font-semibold text-white/85
              border border-white/10 bg-white/5
              backdrop-blur-xl
              transition-all duration-300
              hover:bg-white/10 hover:-translate-y-[1px]
            "
          >
            <img
              src="/favicon.svg"
              alt="Inicio"
              className="w-4 h-4 object-contain"
            />
            <span className="sm:hidden">Volver arriba</span>
            <ChevronUp className="w-4 h-4 text-white/60" />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;