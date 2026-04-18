import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiAngular,
  SiVuedotjs,
  SiQuasar,
  SiNodedotjs,
  SiSpringboot,
  SiDotnet,
  SiExpress,
  SiKotlin,
  SiMysql,
  SiPostgresql,
  SiSqlite,
  SiOracle,
  SiMongodb,
  SiGit,
  SiGithub,
  SiDocker,
  SiPostman,
  SiSwagger,
  SiJunit5,
  SiVite,
  SiEslint,
  SiPrettier,
  SiWebpack,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { FaJava } from "react-icons/fa6";
import {
  Layers,
  Braces,
  Server,
  Monitor,
  Wrench,
  Sparkles,
  Cpu,
  Boxes,
} from "lucide-react";

type TechItem = {
  Icono: React.ElementType;
  etiqueta: string;
  ring: string;
  bg: string;
};

const Tecnologias: React.FC = () => {
  const LENGUAJES: TechItem[] = [
    {
      Icono: TbBrandCSharp,
      etiqueta: "C#",
      ring: "ring-[#cdebd6]",
      bg: "bg-[#f4fff6] text-[#239120]",
    },
    {
      Icono: SiTypescript,
      etiqueta: "TypeScript",
      ring: "ring-[#d9e9ff]",
      bg: "bg-[#f4f9ff] text-[#3178C6]",
    },
    {
      Icono: SiJavascript,
      etiqueta: "JavaScript",
      ring: "ring-[#ffefb3]",
      bg: "bg-[#fffbed] text-[#C8A500]",
    },
    {
      Icono: FaJava,
      etiqueta: "Java",
      ring: "ring-[#f5c7c7]",
      bg: "bg-[#fff5f5] text-[#EA2D2E]",
    },
    {
      Icono: SiKotlin,
      etiqueta: "Kotlin",
      ring: "ring-[#dacfff]",
      bg: "bg-[#f7f5ff] text-[#7F52FF]",
    },
    {
      Icono: SiHtml5,
      etiqueta: "HTML5",
      ring: "ring-[#ffdcd1]",
      bg: "bg-[#fff5f1] text-[#E34F26]",
    },
    {
      Icono: SiCss3,
      etiqueta: "CSS3",
      ring: "ring-[#dcecff]",
      bg: "bg-[#f6fbff] text-[#1572B6]",
    },
  ];

  const FRONTEND: TechItem[] = [
    {
      Icono: SiReact,
      etiqueta: "React",
      ring: "ring-[#cfefff]",
      bg: "bg-[#f0fcff] text-[#61DAFB]",
    },
    {
      Icono: SiAngular,
      etiqueta: "Angular",
      ring: "ring-[#ffd3d9]",
      bg: "bg-[#fff1f3] text-[#DD0031]",
    },
    {
      Icono: SiVuedotjs,
      etiqueta: "Vue.js",
      ring: "ring-[#cfeadf]",
      bg: "bg-[#f3fff7] text-[#42B883]",
    },
    {
      Icono: SiQuasar,
      etiqueta: "Quasar",
      ring: "ring-[#d7e8fb]",
      bg: "bg-[#f4f9ff] text-[#1976D2]",
    },
    {
      Icono: SiVite,
      etiqueta: "Vite",
      ring: "ring-[#dcdfff]",
      bg: "bg-[#f6f7ff] text-[#646CFF]",
    },
  ];

  const BACKEND: TechItem[] = [
    {
      Icono: SiDotnet,
      etiqueta: ".NET / ASP.NET",
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
      Icono: SiExpress,
      etiqueta: "Express",
      ring: "ring-slate-200",
      bg: "bg-white text-slate-900",
    },
    {
      Icono: SiSpringboot,
      etiqueta: "Spring Boot",
      ring: "ring-[#def5c2]",
      bg: "bg-[#f8fff0] text-[#6DB33F]",
    },
    {
      Icono: SiMysql,
      etiqueta: "MySQL",
      ring: "ring-[#cfe8f0]",
      bg: "bg-[#f4fbff] text-[#00758F]",
    },
    {
      Icono: SiPostgresql,
      etiqueta: "PostgreSQL",
      ring: "ring-[#d6ddfd]",
      bg: "bg-[#f5f7ff] text-[#4169E1]",
    },
    {
      Icono: SiSqlite,
      etiqueta: "SQLite",
      ring: "ring-[#cbdde8]",
      bg: "bg-[#f3f9ff] text-[#003B57]",
    },
    {
      Icono: SiOracle,
      etiqueta: "Oracle",
      ring: "ring-[#ffd0d0]",
      bg: "bg-[#fff5f5] text-[#F80000]",
    },
    {
      Icono: SiMongodb,
      etiqueta: "MongoDB",
      ring: "ring-[#cfead1]",
      bg: "bg-[#f3fff3] text-[#47A248]",
    },
  ];

  const HERRAMIENTAS: TechItem[] = [
    {
      Icono: SiGit,
      etiqueta: "Git",
      ring: "ring-[#ffd7c8]",
      bg: "bg-[#fff5f1] text-[#F05032]",
    },
    {
      Icono: SiGithub,
      etiqueta: "GitHub",
      ring: "ring-slate-200",
      bg: "bg-white text-[#181717]",
    },
    {
      Icono: SiDocker,
      etiqueta: "Docker",
      ring: "ring-[#cfe9ff]",
      bg: "bg-[#f4fbff] text-[#2496ED]",
    },
    {
      Icono: SiPostman,
      etiqueta: "Postman",
      ring: "ring-[#ffd9c9]",
      bg: "bg-[#fff5ef] text-[#FF6C37]",
    },
    {
      Icono: SiSwagger,
      etiqueta: "Swagger",
      ring: "ring-[#e2f6bf]",
      bg: "bg-[#f7ffea] text-[#85EA2D]",
    },
    {
      Icono: SiJunit5,
      etiqueta: "JUnit",
      ring: "ring-[#ffe6e2]",
      bg: "bg-[#fff7f5] text-[#EA2D2E]",
    },
    {
      Icono: SiEslint,
      etiqueta: "ESLint",
      ring: "ring-[#e3dcff]",
      bg: "bg-[#f6f5ff] text-[#4B32C3]",
    },
    {
      Icono: SiPrettier,
      etiqueta: "Prettier",
      ring: "ring-[#ffe9c4]",
      bg: "bg-[#fff9e9] text-[#F7B93E]",
    },
    {
      Icono: SiWebpack,
      etiqueta: "Webpack",
      ring: "ring-[#d9f1ff]",
      bg: "bg-[#f4fbff] text-[#8DD6F9]",
    },
  ];

  const DESTACADAS: TechItem[] = [
    {
      Icono: SiVuedotjs,
      etiqueta: "Vue.js",
      ring: "ring-[#cfeadf]",
      bg: "bg-[#f3fff7] text-[#42B883]",
    },
    {
      Icono: SiSpringboot,
      etiqueta: "Spring Boot",
      ring: "ring-[#def5c2]",
      bg: "bg-[#f8fff0] text-[#6DB33F]",
    },
    {
      Icono: SiAngular,
      etiqueta: "Angular",
      ring: "ring-[#cfe8f0]",
      bg: "bg-[#f4fbff] text-[#00758F]",
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
      Icono: SiDotnet,
      etiqueta: ".NET",
      ring: "ring-[#e1d6ff]",
      bg: "bg-[#f8f6ff] text-[#512BD4]",
    },

    {
      Icono: SiTypescript,
      etiqueta: "TypeScript",
      ring: "ring-[#d9e9ff]",
      bg: "bg-[#f4f9ff] text-[#3178C6]",
    },
    {
      Icono: SiMysql,
      etiqueta: "MySql",
      ring: "ring-[#cfe9ff]",
      bg: "bg-[#f4fbff] text-[#2496ED]",
    },
  ];

  const TechPill: React.FC<{ item: TechItem; compact?: boolean }> = ({
    item,
    compact = false,
  }) => {
    const { Icono, etiqueta, ring, bg } = item;

    return (
      <span
        className={[
          "inline-flex items-center gap-2 rounded-full whitespace-nowrap ring-1 transition-all duration-300",
          compact
            ? "px-2.5 py-1 text-[11px] font-medium"
            : "px-3 py-1.5 text-[12px] font-medium",
          ring,
          bg,
        ].join(" ")}
        title={etiqueta}
      >
        <span
          className={[
            "inline-flex items-center justify-center rounded-full bg-white/70 ring-1 ring-black/5",
            compact ? "h-5 w-5" : "h-6 w-6",
          ].join(" ")}
        >
          <Icono className={compact ? "h-3 w-3" : "h-3.5 w-3.5"} />
        </span>
        {etiqueta}
      </span>
    );
  };

  const PanelTitle: React.FC<{
    icon: React.ReactNode;
    children: React.ReactNode;
  }> = ({ icon, children }) => (
    <div className="flex items-center gap-3">
      <div className="grid h-11 w-11 place-items-center rounded-2xl border border-rose-500/20 bg-rose-500/10 text-rose-400">
        {icon}
      </div>
      <h3 className="text-lg sm:text-xl font-bold text-white">{children}</h3>
    </div>
  );

  const CategoryPanel: React.FC<{
    icon: React.ReactNode;
    title: React.ReactNode;
    description: string;
    items: TechItem[];
    tall?: boolean;
  }> = ({ icon, title, description, items, tall = false }) => (
    <div
      className={[
        "rounded-[28px] p-[1px] bg-gradient-to-br from-rose-500/16 via-fuchsia-500/8 to-amber-300/8 shadow-[0_16px_55px_-30px_rgba(0,0,0,0.65)]",
        tall ? "h-full" : "",
      ].join(" ")}
    >
      <div
        className={[
          "relative rounded-[28px] border border-white/10 bg-[#120b1f]/80 backdrop-blur-xl p-5 sm:p-6 overflow-hidden",
          tall ? "h-full" : "",
        ].join(" ")}
      >
        <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full border border-white/5 opacity-30" />
        <div className="absolute -bottom-10 -right-6 h-28 w-28 rounded-full border border-white/5 opacity-20" />

        <PanelTitle icon={icon}>{title}</PanelTitle>

        <p className="mt-4 text-white/58 text-sm sm:text-[15px] leading-7 max-w-xl">
          {description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {items.map((item) => (
            <TechPill key={item.etiqueta} item={item} compact />
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="tecnologias"
      className="relative max-w-[1440px] mx-auto px-4 md:px-6 pt-16 md:pt-24 pb-14 md:pb-20"
    >
      {/* Encabezado principal */}
      <div className="grid gap-8 xl:grid-cols-[1.1fr_0.9fr] items-start">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-rose-400 text-[11px] sm:text-xs uppercase tracking-[0.28em]">
            <Layers className="w-4 h-4" />
            <span>Stack tecnológico</span>
          </div>

          <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-black leading-[0.95] tracking-tight">
            <span className="text-white/82">Tecnología que</span>
            <span className="block bg-gradient-to-r from-rose-500 via-pink-500 to-fuchsia-600 bg-clip-text text-transparent">
              uso para construir
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-white/58 text-base sm:text-lg leading-8">
            Mi stack refleja cómo trabajo: interfaces cuidadas, backend sólido,
            bases de datos bien modeladas y herramientas que ayudan a construir,
            mantener y escalar producto.
          </p>
        </div>

        {/* Radar visual */}
        <div className="relative min-h-[360px] sm:min-h-[420px] rounded-[32px] p-[1px] bg-gradient-to-br from-rose-500/18 via-fuchsia-500/8 to-amber-300/8 shadow-[0_16px_55px_-30px_rgba(0,0,0,0.65)]">
          <div className="relative h-full min-h-[360px] sm:min-h-[420px] rounded-[32px] border border-white/10 bg-[#120b1f]/80 backdrop-blur-xl overflow-hidden">
            <div className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(244,63,94,0.18),rgba(244,63,94,0.08),transparent_70%)]" />
            <div className="absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />
            <div className="absolute left-1/2 top-1/2 h-[230px] w-[230px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />

            <div className="absolute left-1/2 top-1/2 h-[2px] w-[260px] -translate-x-1/2 -translate-y-1/2 bg-white/5" />
            <div className="absolute left-1/2 top-1/2 h-[260px] w-[2px] -translate-x-1/2 -translate-y-1/2 bg-white/5" />

            {/* nodo central */}
            <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
              <div className="rounded-2xl border border-rose-500/20 bg-[#170d22]/95 px-4 py-3 shadow-[0_18px_45px_-18px_rgba(244,63,94,.45)]">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-rose-500/12 text-rose-400 border border-rose-500/20">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.22em] text-white/40">
                      Núcleo técnico
                    </p>
                    <p className="text-white font-semibold">Frontend + Backend</p>
                  </div>
                </div>
              </div>
            </div>

            {/* pills flotantes */}
            <div className="absolute left-[8%] top-[16%]">
              <TechPill item={DESTACADAS[0]} />
            </div>
            <div className="absolute right-[10%] top-[14%]">
              <TechPill item={DESTACADAS[1]} />
            </div>
            <div className="absolute left-[8%] bottom-[20%]">
              <TechPill item={DESTACADAS[2]} />
            </div>
            <div className="absolute right-[10%] bottom-[18%]">
              <TechPill item={DESTACADAS[3]} />
            </div>
            <div className="absolute left-[22%] top-[52%]">
              <TechPill item={DESTACADAS[4]} />
            </div>
            <div className="absolute right-[18%] top-[52%]">
              <TechPill item={DESTACADAS[5]} />
            </div>
            <div className="absolute left-[30%] bottom-[8%]">
              <TechPill item={DESTACADAS[6]} />
            </div>
            <div className="absolute right-[24%] bottom-[8%]">
              <TechPill item={DESTACADAS[7]} />
            </div>
          </div>
        </div>
      </div>

      {/* Paneles */}
      <div className="mt-10 grid gap-6 xl:grid-cols-3">
        <CategoryPanel
          icon={<Braces className="w-5 h-5" />}
          title="Lenguajes"
          description="Lenguajes con los que construyo lógica, estructura y experiencia de usuario en distintos entornos."
          items={LENGUAJES}
        />

        <CategoryPanel
          icon={<Monitor className="w-5 h-5" />}
          title="Frontend"
          description="Frameworks y librerías para crear interfaces rápidas, mantenibles y enfocadas en usabilidad."
          items={FRONTEND}
        />

        <CategoryPanel
          icon={<Server className="w-5 h-5" />}
          title="Backend & BBDD"
          description="Tecnologías orientadas a APIs, lógica de negocio, persistencia y modelado de datos."
          items={BACKEND}
        />
      </div>

      {/* Segunda fila */}
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <CategoryPanel
          icon={<Wrench className="w-5 h-5" />}
          title="Herramientas & calidad"
          description="Herramientas que utilizo para versionado, testing, documentación y automatización del desarrollo."
          items={HERRAMIENTAS}
          tall
        />

        <CategoryPanel
          icon={<Sparkles className="w-5 h-5" />}
          title="Soft Skills"
          description="Habilidades que aplico en proyectos reales para trabajar mejor en equipo, organizar el desarrollo y aportar soluciones de calidad."
          items={[
            {
              Icono: Boxes,
              etiqueta: "Organización",
              ring: "ring-[#d9e9ff]",
              bg: "bg-[#f4f9ff] text-[#3178C6]",
            },
            {
              Icono: Boxes,
              etiqueta: "Trabajo en equipo",
              ring: "ring-[#ffd7c8]",
              bg: "bg-[#fff5f1] text-[#F05032]",
            },
            {
              Icono: Boxes,
              etiqueta: "Pensamineto analítico",
              ring: "ring-[#e2f6bf]",
              bg: "bg-[#f7ffea] text-[#65a30d]",
            },
            {
              Icono: Boxes,
              etiqueta: "Resolución de problemas",
              ring: "ring-[#ffe6e2]",
              bg: "bg-[#fff7f5] text-[#EA2D2E]",
            },
            {
              Icono: Boxes,
              etiqueta: "Atención al detalle",
              ring: "ring-[#ffe9c4]",
              bg: "bg-[#fff9e9] text-[#F59E0B]",
            },
            {
              Icono: Boxes,
              etiqueta: "Adaptabilidad",
              ring: "ring-[#cfe9ff]",
              bg: "bg-[#f4fbff] text-[#2496ED]",
            },
            {
              Icono: Boxes,
              etiqueta: "Orientación al usuario",
              ring: "ring-[#ffe9c4]",
              bg: "bg-[#fff9e9] text-[#F59E0B]",
            },
          ]}
          tall
        />
      </div>
    </section>
  );
};

export default Tecnologias;