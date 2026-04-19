import React from "react";
import { PROFILE as PERFIL } from "../data/profile";
import {
  ArrowRight,
  FileDown,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import {
  SiDotnet,
  SiReact,
  SiMysql,
  SiNodedotjs,
  SiGit,
  SiAngular,
} from "react-icons/si";
import type { IconType } from "react-icons";

type FloatingTech = {
  Icono: IconType;
  label: string;
  wrapperClassName: string;
  bubbleClassName: string;
  color: string;
};

const Hero: React.FC = () => {
  const FLOATING_TECHS: FloatingTech[] = [
    {
      Icono: SiDotnet,
      label: ".NET",
      wrapperClassName:
        "absolute left-[8%] top-[12%] sm:left-[11%] sm:top-[15%] lg:left-[10%] lg:top-[14%]",
      bubbleClassName: "animate-float-slow [animation-delay:0s]",
      color: "text-[#b794ff]",
    },
    {
      Icono: SiMysql,
      label: "MySQL",
      wrapperClassName:
        "absolute left-1/2 -translate-x-1/2 top-[0%] sm:top-[0%] lg:top-[-1%]",
      bubbleClassName: "animate-float-medium-reverse [animation-delay:1.8s]",
      color: "text-[#4fc3e8]",
    },
    {
      Icono: SiReact,
      label: "React",
      wrapperClassName:
        "absolute right-[8%] top-[12%] sm:right-[10%] sm:top-[13%] lg:right-[9%] lg:top-[12%]",
      bubbleClassName: "animate-float-medium [animation-delay:.6s]",
      color: "text-[#61DAFB]",
    },
    {
      Icono: SiAngular,
      label: "Angular",
      wrapperClassName:
        "absolute right-[0%] top-1/2 -translate-y-1/2 sm:right-[2%] lg:right-[1%]",
      bubbleClassName: "animate-float-slow-reverse [animation-delay:1.2s]",
      color: "text-[#dd0031]",
    },
    {
      Icono: SiGit,
      label: "Git",
      wrapperClassName:
        "absolute left-1/2 -translate-x-1/2 bottom-[0%] sm:bottom-[0%] lg:bottom-[-1%]",
      bubbleClassName: "animate-float-fast [animation-delay:2.4s]",
      color: "text-[#F05032]",
    },
    {
      Icono: SiNodedotjs,
      label: "Node.js",
      wrapperClassName:
        "absolute left-[0%] top-1/2 -translate-y-1/2 sm:left-[2%] lg:left-[1%]",
      bubbleClassName: "animate-float-medium [animation-delay:3s]",
      color: "text-[#67c46a]",
    },
  ];

  return (
    <section
      id="inicio"
      className="relative min-h-screen overflow-hidden bg-[#070312] text-white"
    >
      {/* Fondo */}
      <div className="absolute inset-0">
        <div className="absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-fuchsia-600/20 blur-[120px]" />
        <div className="absolute right-[-100px] top-[120px] h-[300px] w-[300px] rounded-full bg-rose-500/20 blur-[120px]" />
        <div className="absolute bottom-[-140px] left-[20%] h-[320px] w-[320px] rounded-full bg-amber-400/10 blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_35%)]" />
      </div>

      <div className="relative flex min-h-screen items-center">
        <div className="max-w-[1440px] mx-auto w-full px-5 sm:px-8 md:px-10 lg:px-16 pt-24 pb-10 sm:pb-12 md:pt-28 md:pb-16">
          <div className="grid items-center gap-10 md:gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            {/* IZQUIERDA */}
            <div className="max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] sm:text-xs font-medium uppercase tracking-[0.25em] text-white/80 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-rose-500" />
                Full Stack Developer
              </div>

              <h1 className="mt-5 text-[42px] leading-[0.95] sm:text-6xl lg:text-7xl font-black tracking-tight">
                Hola, soy
                <span className="block bg-gradient-to-r from-rose-400 via-pink-400 to-amber-300 bg-clip-text text-transparent">
                  María Rosete
                </span>
              </h1>
              <p className="mt-5 text-base sm:text-xl font-bold text-white leading-7 sm:leading-8 max-w-2xl mx-auto lg:mx-0">
                {PERFIL.role}
              </p>

              <p className="mt-4 text-[15px] sm:text-lg text-white/60 leading-8 max-w-xl mx-auto lg:mx-0">
                {PERFIL.about}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
                <a
                  href="#proyectos"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3.5 font-semibold text-white bg-gradient-to-r from-rose-500 to-pink-600 shadow-[0_15px_40px_-12px_rgba(244,63,94,.55)] transition hover:scale-[1.02] hover:brightness-110"
                >
                  Ver proyectos
                  <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href={PERFIL.cv}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-3.5 font-semibold text-white/90 backdrop-blur transition hover:text-white hover:bg-white/10"
                >
                  Descargar CV
                  <FileDown className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-7 flex items-center gap-4 text-white/60 justify-center lg:justify-start">
                <a
                  href="https://github.com/mariarosete"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/10 bg-white/5 p-3 transition hover:text-white hover:bg-white/10"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>

                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/10 bg-white/5 p-3 transition hover:text-white hover:bg-white/10"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>

                <a
                  href="mailto:marlarosete89@gmail.com"
                  className="rounded-full border border-white/10 bg-white/5 p-3 transition hover:text-white hover:bg-white/10"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* DERECHA */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[620px] min-h-[360px] sm:min-h-[420px] lg:min-h-[520px] flex items-center justify-center">
                <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-rose-500/20 via-fuchsia-500/10 to-amber-300/20 blur-3xl scale-95" />

                {/* anillo orbital móvil + desktop */}
                <div className="absolute inset-[10%] sm:inset-[6%] rounded-full border border-white/[0.04]" />

                {/* logos flotantes visibles también en móvil */}
                {FLOATING_TECHS.map(
                  ({ Icono, label, wrapperClassName, bubbleClassName, color }) => (
                    <div
                      key={label}
                      className={`${wrapperClassName} z-20`}
                    >
                      <div
                        className={`
                          ${bubbleClassName}
                          flex items-center justify-center
                          h-10 w-10 sm:h-14 sm:w-14
                          rounded-full border border-white/10
                          bg-white/[0.04] backdrop-blur-xl
                          shadow-[0_0_20px_-10px_rgba(255,255,255,0.18)]
                          transition duration-300
                          hover:scale-110 hover:bg-white/[0.08]
                          hover:shadow-[0_0_30px_-8px_rgba(255,255,255,0.28)]
                        `}
                      >
                        <Icono className={`h-4 w-4 sm:h-6 sm:w-6 ${color}`} />
                      </div>
                    </div>
                  )
                )}

                {/* Imagen */}
                <div className="relative z-10 inline-block rounded-[24px] p-[1px] bg-gradient-to-br from-rose-500/70 via-fuchsia-500/45 to-violet-500/55 shadow-[0_24px_60px_-28px_rgba(0,0,0,0.7)]">
                  <div className="rounded-[24px] bg-[#12071f]/80 p-2 backdrop-blur-xl">
                    <div className="overflow-hidden rounded-[18px] bg-gradient-to-br from-[#12071f] via-[#0b0818] to-[#14070d] p-2">
                      <img
                        src={PERFIL.photo}
                        alt={`Foto de ${PERFIL.name}`}
                        loading="eager"
                        decoding="async"
                        className="block max-h-[230px] sm:max-h-[280px] md:max-h-[320px] w-auto object-contain rounded-[16px] drop-shadow-[0_24px_40px_rgba(0,0,0,0.45)]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* FIN DERECHA */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;