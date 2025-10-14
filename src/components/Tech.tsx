import React from "react";
import SectionTitle from "./ui/SectionTitle";
import Tile from "./ui/Tile";
import {
  SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiAngular, SiVuedotjs,
  SiQuasar, SiTailwindcss, SiNodedotjs, SiSpringboot, SiDotnet, SiExpress, SiKotlin,
  SiMysql, SiPostgresql, SiSqlite, SiOracle, SiMongodb, SiGit, SiGithub, SiDocker,
  SiPostman, SiSwagger, SiJunit5, SiVite, SiEslint, SiPrettier, SiWebpack,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { FaJava } from "react-icons/fa6";

const Tech: React.FC = () => {
  const TECNOLOGIAS = [
    { Icon: SiHtml5, label: "HTML5", ring: "ring-[#ffdcd1]", bg: "bg-[#fff5f1] text-[#E34F26]" },
    { Icon: SiCss3, label: "CSS3", ring: "ring-[#dcecff]", bg: "bg-[#f6fbff] text-[#1572B6]" },
    { Icon: SiJavascript, label: "JavaScript", ring: "ring-[#ffefb3]", bg: "bg-[#fffbed] text-[#F7DF1E]" },
    { Icon: SiTypescript, label: "TypeScript", ring: "ring-[#d9e9ff]", bg: "bg-[#f4f9ff] text-[#3178C6]" },
    { Icon: FaJava, label: "Java", ring: "ring-[#f5c7c7]", bg: "bg-[#fff5f5] text-[#EA2D2E]" },
    { Icon: TbBrandCSharp, label: "C#", ring: "ring-[#cdebd6]", bg: "bg-[#f4fff6] text-[#239120]" },
    { Icon: SiNodedotjs, label: "Node.js", ring: "ring-[#d5f0d1]", bg: "bg-[#f6fff6] text-[#339933]" },
    { Icon: SiExpress, label: "Express", ring: "ring-slate-200", bg: "bg-white text-slate-900" },
    { Icon: SiSpringboot, label: "Spring Boot", ring: "ring-[#def5c2]", bg: "bg-[#f8fff0] text-[#6DB33F]" },
    { Icon: SiDotnet, label: ".NET / ASP.NET", ring: "ring-[#e1d6ff]", bg: "bg-[#f8f6ff] text-[#512BD4]" },
    { Icon: SiReact, label: "React", ring: "ring-[#cfefff]", bg: "bg-[#f0fcff] text-[#61DAFB]" },
    { Icon: SiAngular, label: "Angular", ring: "ring-[#ffd3d9]", bg: "bg-[#fff1f3] text-[#DD0031]" },
    { Icon: SiVuedotjs, label: "Vue.js", ring: "ring-[#cfeadf]", bg: "bg-[#f3fff7] text-[#42B883]" },
    { Icon: SiQuasar, label: "Quasar", ring: "ring-[#d7e8fb]", bg: "bg-[#f4f9ff] text-[#1976D2]" },
    { Icon: SiTailwindcss, label: "Tailwind", ring: "ring-[#bfeff6]", bg: "bg-[#e7fcff] text-[#06B6D4]" },
    { Icon: SiKotlin, label: "Kotlin", ring: "ring-[#dacfff]", bg: "bg-[#f7f5ff] text-[#7F52FF]" },
    { Icon: SiMysql, label: "MySQL", ring: "ring-[#cfe8f0]", bg: "bg-[#f4fbff] text-[#00758F]" },
    { Icon: SiPostgresql, label: "PostgreSQL", ring: "ring-[#d6ddfd]", bg: "bg-[#f5f7ff] text-[#4169E1]" },
    { Icon: SiSqlite, label: "SQLite", ring: "ring-[#cbdde8]", bg: "bg-[#f3f9ff] text-[#003B57]" },
    { Icon: SiOracle, label: "Oracle", ring: "ring-[#ffd0d0]", bg: "bg-[#fff5f5] text-[#F80000]" },
    { Icon: SiMongodb, label: "MongoDB", ring: "ring-[#cfead1]", bg: "bg-[#f3fff3] text-[#47A248]" },
  ];

  const HERRAMIENTAS = [
    { Icon: SiGit, label: "Git", ring: "ring-[#ffd7c8]", bg: "bg-[#fff5f1] text-[#F05032]" },
    { Icon: SiGithub, label: "GitHub", ring: "ring-slate-200", bg: "bg-white text-[#181717]" },
    { Icon: SiDocker, label: "Docker", ring: "ring-[#cfe9ff]", bg: "bg-[#f4fbff] text-[#2496ED]" },
    { Icon: SiPostman, label: "Postman", ring: "ring-[#ffd9c9]", bg: "bg-[#fff5ef] text-[#FF6C37]" },
    { Icon: SiSwagger, label: "Swagger", ring: "ring-[#e2f6bf]", bg: "bg-[#f7ffea] text-[#85EA2D]" },
    { Icon: SiJunit5, label: "JUnit", ring: "ring-[#ffe6e2]", bg: "bg-[#fff7f5] text-[#EA2D2E]" },
    { Icon: SiVite, label: "Vite", ring: "ring-[#dcdfff]", bg: "bg-[#f6f7ff] text-[#646CFF]" },
    { Icon: SiEslint, label: "ESLint", ring: "ring-[#e3dcff]", bg: "bg-[#f6f5ff] text-[#4B32C3]" },
    { Icon: SiPrettier, label: "Prettier", ring: "ring-[#ffe9c4]", bg: "bg-[#fff9e9] text-[#F7B93E]" },
    { Icon: SiWebpack, label: "Webpack", ring: "ring-[#d9f1ff]", bg: "bg-[#f4fbff] text-[#8DD6F9]" },
  ];

  return (
    <section id="tecnologias" className="scroll-mt-20 max-w-[1440px] mx-auto px-4 md:px-6 pt-10 pb-6">
      <SectionTitle id="tecnologias">Stack tecnológico</SectionTitle>
      <div className="rounded-3xl border bg-white p-6 md:p-10">
        <h3 className="text-sm font-semibold tracking-wider text-slate-500">TECNOLOGÍAS</h3>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {TECNOLOGIAS.map(({ Icon, label, ring, bg }) => <Tile key={label} Icon={Icon} label={label} ring={ring} bg={bg} />)}
        </div>

        <hr className="my-10 border-slate-200" />

        <h3 className="text-sm font-semibold tracking-wider text-slate-500">HERRAMIENTAS</h3>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {HERRAMIENTAS.map(({ Icon, label, ring, bg }) => <Tile key={label} Icon={Icon} label={label} ring={ring} bg={bg} />)}
        </div>
      </div>
    </section>
  );
};

export default Tech;
