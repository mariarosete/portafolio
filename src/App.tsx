import Nav from "./components/Nav";
import Hero from "./components/Hero";
import SectionTitle from "./components/ui/SectionTitle";
import Education from "./components/Education";
import Certificates from "./components/Certificates";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Tech from "./components/Tech";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { UserCircle2 } from "lucide-react";

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
  ring: string;
  bg: string;
};

export default function App() {
  const CHIPS_SOBRE_MI: Chip[] = [
    {
      Icono: SiDotnet,
      etiqueta: "ASP.NET Core / .NET",
      ring: "ring-[#e1d6ff]",
      bg: "bg-[#f8f6ff] text-[#512BD4]",
    },
    {
      Icono: SiNodedotjs,
      etiqueta: "Node.js",
      ring: "ring-[#d5f0d1]",
      bg: "bg-[#f6fff6] text-[#339933]",
    },
    {
      Icono: SiReact,
      etiqueta: "React",
      ring: "ring-[#cfefff]",
      bg: "bg-[#f0fcff] text-[#61DAFB]",
    },
    {
      Icono: SiVuedotjs,
      etiqueta: "Vue.js",
      ring: "ring-[#cfeadf]",
      bg: "bg-[#f3fff7] text-[#42B883]",
    },
    {
      Icono: SiVite,
      etiqueta: "Vite",
      ring: "ring-[#dcdfff]",
      bg: "bg-[#f6f7ff] text-[#646CFF]",
    },
    {
      Icono: SiTailwindcss,
      etiqueta: "Tailwind CSS",
      ring: "ring-[#cfefff]",
      bg: "bg-[#f0fcff] text-[#06B6D4]",
    },
    {
      Icono: SiSwagger,
      etiqueta: "Swagger",
      ring: "ring-[#e2f6bf]",
      bg: "bg-[#f7ffea] text-[#85EA2D]",
    },
    {
      Icono: SiGit,
      etiqueta: "Git",
      ring: "ring-[#ffd7c8]",
      bg: "bg-[#fff5f1] text-[#F05032]",
    },
    {
      Icono: SiMysql,
      etiqueta: "MySQL",
      ring: "ring-[#cfe8f0]",
      bg: "bg-[#f4fbff] text-[#00758F]",
    },
  ];


  return (
    <div
      className="
        min-h-screen text-slate-900
        bg-[radial-gradient(60%_40%_at_50%_0%,rgba(255,182,193,0.25),transparent)]
        bg-gradient-to-b from-rose-50 via-rose-100/60 to-amber-50
      "
    >
      <Nav />

      <main role="main">
        <Hero />

        {/* Sección: Sobre mí */}
        <section
          id="sobre-mi"
          className="max-w-[1440px] mx-auto px-4 md:px-6 pt-10 pb-6"
        >
          <SectionTitle
            id="sobre-mi"
            icon={<UserCircle2 className="w-7 h-7 text-rose-600" />}
          >
            Sobre mí
          </SectionTitle>

          <div className="rounded-2xl p-[2px] bg-gradient-to-r from-rose-300/60 via-rose-200/55 to-amber-200/60">
            <div className="rounded-2xl bg-white/90 backdrop-blur-[2px] ring-1 ring-white/70 p-4 sm:p-6 md:p-7">
              {/* Chips con iconos*/}
              <div className="mb-4 -mx-1 px-1 overflow-x-auto">
                <div className="flex flex-nowrap gap-2 pb-2">
                  {CHIPS_SOBRE_MI.map(({ Icono, etiqueta, ring, bg }) => (
                    <span
                      key={etiqueta}
                      title={etiqueta}
                      className="
                        shrink-0 inline-flex items-center gap-2
                        rounded-full px-3 py-1.5
                        text-[12px] text-slate-800
                        bg-white/95
                        ring-1 ring-rose-200/70
                        shadow-sm
                        hover:shadow-md hover:-translate-y-[1px]
                        transition
                      "
                    >
                      <span
                        className={`
                          grid place-items-center
                          w-7 h-7 rounded-2xl
                          ring-1 ${ring}
                          ${bg}
                        `}
                        aria-hidden="true"
                      >
                        <Icono className="w-4 h-4" />
                      </span>
                      {etiqueta}
                    </span>
                  ))}
                </div>
              </div>

              {/* Texto*/}
              <div className="text-slate-700 leading-6 sm:leading-relaxed text-sm sm:text-[15px] space-y-3">
                <p>
                  Soy María Rosete Suárez, desarrolladora Full Stack Junior
                  especializada en .NET y React. Desarrollo APIs REST con
                  ASP.NET Core/.NET, documentadas con Swagger y con enfoque en
                  pruebas, y también tengo experiencia con Node.js.
                </p>

                <p>
                  En frontend diseño interfaces rápidas y accesibles con React +
                  Vite + Tailwind, y tengo experiencia adicional con Angular y
                  Vue.js. He trabajado en Clarcat Cantábrico S.L. (ASP.NET Core +
                  React + MySQL) y Ticmedia Soluciones Profesionales, S.L.
                  (Node.js + Vue.js + MongoDB), colaborando con Git y Azure
                  DevOps. En proyectos académicos como SkillTech (Spring Boot +
                  MySQL) y Asgard Gym (Android/Kotlin) apliqué buenas prácticas y
                  un enfoque orientado a producto.
                </p>

                <p>
                  Organizada y resolutiva, con atención al detalle, pensamiento
                  analítico y orientación al usuario. Busco un equipo donde
                  aportar desde el primer día y seguir creciendo como
                  profesional.
                </p>
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
      </main>

      <Footer />
    </div>
  );
}
