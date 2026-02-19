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

import skillTechVideo from "../assets/skillTech.mp4";
import pokedexVideo from "../assets/Pokedex.mp4";
import agendaVideo from "../assets/agenda.mp4";
import pasteleriaVideo from "../assets/pasteleria.mp4";
import asgardGym from "../assets/AsgardGym.mp4";
import servidorVideo from "../assets/Servidor.mp4";
import portafolioVideo from "../assets/portafolio.mp4";
import flowDocumentVideo from "../assets/flowDocument.mp4";
import pizarraVideo from "../assets/pizarra.mp4";
import disneyVideo from "../assets/disney.mp4";
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
  },
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
  name: "María Rosete Suárez",
  role: "Desarrolladora Full Stack Junior especializada en .NET y React",
  about:
    "Desarrollo aplicaciones web escalables y seguras. Tengo experiencia adicional con Node.js, Spring Boot y frameworks frontend como Angular y Vue.js, trabajando con buenas prácticas, testing y control de versiones.",
  banner:
    "https://github.com/mariarosete/mariarosete/blob/main/Portada.png?raw=true",
  photo: "/maria.jpg",
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
export const CERTIFICADOS = [
  {
    title: "Foundational C# with Microsoft",
    org: "freeCodeCamp",
    date: "dic. 2025",
    link: "https://freecodecamp.org/certification/fcc-8f71be83-65d7-40d2-95e3-e4bca09cd50a/foundational-c-sharp-with-microsoft",
    logo: LOGO_CERT.freecodecamp,
  },
  {
    title: "Curso de Angular: Ampliando Conceptos",
    org: "OpenWebinars",
    date: "Jul. 2025",
    link: "https://openwebinars.net/cert/62se",
    logo: LOGO_CERT.openwebinars,
  },
  {
    title: ".NET Framework",
    org: "OpenWebinars",
    date: "Jul. 2025",
    link: "https://openwebinars.net/cert/lWvO",
    logo: LOGO_CERT.openwebinars,
  },
  {
    title: "Fundamentos de React",
    org: "OpenWebinars",
    date: "Jul. 2025",
    link: "https://openwebinars.net/cert/q9Yr",
    logo: LOGO_CERT.openwebinars,
  },
  {
    title: "MongoDB: Creación y gestión de bases de datos NoSQL",
    org: "OpenWebinars",
    date: "Mar. 2025",
    link: "https://openwebinars.net/certificacion/0QCj1YwR",
    logo: LOGO_CERT.openwebinars,
  },
  {
    title: "Learning the Basics of ABAP Programming on SAP BTP",
    org: "SAP",
    date: "Ene. 2025",
    link: "https://www.credly.com/badges/0d749aff-8745-4737-abb0-90058a1ca0bb",
    logo: LOGO_CERT.sap,
  },
  {
    title: "Perfil Trailhead de Salesforce – Insignias y Rutas",
    org: "Salesforce",
    date: "Ene. 2025",
    link: "https://www.salesforce.com/trailblazer/dvpl9jhprurtdm3g7i",
    logo: LOGO_CERT.salesforce,
  },
  {
    title: "Servidor Web Apache 2.4",
    org: "OpenWebinars",
    date: "Nov. 2023",
    link: "https://openwebinars.net/cert/PuCz",
    logo: LOGO_CERT.openwebinars,
  },
  {
    title:
      "Certificado profesional en Soporte de Tecnologías de la Información de Google",
    org: "Coursera",
    date: "Ago. 2022",
    link: "https://www.coursera.org/account/accomplishments/professional-cert/WU7LEUWZ8FLE",
    logo: LOGO_CERT.coursera,
  },
  {
    title: 'Certificado de profesionalidad nivel 3 “Seguridad Informática”',
    org: "ASATA",
    date: "Dic. 2018",
    credId: "03/18/00004962/IFCT0109",
    logo: LOGO_CERT.asata,
  },
  {
    title: "Acreditación de competencias digitales europeas ECDL",
    org: "ECDL Spain",
    date: "Dic. 2017",
    credId: "ES004660",
    logo: LOGO_CERT.ecdl,
  },
  {
    title: "Curso de Seguridad Informática en la Gestión Empresarial",
    org: "Dicampus",
    date: "2017",
    credId: "PLF 2017/165",
    logo: LOGO_CERT.dicampus,
  },
];
export const CERTS = CERTIFICADOS;

