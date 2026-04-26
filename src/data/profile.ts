import pokedexBanner from "../assets/Pokedex.jpg";
import servidor from "../assets/Servidor Archivos.jpg";
import asgard from "../assets/ASGARD GYM.jpg";
import skilltech from "../assets/SkillTech.jpg";
import agenda from "../assets/Agenda.jpg";
import portafolio from "../assets/Portafolio.jpg";
import pasteleria from "../assets/pasteleriaCreativa.jpg";
import flowDocument from "../assets/pasteleria.jpg";
import disney from "../assets/disney.jpg";
import pizarra from "../assets/pizarra.jpg";
import portada from "../assets/MRS.png";
import skillTechVideo from "../assets/skillTech.mp4";
import pasteleriaVideo from "../assets/pasteleria.mp4";
import asgardGym from "../assets/AsgardGym.mp4";
import servidorVideo from "../assets/Servidor.mp4";
import flowDocumentVideo from "../assets/flowDocument.mp4";
import type { IconType } from "react-icons";


import {
  SiDotnet,
  SiReact,
  SiVite,
  SiTailwindcss,
  SiMysql,
  SiGit,
  SiSwagger,
  SiNodedotjs,
  SiExpress,
  SiVuedotjs,
  SiMongodb,
  SiGithub,
  SiJsonwebtokens,
  SiQuasar,
  SiAndroid,
  SiSqlite,
  SiSpringboot,
  SiAngular,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

import { TbBrandCSharp } from "react-icons/tb";
import { FaJava } from "react-icons/fa6";

export type FitMode = "cover" | "contain";
export type ModoAjuste = FitMode;

export type Project = {
  title: string;
  banner: string;
  repo: string;
  description: string;
  tech: string[];
  fit?: FitMode;
  position?: string;
  award?: string;
  demo?: string;
  demoType?: "live" | "video";
  note?: string;
};
export type Proyecto = Project;

// ─────────────────────────────────────────────────────────────
// Chips con iconos (para Experiencia / Proyectos)
// ─────────────────────────────────────────────────────────────
export type TechBadgeCfg = {
  Icono: IconType;
  ring: string;
  bg: string;
};

export const TECH_BADGE_MAP: Record<string, TechBadgeCfg> = {
  // Clarcat
  ".NET 9": {
    Icono: SiDotnet,
    ring: "ring-[#e1d6ff]",
    bg: "bg-[#f8f6ff] text-[#512BD4]",
  },
  "ASP.NET Core": {
    Icono: SiDotnet,
    ring: "ring-[#e1d6ff]",
    bg: "bg-[#f8f6ff] text-[#512BD4]",
  },
  "Entity Framework": {
    Icono: SiDotnet,
    ring: "ring-[#e1d6ff]",
    bg: "bg-[#f8f6ff] text-[#512BD4]",
  },
  MySQL: {
    Icono: SiMysql,
    ring: "ring-[#cfe8f0]",
    bg: "bg-[#f4fbff] text-[#00758F]",
  },
  React: {
    Icono: SiReact,
    ring: "ring-[#cfefff]",
    bg: "bg-[#f0fcff] text-[#61DAFB]",
  },
  Vite: {
    Icono: SiVite,
    ring: "ring-[#dcdfff]",
    bg: "bg-[#f6f7ff] text-[#646CFF]",
  },
  "Tailwind CSS": {
    Icono: SiTailwindcss,
    ring: "ring-[#cfefff]",
    bg: "bg-[#f0fcff] text-[#06B6D4]",
  },
  Swagger: {
    Icono: SiSwagger,
    ring: "ring-[#e2f6bf]",
    bg: "bg-[#f7ffea] text-[#85EA2D]",
  },
  Git: {
    Icono: SiGit,
    ring: "ring-[#ffd7c8]",
    bg: "bg-[#fff5f1] text-[#F05032]",
  },

  // Ticmedia
  "Node.js": {
    Icono: SiNodedotjs,
    ring: "ring-[#d5f0d1]",
    bg: "bg-[#f6fff6] text-[#339933]",
  },
  Express: {
    Icono: SiExpress,
    ring: "ring-slate-200",
    bg: "bg-white text-slate-900",
  },
  JWT: {
    Icono: SiJsonwebtokens,
    ring: "ring-[#ffe6e2]",
    bg: "bg-[#fff7f5] text-[#EA2D2E]",
  },
  "Vue.js": {
    Icono: SiVuedotjs,
    ring: "ring-[#cfeadf]",
    bg: "bg-[#f3fff7] text-[#42B883]",
  },
  Quasar: {
    Icono: SiQuasar,
    ring: "ring-[#d7e8fb]",
    bg: "bg-[#f4f9ff] text-[#1976D2]",
  },
  MongoDB: {
    Icono: SiMongodb,
    ring: "ring-[#cfead1]",
    bg: "bg-[#f3fff3] text-[#47A248]",
  },
  Mongoose: {
    Icono: SiMongodb,
    ring: "ring-[#cfead1]",
    bg: "bg-[#f3fff3] text-[#47A248]",
  },
  GitHub: {
    Icono: SiGithub,
    ring: "ring-slate-200",
    bg: "bg-white text-[#181717]",
  }
  
};

// ─────────────────────────────────────────────────────────────
// Chips con iconos (para Proyectos)
// ─────────────────────────────────────────────────────────────
export const PROJECT_BADGE_MAP: Record<string, TechBadgeCfg> = {
  Kotlin: {
    Icono: SiAndroid,
    ring: "ring-[#dacfff]",
    bg: "bg-[#f7f5ff] text-[#7F52FF]",
  },
  SQLite: {
    Icono: SiSqlite,
    ring: "ring-[#cbdde8]",
    bg: "bg-[#f3f9ff] text-[#003B57]",
  },
  "Material Design": {
    Icono: SiAndroid,
    ring: "ring-[#dcecff]",
    bg: "bg-[#f6fbff] text-[#3DDC84]",
  },

  Java: {
    Icono: FaJava as unknown as IconType,
    ring: "ring-[#f5c7c7]",
    bg: "bg-[#fff5f5] text-[#EA2D2E]",
  },
  Swing: {
    Icono: FaJava as unknown as IconType,
    ring: "ring-[#f5c7c7]",
    bg: "bg-[#fff5f5] text-[#EA2D2E]",
  },
  JavaHelp: {
    Icono: FaJava as unknown as IconType,
    ring: "ring-[#f5c7c7]",
    bg: "bg-[#fff5f5] text-[#EA2D2E]",
  },

  "Spring Boot": {
    Icono: SiSpringboot,
    ring: "ring-[#def5c2]",
    bg: "bg-[#f8fff0] text-[#6DB33F]",
  },

  Angular: {
    Icono: SiAngular,
    ring: "ring-[#ffd3d9]",
    bg: "bg-[#fff1f3] text-[#DD0031]",
  },
  NgRx: {
    Icono: SiAngular,
    ring: "ring-[#ffd3d9]",
    bg: "bg-[#fff1f3] text-[#DD0031]",
  },
  RxJS: {
    Icono: SiAngular,
    ring: "ring-[#ffd3d9]",
    bg: "bg-[#fff1f3] text-[#DD0031]",
  },
  "Angular Material": {
    Icono: SiAngular,
    ring: "ring-[#ffd3d9]",
    bg: "bg-[#fff1f3] text-[#DD0031]",
  },

  TypeScript: {
    Icono: SiTypescript,
    ring: "ring-[#d9e9ff]",
    bg: "bg-[#f4f9ff] text-[#3178C6]",
  },

  JavaScript: {
    Icono: SiJavascript,
    ring: "ring-[#ffefb3]",
    bg: "bg-[#fffbed] text-[#F7DF1E]",
  },
  HTML: {
    Icono: SiHtml5,
    ring: "ring-[#ffdcd1]",
    bg: "bg-[#fff5f1] text-[#E34F26]",
  },
  HTML5: {
    Icono: SiHtml5,
    ring: "ring-[#ffdcd1]",
    bg: "bg-[#fff5f1] text-[#E34F26]",
  },
  CSS: {
    Icono: SiCss3,
    ring: "ring-[#dcecff]",
    bg: "bg-[#f6fbff] text-[#1572B6]",
  },
  CSS3: {
    Icono: SiCss3,
    ring: "ring-[#dcecff]",
    bg: "bg-[#f6fbff] text-[#1572B6]",
  },

  "C#": {
    Icono: TbBrandCSharp as unknown as IconType,
    ring: "ring-[#cdebd6]",
    bg: "bg-[#f4fff6] text-[#239120]",
  },
  ".NET": {
    Icono: SiDotnet,
    ring: "ring-[#e1d6ff]",
    bg: "bg-[#f8f6ff] text-[#512BD4]",
  },

  // Reutiliza los del mapa base
  React: TECH_BADGE_MAP.React,
  Vite: TECH_BADGE_MAP.Vite,
  "TailwindCSS": TECH_BADGE_MAP["Tailwind CSS"],
  "Tailwind CSS": TECH_BADGE_MAP["Tailwind CSS"],
  Git: TECH_BADGE_MAP.Git,
  MySQL: TECH_BADGE_MAP.MySQL,
  JWT: TECH_BADGE_MAP.JWT,

  "JS/HTML/CSS": {
    Icono: SiJavascript,
    ring: "ring-[#ffefb3]",
    bg: "bg-[#fffbed] text-[#F7DF1E]",
  },
};

export const getTechBadge = (tech: string): TechBadgeCfg | null =>
  PROJECT_BADGE_MAP[tech] ?? TECH_BADGE_MAP[tech] ?? null;

// ─────────────────────────────────────────────────────────────
// Perfil (datos generales)
// ─────────────────────────────────────────────────────────────
export const PERFIL = {
  name: "María Rosete",
  role: "Desarrolladora backend .NET / Spring Boot con perfil full stack.",
  about:
    "Me centro en el desarrollo de APIs REST y aplicaciones web, cuidando la claridad del código, la mantenibilidad y las buenas prácticas. Además, tengo experiencia en frontend con React, Vue.js y Angular, lo que me permite tener una visión global del desarrollo de aplicaciones web.",
  photo: portada,
  socials: {
    email: "mailto:marlarosete89@gmail.com",
    linkedin: "https://linkedin.com/in/mariarosetesuarez",
    github: "https://github.com/mariarosete",
  },
  cv: "https://github.com/mariarosete/mariarosete/raw/main/assets/cv/CV_MRS.pdf",
};

export const PROFILE = PERFIL;

// ─────────────────────────────────────────────────────────────
// Logos de certificaciones
// ─────────────────────────────────────────────────────────────
const RUTA_LOGOS_CERT =
  "https://github.com/mariarosete/mariarosete/blob/main/assets/certifications/";
const logoCert = (file: string) => `${RUTA_LOGOS_CERT}${file}?raw=true`;

export const LOGO_CERT = {
  openwebinars: logoCert("openwebinars.png"),
  sap: logoCert("sap.png"),
  coursera: logoCert("coursera.png"),
  ecdl: logoCert("ecdl.png"),
  asata: logoCert("asata.png"),
  dicampus: logoCert("dicampus.png"),
  salesforce: logoCert("salesforce.png"),
  freecodecamp: logoCert("freecodecamp.png"),
  servicenow: logoCert("ServiceNow.avif"),
};
export const CERT_LOGO = LOGO_CERT;

// ─────────────────────────────────────────────────────────────
// Educación
// ─────────────────────────────────────────────────────────────
export const EDUCACION = [
  {
    title: "CFGS Desarrollo de Aplicaciones Multiplataforma",
    center: "IES Número 1 Gijón",
    period: "sept. 2024 – jun. 2025",
  },
  {
    title: "CFGS Desarrollo de Aplicaciones Web",
    center: "CIFP La Laboral",
    period: "sept. 2022 – jun. 2024",
  },
  {
    title: "CFGS Administración de Sistemas Informáticos",
    center: "IES Número 1 Gijón",
    period: "sept. 2009 – jun. 2011",
  },
];
export const EDUCATION = EDUCACION;

// ─────────────────────────────────────────────────────────────
// Certificados
// ─────────────────────────────────────────────────────────────
export type Certificado = {
  title: string;
  org: string;
  date: string;
  link?: string;
  logo?: string;
  credId?: string;
  online?: boolean;
};
export const CERTIFICADOS: Certificado[] = [
  {
    title: "Micro-Certification – Welcome to ServiceNow",
    org: "ServiceNow",
    date: "Feb. 2026",
    link: "https://www.linkedin.com/in/mariarosetesuarez/overlay/1771586252483/single-media-viewer/?profileId=ACoAAEr-PaoBY5xohXS4VTc50eGRdX1PM-ImnOo",
    logo: LOGO_CERT.servicenow,
    online: true,
  },
  {
    title: "Foundational C# with Microsoft",
    org: "freeCodeCamp",
    date: "Dic. 2025",
    link: "https://freecodecamp.org/certification/fcc-8f71be83-65d7-40d2-95e3-e4bca09cd50a/foundational-c-sharp-with-microsoft",
    logo: LOGO_CERT.freecodecamp,
    online: true,
  },
  {
    title: "Curso de Angular: Ampliando Conceptos",
    org: "OpenWebinars",
    date: "Jul. 2025",
    link: "https://openwebinars.net/cert/62se",
    logo: LOGO_CERT.openwebinars,
    online: true,
  },
  {
    title: ".NET Framework",
    org: "OpenWebinars",
    date: "Jul. 2025",
    link: "https://openwebinars.net/cert/lWvO",
    logo: LOGO_CERT.openwebinars,
    online: true,
  },
  {
    title: "Fundamentos de React",
    org: "OpenWebinars",
    date: "Jul. 2025",
    link: "https://openwebinars.net/cert/q9Yr",
    logo: LOGO_CERT.openwebinars,
    online: true,
  },
  {
    title: "MongoDB: Creación y gestión de bases de datos NoSQL",
    org: "OpenWebinars",
    date: "Mar. 2025",
    link: "https://openwebinars.net/certificacion/0QCj1YwR",
    logo: LOGO_CERT.openwebinars,
    online: true,
  },
  {
    title: "Learning the Basics of ABAP Programming on SAP BTP",
    org: "SAP",
    date: "Ene. 2025",
    link: "https://www.credly.com/badges/0d749aff-8745-4737-abb0-90058a1ca0bb",
    logo: LOGO_CERT.sap,
    online: true,
  },
  {
    title: "Perfil Trailhead de Salesforce – Insignias y Rutas",
    org: "Salesforce",
    date: "Ene. 2025",
    link: "https://www.salesforce.com/trailblazer/dvpl9jhprurtdm3g7i",
    logo: LOGO_CERT.salesforce,
    online: true,
  },
  {
    title: "Servidor Web Apache 2.4",
    org: "OpenWebinars",
    date: "Nov. 2023",
    link: "https://openwebinars.net/cert/PuCz",
    logo: LOGO_CERT.openwebinars,
    online: true,
  },
  {
    title: "Soporte de Tecnologías de la Información de Google",
    org: "Coursera",
    date: "Ago. 2022",
    link: "https://www.coursera.org/account/accomplishments/professional-cert/WU7LEUWZ8FLE",
    logo: LOGO_CERT.coursera,
    online: true,
  },
  {
    title: "Certificado de profesionalidad de Seguridad Informática",
    org: "ASATA",
    date: "Dic. 2018",
    credId: "03/18/00004962/IFCT0109",
    logo: LOGO_CERT.asata,
    online: false,
  },
  {
    title: "Acreditación de competencias digitales europeas ECDL",
    org: "ECDL Spain",
    date: "Dic. 2017",
    credId: "ES004660",
    logo: LOGO_CERT.ecdl,
    online: false,
  },
  {
    title: "Seguridad Informática en la Gestión Empresarial",
    org: "Dicampus",
    date: "2017",
    credId: "PLF 2017/165",
    logo: LOGO_CERT.dicampus,
    online: false,
  },
];
export const CERTS = CERTIFICADOS;

// ─────────────────────────────────────────────────────────────
// Experiencia profesional
// ─────────────────────────────────────────────────────────────
export const EXPERIENCIA = [
  {
    company: "Clarcat Cantábrico S.L. Gijón",
    role: "Desarrollo backend con .NET / ASP.NET Core + React",
    period: "mar. 2025 – jun. 2025",
    techs: [
      ".NET 9",
      "ASP.NET Core",
      "Entity Framework",
      "MySQL",
      "React",
      "Vite",
      "Tailwind CSS",
      "Git",
    ],
    points: [
      "Backend: Diseñé, desarrollé y optimicé una API REST en .NET 9 / ASP.NET Core, asegurando escalabilidad, mantenibilidad y buenas prácticas.",
      "Frontend: Implementé interfaces modernas y responsive con React, Vite y Tailwind CSS, mejorando la usabilidad y la experiencia de usuario.",
    ],
  },
  {
    company: "Ticmedia Soluciones Profesionales, S.L. Gijón",
    role: "Desarrollo backend con Node.js + Vue.js",
    period: "mar. 2024 – jun. 2024",
    techs: ["Node.js", "Express", "JWT", "Vue.js", "Quasar", "MongoDB", "Mongoose", "GitHub"],
    points: [
      "Backend: Desarrollé una API REST con Node.js y Express, implementando autenticación JWT para un sistema de gestión interna.",
      "Frontend: Construí una interfaz dinámica y modular con Vue.js y Quasar Framework, optimizando la experiencia de usuario y mejorando la mantenibilidad del código.",
    ],
  },
];
export const EXPERIENCE = EXPERIENCIA;

// ─────────────────────────────────────────────────────────────
// Proyectos
// ─────────────────────────────────────────────────────────────
export const PROYECTOS: Proyecto[] = [
  {
    title: "SkillTech – Plataforma web educativa",
    banner: skilltech,
    repo: "https://github.com/mariarosete/skillTech",
    description:
    "Desarrollo de backend en Spring Boot con base de datos MySQL, creando una API REST para la gestión de usuarios, cursos e inscripciones. Implementa autenticación con JWT, control de acceso por roles y persistencia de datos, siguiendo una arquitectura cliente-servidor.",
    tech: ["Spring Boot", "Java",  "MySQL", "JWT", "JS/HTML/CSS"],
    fit: "contain",
    position: "center",
    award: "Mención honorífica · TFG DAW",
    demo: skillTechVideo,
    demoType: "live",
    note: "🖥️ Optimizada para versión escritorio",
  },
  {
    title: "Asgard Gym – App móvil para gimnasios",
    banner: asgard,
    repo: "https://github.com/mariarosete/asgardGym",
    description:
      "Aplicación móvil Android desarrollada en Kotlin para la gestión de centros deportivos. Implementa sistema de reservas, gestión de usuarios y horarios, persistencia de datos con SQLite y diseño basado en Material Design.",
    tech: ["Kotlin", "SQLite", "Material Design"],
    fit: "contain",
    position: "center",
    award: "Mención honorífica · TFG DAM",
    demo: asgardGym,
    demoType: "video",
  },
  {
    title: "Servidor de Archivos – Cliente Android + Servidor TCP",
    banner: servidor,
    repo: "https://github.com/mariarosete/servidorArchivos",
    description:
      "Desarrollo de servidor backend en Java utilizando sockets TCP para la gestión de conexiones concurrentes y transferencia de archivos en red local. Implementa arquitectura cliente-servidor con cliente Android en Kotlin que consume el servicio.",
    tech: [ "Java", "Kotlin", "Sockets TCP"],
    fit: "contain",
    position: "center",
    demo: servidorVideo,
    demoType: "video",
  },
  {
    title: "Agenda de Contactos – Node.js + JavaScript",
    banner: agenda,
    repo: "https://github.com/mariarosete/agenda-contactos",
    description:
    "Desarrollo de backend en Node.js con base de datos MySQL, creando una API REST para la gestión de contactos con operaciones CRUD, búsqueda avanzada, paginación y sistema de favoritos. Incluye capa frontend para visualización y análisis de datos.",
    tech: ["Node.js", "MySQL","JavaScript", "HTML5", "CSS3"],
    fit: "contain",
    position: "center",
    demo: "https://agenda-contactos-smid.onrender.com/",
    demoType: "live",
    note: "🖥️ Optimizada para versión escritorio",
  },
  {
    title: "Pokedex – Aplicación web Angular",
    banner: pokedexBanner,
    repo: "https://github.com/mariarosete/pokedex",
    description:
    "Aplicación frontend en Angular orientada al consumo de APIs REST, con gestión de estado mediante NgRx y arquitectura reactiva con RxJS. Consume datos en tiempo real desde PokeAPI, simulando un flujo completo de integración con backend.",
    tech: ["Angular", "NgRx", "RxJS", "Angular Material", "TypeScript"],
    fit: "contain",
    position: "center",
    demo: "https://pokedex-maria.vercel.app/",
  },
  {
    title: "Pastelería Creativa – WPF (.NET)",
    banner: flowDocument,
    repo: "https://github.com/mariarosete/pasteleria",
    description:
      "Aplicación de escritorio en C# con WPF orientada a la gestión de datos mediante operaciones CRUD conectadas a base de datos. Incluye diseño de interfaz avanzada con FlowDocument y visualización de datos con DataGrid.",
    tech: [".NET", "C#", "WPF"],
    fit: "contain",
    position: "center",
    demo: flowDocumentVideo,
    demoType: "video",
  },
  {
    title: "Pastelería Creativa – Java Swing",
    banner: pasteleria,
    repo: "https://github.com/mariarosete/pasteleriaCreativa",
    description:
      "Aplicación de escritorio en Java Swing para la gestión de recetas, implementando lógica de negocio y almacenamiento de datos en archivos. Incluye personalización de interfaz y manejo de eventos.",
    tech: ["Java", "Swing"],
    fit: "contain",
    position: "center",
    demo: pasteleriaVideo,
    demoType: "video",
  },
  {
    title: "Portfolio – React + Vite",
    banner: portafolio,
    repo: "https://github.com/mariarosete/portafolio",
    description:
      "Portfolio personal desarrollado con React y Vite, con diseño responsive, animaciones y estructura modular orientada a la presentación de proyectos y experiencia.",
    tech: ["React", "TailwindCSS", "TypeScript"],
    fit: "contain",
    position: "center",
  },
  {
    title: "Disney Drag & Drop Game",
    banner: disney,
    repo: "https://github.com/mariarosete/disney-drag-drop",
    description:
      "Aplicación web interactiva desarrollada con JavaScript que implementa funcionalidades de Drag & Drop, validación visual y manipulación dinámica del DOM.",
      tech: ["JavaScript", "HTML","CSS"],
    fit: "cover",
    position: "center",
    demo: "https://disney-drag-drop.vercel.app/",
  },
  {
    title: "DigiDraw – Canvas App",
    banner: pizarra,
    repo: "https://github.com/mariarosete/digidraw-pizarra",
    description:
      "Aplicación web de dibujo desarrollada con Canvas API y JavaScript, que implementa funcionalidades de trazo libre, borrado, inserción de imágenes y texto mediante manipulación directa del lienzo.",
    tech: ["JavaScript", "HTML", "CSS"],
    fit: "cover",
    position: "center",
    demo: "https://digidraw-app.vercel.app/",
    demoType: "live",
  },
];

export const PROJECTS: Project[] = PROYECTOS;
