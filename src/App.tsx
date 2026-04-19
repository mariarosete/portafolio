import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Certificates from "./components/Certificates";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Tech from "./components/Tech";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { UserCircle2, Code2, Briefcase, BrainCircuit } from "lucide-react";

import {
  SiDotnet,
  SiNodedotjs,
  SiVuedotjs,
  SiReact,
  SiVite,
  SiTailwindcss,
  SiSwagger,
  SiGit,
  SiMysql,
} from "react-icons/si";
import type { IconType } from "react-icons";

type Chip = {
  Icono: IconType;
  etiqueta: string;
  color: string;
  bg: string;
  border: string;
};

type Highlight = {
  icon: React.ReactNode;
  title: string;
  text: string;
};

export default function App() {
  const CHIPS_SOBRE_MI: Chip[] = [
    {
      Icono: SiDotnet,
      etiqueta: ".NET / ASP.NET Core",
      color: "text-[#a78bfa]",
      bg: "bg-[#151125]",
      border: "border-[#2d214b]",
    },
    {
      Icono: SiReact,
      etiqueta: "React",
      color: "text-[#61DAFB]",
      bg: "bg-[#0d1820]",
      border: "border-[#1f3745]",
    },
    {
      Icono: SiNodedotjs,
      etiqueta: "Node.js",
      color: "text-[#67c46a]",
      bg: "bg-[#101912]",
      border: "border-[#233626]",
    },
    {
      Icono: SiVuedotjs,
      etiqueta: "Vue.js",
      color: "text-[#42B883]",
      bg: "bg-[#101913]",
      border: "border-[#1e3528]",
    },
    {
      Icono: SiVite,
      etiqueta: "Vite",
      color: "text-[#8b92ff]",
      bg: "bg-[#141626]",
      border: "border-[#2b2f55]",
    },
    {
      Icono: SiTailwindcss,
      etiqueta: "Tailwind CSS",
      color: "text-[#38bdf8]",
      bg: "bg-[#0c171d]",
      border: "border-[#1b3944]",
    },
    {
      Icono: SiSwagger,
      etiqueta: "Swagger",
      color: "text-[#a3e635]",
      bg: "bg-[#171b0e]",
      border: "border-[#384019]",
    },
    {
      Icono: SiGit,
      etiqueta: "Git",
      color: "text-[#F05032]",
      bg: "bg-[#1d110d]",
      border: "border-[#4b2319]",
    },
    {
      Icono: SiMysql,
      etiqueta: "MySQL",
      color: "text-[#4fc3e8]",
      bg: "bg-[#0d171c]",
      border: "border-[#1f3b47]",
    },
  ];

  const HIGHLIGHTS: Highlight[] = [
    {
      icon: <Code2 className="h-5 w-5" />,
      title: "Full Stack",
      text: "Desarrollo aplicaciones web con .NET, React y una base sólida en backend y frontend.",
    },
    {
      icon: <Briefcase className="h-5 w-5" />,
      title: "Experiencia real",
      text: "He trabajado en proyectos profesionales y académicos orientados a producto y usuario.",
    },
    {
      icon: <BrainCircuit className="h-5 w-5" />,
      title: "Mentalidad",
      text: "Me gusta construir soluciones limpias, útiles y bien pensadas, cuidando cada detalle.",
    },
  ];

  return (
    <div
      className="
        min-h-screen text-white bg-[#070312]
        bg-[radial-gradient(40%_30%_at_50%_0%,rgba(244,63,94,0.10),transparent),radial-gradient(30%_25%_at_85%_10%,rgba(168,85,247,0.08),transparent)]
      "
    >
      <Nav />

      <main role="main">
        <Hero />

        <div className="h-12 md:h-20 bg-gradient-to-b from-transparent to-[#0b0415]" />

        <div className="relative bg-[linear-gradient(180deg,#0b0415_0%,#0d0418_35%,#10061b_100%)]">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute left-[-100px] top-[120px] h-[240px] w-[240px] rounded-full bg-rose-500/10 blur-[120px]" />
            <div className="absolute right-[-80px] top-[220px] h-[260px] w-[260px] rounded-full bg-fuchsia-500/10 blur-[130px]" />
          </div>

          {/* SOBRE MÍ */}
          <section
            id="sobre-mi"
            className="relative max-w-[1440px] mx-auto px-4 md:px-6 pt-16 md:pt-24 pb-14 md:pb-20"
          >
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 text-rose-400 text-[11px] sm:text-xs uppercase tracking-[0.28em]">
                <UserCircle2 className="w-4 h-4" />
                <span>Perfil profesional</span>
              </div>

              <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-black leading-[0.95] tracking-tight">
                <span className="text-white/70">Construyendo</span>
                <span className="block bg-gradient-to-r from-rose-500 via-pink-500 to-fuchsia-600 bg-clip-text text-transparent">
                  Soluciones Reales
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-white/55 text-base sm:text-lg leading-8">
                Desarrollo web full stack con foco en producto y claridad técnica.
              </p>
            </div>

            <div className="mt-10 md:mt-12 grid gap-8 xl:grid-cols-[1.25fr_0.75fr] xl:items-stretch">
              {/* COLUMNA IZQUIERDA */}
              <div className="h-full rounded-[30px] p-[1px] bg-gradient-to-br from-rose-500/25 via-fuchsia-500/10 to-amber-300/15 shadow-[0_20px_80px_-35px_rgba(0,0,0,0.55)]">
                <div className="h-full rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] backdrop-blur-xl p-6 sm:p-8 md:p-10 flex flex-col">
                  <div className="max-w-3xl">
                    <span className="inline-flex items-center rounded-full border border-rose-500/20 bg-rose-500/10 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.25em] text-rose-300">
                      Especialización
                    </span>

                    <h3 className="mt-5 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
                      Desarrollo soluciones web modernas,
                      <span className="block bg-gradient-to-r from-rose-400 via-pink-400 to-fuchsia-400 bg-clip-text text-transparent">
                        claras y escalables
                      </span>
                    </h3>

                    <div className="mt-6 space-y-4 text-[15px] sm:text-base leading-8 text-white/72">
                      <p>
                        Soy María Rosete, desarrolladora Full Stack especializada en{" "}
                        <strong className="text-white font-semibold">.NET</strong> y{" "}
                        <strong className="text-white font-semibold">React</strong>.
                      </p>

                      <p>
                        Desarrollo APIs REST e interfaces web modernas, con especial atención a
                        la claridad del código, las buenas prácticas y la mantenibilidad. Además,
                        cuento con experiencia en Node.js, Vue.js, MySQL, Git y tecnologías
                        actuales del ecosistema frontend.
                      </p>
                    </div>
                  </div>

                  {/* Tecnologías en grid */}
                  <div className="mt-8">
                    <h4 className="text-sm font-semibold uppercase tracking-[0.22em] text-white/45">
                      Tecnologías principales
                    </h4>

                    <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-2 sm:gap-3">
                      {CHIPS_SOBRE_MI.map(({ Icono, etiqueta, color, bg, border }) => (
                        <div
                          key={etiqueta}
                          className={`
                            flex items-center gap-2 sm:gap-3 rounded-xl sm:rounded-2xl border ${border}
                            ${bg} px-3 py-2.5 sm:px-4 sm:py-3
                            transition hover:-translate-y-[1px] hover:bg-white/[0.07]
                          `}
                        >
                          <div
                            className={`
                              grid h-8 w-8 sm:h-10 sm:w-10 shrink-0 place-items-center rounded-lg sm:rounded-xl
                              border border-white/10 bg-black/10 ${color}
                            `}
                          >
                            <Icono className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                          </div>

                          <span className="text-[12px] sm:text-sm text-white/82 leading-4 sm:leading-5 break-words">
                            {etiqueta}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* COLUMNA DERECHA */}
              <div className="h-full rounded-[30px] p-[1px] bg-gradient-to-br from-white/10 via-white/5 to-transparent shadow-[0_20px_80px_-35px_rgba(0,0,0,0.7)]">
                <div className="h-full rounded-[30px] border border-white/10 bg-[#0b0818]/95 backdrop-blur-xl p-5 sm:p-6 flex flex-col">
                  <div className="grid gap-4">
                    {HIGHLIGHTS.map((item) => (
                      <div
                        key={item.title}
                        className="rounded-2xl border border-white/8 bg-white/[0.03] p-4 sm:p-5 min-h-[132px] flex"
                      >
                        <div className="flex items-start gap-4 w-full">
                          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/5 text-rose-400">
                            {item.icon}
                          </div>

                          <div className="flex flex-col justify-center min-h-full">
                            <h3 className="text-xl font-semibold text-white">
                              {item.title}
                            </h3>
                            <p className="mt-2 text-sm leading-7 text-white/55">
                              {item.text}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-2xl border border-white/8 bg-gradient-to-r from-rose-500/10 to-fuchsia-500/5 p-5">
                    <p className="text-sm sm:text-[15px] leading-7 text-white/70">
                      <span className="mr-2 font-semibold text-rose-400">{"/>"}</span>
                      Me interesa formar parte de proyectos donde pueda seguir creciendo,
                      aportar valor desde el primer día y construir producto con criterio
                      técnico y visual.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Education />
          <Certificates />
          <Experience />
          <Projects />
          <Tech />
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
}