// ─────────────────────────────────────────────────────────────
// Experiencia profesional
// ─────────────────────────────────────────────────────────────
export const EXPERIENCIA = [
  {
    company: "Clarcat Cantábrico S.L. Gijón",
    role: "Full Stack ASP.NET Core (.NET 9) + React (Vite + Tailwind CSS)",
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
      "Backend: Desarrollé y optimicé una API REST en .NET 9 / ASP.NET Core, asegurando escalabilidad y mantenibilidad del sistema.",
      "Frontend: Implementé interfaces modernas y responsive con React, Vite y Tailwind CSS, mejorando la usabilidad y la experiencia de usuario.",
      "Persistencia: Consolidé las migraciones de Entity Framework en una única versión para MySQL, facilitando el mantenimiento y mejorando la estabilidad de la base de datos.",
      "Calidad: Aumenté la calidad del software mediante pruebas unitarias con MSTest, reduciendo errores en producción.",
      "Colaboración: Gestioné repositorios con Git y Azure DevOps, creando PRs para revisión y validación que facilitaron integraciones más ágiles y seguras.",
    ],
  },
  {
    company: "Ticmedia Soluciones Profesionales, S.L. Gijón",
    role: "Full Stack Node.js + Vue.js",
    period: "mar. 2024 – jun. 2024",
    techs: ["Node.js", "Express", "JWT", "Vue.js", "Quasar", "MongoDB", "Mongoose", "GitHub"],
    points: [
      "Backend: Desarrollé un backend con Node.js + Express.js, implementando API REST con autenticación JWT para un sistema de gestión interna.",
      "Frontend: Construí una interfaz dinámica y modular con Vue.js + Quasar Framework, optimizando la experiencia del usuario y mejorando la mantenibilidad del código.",
      "Persistencia: Gestioné datos con MongoDB/Mongoose, reforzando la seguridad y la consistencia del sistema.",
      "Funcionalidades implementadas: Implementé funcionalidades clave: visor de facturas en PDF, listado de noticias con paginación y gestión interna de usuarios y clientes.",
      "Colaboración: Mejoré la colaboración y control de versiones mediante GitHub y buenas prácticas ágiles, fomentando un desarrollo más ordenado y eficiente.",
    ],
  },
];
export const EXPERIENCE = EXPERIENCIA;

