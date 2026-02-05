import React from "react";
import SectionTitle from "./ui/SectionTitle";
import Tile from "./ui/Tile";
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
import { Layers, Braces, Server, Monitor, Database, Wrench } from "lucide-react";

/**
 * Sección "Tecnologías":
 * - Muestra el stack por categorías (lenguajes, frameworks backend/frontend, BBDD, herramientas)
 */
const Tecnologias: React.FC = () => {
  // Lenguajes (core primero)
  const LENGUAJES = [
    { Icono: TbBrandCSharp, etiqueta: "C#", ring: "ring-[#cdebd6]", bg: "bg-[#f4fff6] text-[#239120]" },
    { Icono: SiTypescript, etiqueta: "TypeScript", ring: "ring-[#d9e9ff]", bg: "bg-[#f4f9ff] text-[#3178C6]" },
    { Icono: SiJavascript, etiqueta: "JavaScript", ring: "ring-[#ffefb3]", bg: "bg-[#fffbed] text-[#F7DF1E]" },
    { Icono: FaJava, etiqueta: "Java", ring: "ring-[#f5c7c7]", bg: "bg-[#fff5f5] text-[#EA2D2E]" },
    { Icono: SiKotlin, etiqueta: "Kotlin", ring: "ring-[#dacfff]", bg: "bg-[#f7f5ff] text-[#7F52FF]" },
    { Icono: SiHtml5, etiqueta: "HTML5", ring: "ring-[#ffdcd1]", bg: "bg-[#fff5f1] text-[#E34F26]" },
    { Icono: SiCss3, etiqueta: "CSS3", ring: "ring-[#dcecff]", bg: "bg-[#f6fbff] text-[#1572B6]" },
  ];

  // Frameworks Backend
  const FRAMEWORKS_BACKEND = [
    { Icono: SiDotnet, etiqueta: ".NET / ASP.NET", ring: "ring-[#e1d6ff]", bg: "bg-[#f8f6ff] text-[#512BD4]" },
    { Icono: SiNodedotjs, etiqueta: "Node.js", ring: "ring-[#d5f0d1]", bg: "bg-[#f6fff6] text-[#339933]" },
    { Icono: SiExpress, etiqueta: "Express", ring: "ring-slate-200", bg: "bg-white text-slate-900" },
    { Icono: SiSpringboot, etiqueta: "Spring Boot", ring: "ring-[#def5c2]", bg: "bg-[#f8fff0] text-[#6DB33F]" },
  ];

  // Frameworks Frontend
  const FRAMEWORKS_FRONTEND = [
    { Icono: SiReact, etiqueta: "React", ring: "ring-[#cfefff]", bg: "bg-[#f0fcff] text-[#61DAFB]" },
    { Icono: SiAngular, etiqueta: "Angular", ring: "ring-[#ffd3d9]", bg: "bg-[#fff1f3] text-[#DD0031]" },
    { Icono: SiVuedotjs, etiqueta: "Vue.js", ring: "ring-[#cfeadf]", bg: "bg-[#f3fff7] text-[#42B883]" },
    { Icono: SiQuasar, etiqueta: "Quasar", ring: "ring-[#d7e8fb]", bg: "bg-[#f4f9ff] text-[#1976D2]" },
  ];

  // Bases de datos
  const BASES_DATOS_SQL = [
    { Icono: Database, etiqueta: "SQL Server", ring: "ring-[#ffd0d0]", bg: "bg-[#fff5f5] text-[#CC2927]" },
    { Icono: SiMysql, etiqueta: "MySQL", ring: "ring-[#cfe8f0]", bg: "bg-[#f4fbff] text-[#00758F]" },
    { Icono: SiPostgresql, etiqueta: "PostgreSQL", ring: "ring-[#d6ddfd]", bg: "bg-[#f5f7ff] text-[#4169E1]" },
    { Icono: SiOracle, etiqueta: "Oracle", ring: "ring-[#ffd0d0]", bg: "bg-[#fff5f5] text-[#F80000]" },
    { Icono: SiSqlite, etiqueta: "SQLite", ring: "ring-[#cbdde8]", bg: "bg-[#f3f9ff] text-[#003B57]" },
  ];


  const BASES_DATOS_NOSQL = [
    { Icono: SiMongodb, etiqueta: "MongoDB", ring: "ring-[#cfead1]", bg: "bg-[#f3fff3] text-[#47A248]" },
  ];

  // Herramientas
  const HERRAMIENTAS = [
    { Icono: SiGit, etiqueta: "Git", ring: "ring-[#ffd7c8]", bg: "bg-[#fff5f1] text-[#F05032]" },
    { Icono: SiGithub, etiqueta: "GitHub", ring: "ring-slate-200", bg: "bg-white text-[#181717]" },
    { Icono: SiDocker, etiqueta: "Docker", ring: "ring-[#cfe9ff]", bg: "bg-[#f4fbff] text-[#2496ED]" },
    { Icono: SiPostman, etiqueta: "Postman", ring: "ring-[#ffd9c9]", bg: "bg-[#fff5ef] text-[#FF6C37]" },
    { Icono: SiSwagger, etiqueta: "Swagger", ring: "ring-[#e2f6bf]", bg: "bg-[#f7ffea] text-[#85EA2D]" },
    { Icono: SiJunit5, etiqueta: "JUnit", ring: "ring-[#ffe6e2]", bg: "bg-[#fff7f5] text-[#EA2D2E]" },
    { Icono: SiVite, etiqueta: "Vite", ring: "ring-[#dcdfff]", bg: "bg-[#f6f7ff] text-[#646CFF]" },
    { Icono: SiEslint, etiqueta: "ESLint", ring: "ring-[#e3dcff]", bg: "bg-[#f6f5ff] text-[#4B32C3]" },
    { Icono: SiPrettier, etiqueta: "Prettier", ring: "ring-[#ffe9c4]", bg: "bg-[#fff9e9] text-[#F7B93E]" },
    { Icono: SiWebpack, etiqueta: "Webpack", ring: "ring-[#d9f1ff]", bg: "bg-[#f4fbff] text-[#8DD6F9]" },
  ];

  type Item = { Icono: any; etiqueta: string; ring: string; bg: string };

  const Grid: React.FC<{ items: Item[] }> = ({ items }) => (
    <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {items.map(({ Icono, etiqueta, ring, bg }) => (
        <Tile key={etiqueta} Icon={Icono} label={etiqueta} ring={ring} bg={bg} />
      ))}
    </div>
  );

  const BlockTitle: React.FC<{ icon: React.ReactNode; children: React.ReactNode }> = ({ icon, children }) => (
    <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1">
      <span className="text-slate-600">{icon}</span>
      <h4 className="text-[11px] font-semibold tracking-wider text-slate-600 uppercase">{children}</h4>
    </div>
  );

  const CategoryCard: React.FC<{ title: React.ReactNode; children: React.ReactNode }> = ({ title, children }) => (
    <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50/60 p-5">
      {title}
      {children}
    </div>
  );

  return (
    <section id="tecnologias" className="scroll-mt-20 max-w-[1440px] mx-auto px-4 md:px-6 pt-10 pb-6">
      <SectionTitle id="tecnologias" icon={<Layers className="w-7 h-7 text-rose-600" />}>
        Stack tecnológico
      </SectionTitle>

      {/* Tarjeta principal */}
      <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-10 shadow-sm">
        <h3 className="text-sm font-semibold tracking-wider text-slate-500">TECNOLOGÍAS</h3>

        <CategoryCard title={<BlockTitle icon={<Braces className="w-4 h-4" />}>Lenguajes</BlockTitle>}>
          <Grid items={LENGUAJES} />
        </CategoryCard>

        <CategoryCard title={<BlockTitle icon={<Server className="w-4 h-4" />}>Frameworks · Backend</BlockTitle>}>
          <Grid items={FRAMEWORKS_BACKEND} />
        </CategoryCard>

        <CategoryCard title={<BlockTitle icon={<Monitor className="w-4 h-4" />}>Frameworks · Frontend</BlockTitle>}>
          <Grid items={FRAMEWORKS_FRONTEND} />
        </CategoryCard>

        <CategoryCard title={<BlockTitle icon={<Database className="w-4 h-4" />}>Bases de datos · SQL</BlockTitle>}>
          <Grid items={BASES_DATOS_SQL} />
        </CategoryCard>

        <CategoryCard title={<BlockTitle icon={<Database className="w-4 h-4" />}>Bases de datos · NoSQL</BlockTitle>}>
          <Grid items={BASES_DATOS_NOSQL} />
        </CategoryCard>

        <hr className="my-10 border-slate-200" />

        <h3 className="text-sm font-semibold tracking-wider text-slate-500">HERRAMIENTAS</h3>

        <CategoryCard title={<BlockTitle icon={<Wrench className="w-4 h-4" />}>Tooling</BlockTitle>}>
          <Grid items={HERRAMIENTAS} />
        </CategoryCard>
      </div>
    </section>
  );
};

export default Tecnologias;