// ─────────────────────────────────────────────────────────────
// Proyectos
// ─────────────────────────────────────────────────────────────
export const PROYECTOS: Proyecto[] = [
  {
    title: "Asgard Gym – App móvil para gimnasios",
    banner: asgard,
    repo: "https://github.com/mariarosete/asgardGym",
    description:
      "Asgard Gym es una aplicación Android desarrollada para mejorar la experiencia de gestión en centros deportivos. Permite a los usuarios consultar y reservar actividades fácilmente, mientras el personal puede gestionar usuarios y actividades de forma eficiente.",
    tech: ["Kotlin", "SQLite", "Material Design"],
    fit: "contain",
    position: "center",
    award: "Mención honorífica · TFG DAM",
    demo: asgardGym,
  },
  {
    title: "SkillTech – Plataforma web educativa",
    banner: skilltech,
    repo: "https://github.com/mariarosete/skillTech",
    description:
      "SkillTech es una plataforma web desarrollada para la gestión de cursos y recursos educativos, dirigida a estudiantes y profesionales de informática. Brinda una experiencia de aprendizaje personalizada y acceso centralizado a materiales educativos.",
    tech: ["Java", "Spring Boot", "MySQL", "JWT", "JS/HTML/CSS"],
    fit: "contain",
    position: "center",
    award: "Mención honorífica · TFG DAW",
    demo: skillTechVideo,
  },
  {
    title: "Pokedex – Aplicación web Angular",
    banner: pokedexBanner,
    repo: "https://github.com/mariarosete/pokedex",
    description:
      "Aplicación desarrollada durante una formación especializada en Angular, enfocada en el consumo de APIs y la gestión de estado con NgRx. Los datos se obtienen en tiempo real desde la API pública PokeAPI.",
    tech: ["Angular", "NgRx", "RxJS", "Angular Material", "TypeScript"],
    fit: "contain",
    position: "center",
    demo: pokedexVideo,
  },
  {
    title: "Servidor de Archivos – Cliente Android + Servidor TCP",
    banner: servidor,
    repo: "https://github.com/mariarosete/servidorArchivos",
    description:
      "Aplicación de gestión de archivos en red local desarrollada con una interfaz Android moderna en Kotlin y un servidor TCP en Java. Permite subir, descargar y visualizar archivos desde un dispositivo móvil conectado a la misma red.",
    tech: ["Kotlin", "Java", "Sockets TCP"],
    fit: "contain",
    position: "center",
    demo: servidorVideo,
  },
  {
    title: "Portafolio – React + Vite + TailwindCSS",
    banner: portafolio,
    repo: "https://github.com/mariarosete/portafolio",
    description:
      "Portafolio personal con React + Vite y TailwindCSS. Diseño moderno, animaciones con Framer Motion, responsive completo y sección de contacto funcional con validación.",
    tech: ["React", "Vite", "TailwindCSS", "TypeScript", "Framer Motion"],
    fit: "contain",
    position: "center",
    demo: portafolioVideo,
  },
  {
    title: "Agenda de Contactos – Node.js + JavaScript + HTML + CSS",
    banner: agenda,
    repo: "https://github.com/mariarosete/agenda-contactos",
    description:
      "Agenda web de contactos con Node.js (backend) y JavaScript (frontend). Incluye CRUD con modales, ordenación, búsqueda, favoritos, paginación en cliente y gráficos con Chart.js. Proyecto 100% sin frameworks CSS, accesible y con .env de ejemplo.",
    tech: ["Node.js", "JavaScript", "HTML5", "CSS3", "Chart.js"],
    fit: "contain",
    position: "center",
    demo: agendaVideo,
  },
  {
    title: "Pastelería Creativa – Aplicación de escritorio en Java Swing",
    banner: pasteleria,
    repo: "https://github.com/mariarosete/pasteleriaCreativa",
    description:
      "Aplicación de escritorio desarrollada en Java Swing para crear y gestionar recetas de repostería. Permite definir postres, añadir ingredientes, guardar y cargar recetas desde archivos de texto, personalizar colores y acceder a una ayuda integrada con JavaHelp.",
    tech: ["Java", "Swing", "JavaHelp"],
    fit: "contain",
    position: "center",
    demo: pasteleriaVideo,
  },
  {
    title: "Pastelería Creativa – FlowDocument + DataGrid (WPF)",
    banner: flowDocument,
    repo: "https://github.com/mariarosete/pasteleria",
    description:
      "Proyecto en WPF (C#) orientado al mundo de la pastelería creativa. Incluye un FlowDocument interactivo con secciones formateadas e imágenes, y un módulo de acceso a datos con DataGrid y operaciones CRUD conectado a una base de datos Microsoft Access (recetas.accdb).",
    tech: ["C#", "WPF", ".NET", "XAML", "FlowDocument", "DataGrid", "Microsoft Access"],
    fit: "contain",
    position: "center",
    demo: flowDocumentVideo,
  },
  {
    title: "¿Quién es este personaje de Disney? – Drag & Drop Game",
    banner: disney,
    repo: "https://github.com/mariarosete/disney-drag-drop",
    description:
      "Proyecto frontend desarrollado con HTML, CSS y JavaScript (Vanilla). Consiste en un juego interactivo de Drag & Drop donde el usuario debe asociar correctamente personajes de Disney con sus nombres, con validación visual inmediata, lógica de juego, carga dinámica de datos desde JSON y una sección informativa con fichas animadas de personajes.",
    tech: ["HTML", "CSS", "JavaScript", "Drag & Drop API", "JSON"],
    fit: "cover",
    position: "center",
    demo: disneyVideo,
  },
  {
    title: "DigiDraw – Pizarra interactiva (Canvas)",
    banner: pizarra,
    repo: "https://github.com/mariarosete/digidraw-pizarra",
    description:
      "Proyecto frontend desarrollado con HTML, CSS y JavaScript (Vanilla) que simula una pizarra digital en canvas. Permite dibujar a mano alzada, cambiar color y grosor del rotulador, usar goma de borrar, limpiar el lienzo, insertar imágenes desde el equipo y añadir texto directamente sobre la pizarra.",
    tech: ["HTML", "CSS", "JavaScript", "Canvas API", "FileReader"],
    fit: "cover",
    position: "center",
    demo: pizarraVideo,
  },
];

export const PROJECTS: Project[] = PROYECTOS;
