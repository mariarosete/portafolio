import pokedexBanner from "../assets/Pokedex.jpg";
import servidor from "../assets/Servidor Archivos.jpg";
import asgard from "../assets/ASGARD GYM.jpg";
import skilltech from "../assets/SkillTech.jpg";

export type FitMode = "cover" | "contain";
export type Project = {
  title: string;
  banner: string;
  repo: string;
  description: string;
  tech: string[];
  fit?: FitMode;
  position?: string;
  award?: string;
};

export const PROFILE = {
  name: "María Rosete Suárez",
  role: "Desarrolladora Full Stack Junior",
  about:
    "Desarrolladora Full Stack Junior con base en ASI y especialización en Aplicaciones Web y Multiplataforma. He trabajado en proyectos reales con ASP.NET Core + React (Clarcat) y con Node.js + Vue.js (Ticmedia), creando APIs REST documentadas con Swagger y UIs accesibles con React, Vite y Tailwind. Me mueven la calidad del código, el aprendizaje continuo y aportar valor desde el primer día en equipos ágiles.",
  banner: "https://github.com/mariarosete/mariarosete/blob/main/Banner.jpg?raw=true",
  photo: "/maria.jpg",
  socials: {
    email: "mailto:marlarosete89@gmail.com",
    linkedin: "https://linkedin.com/in/mariarosetesuarez",
    github: "https://github.com/mariarosete",
  },
  cv: "https://github.com/mariarosete/mariarosete/raw/main/assets/cv/CV_MRS.pdf",
};

const CERT_LOGO_BASE =
  "https://github.com/mariarosete/mariarosete/blob/main/assets/certifications/";
const certLogo = (file: string) => `${CERT_LOGO_BASE}${file}?raw=true`;

export const CERT_LOGO = {
  openwebinars: certLogo("openwebinars.png"),
  sap: certLogo("sap.png"),
  coursera: certLogo("coursera.png"),
  ecdl: certLogo("ecdl.png"),
  asata: certLogo("asata.png"),
  dicampus: certLogo("dicampus.png"),
  salesforce: certLogo("salesforce.png"),
};

export const EDUCATION = [
  { title: "CFGS Desarrollo de Aplicaciones Multiplataforma", center: "IES Número 1 Gijón", period: "sept. 2024 – jun. 2025" },
  { title: "CFGS Desarrollo de Aplicaciones Web", center: "CIFP La Laboral", period: "sept. 2022 – jun. 2024" },
  { title: "CFGS Administración de Sistemas Informáticos", center: "IES Número 1 Gijón", period: "sept. 2009 – jun. 2011" },
];

export const CERTS = [
  { title: "Curso de Angular: Ampliando Conceptos", org: "OpenWebinars", date: "Jul. 2025", link: "https://openwebinars.net/cert/62se", logo: CERT_LOGO.openwebinars },
  { title: ".NET Framework", org: "OpenWebinars", date: "Jul. 2025", link: "https://openwebinars.net/cert/lWvO", logo: CERT_LOGO.openwebinars },
  { title: "Fundamentos de React", org: "OpenWebinars", date: "Jul. 2025", link: "https://openwebinars.net/cert/q9Yr", logo: CERT_LOGO.openwebinars },
  { title: "MongoDB: Creación y gestión de bases de datos NoSQL", org: "OpenWebinars", date: "Mar. 2025", link: "https://openwebinars.net/certificacion/0QCj1YwR", logo: CERT_LOGO.openwebinars },
  { title: "Learning the Basics of ABAP Programming on SAP BTP", org: "SAP", date: "Ene. 2025", link: "https://www.credly.com/badges/0d749aff-8745-4737-abb0-90058a1ca0bb", logo: CERT_LOGO.sap },
  { title: "Perfil Trailhead de Salesforce – Insignias y Rutas", org: "Salesforce", date: "Ene. 2025", link: "https://www.salesforce.com/trailblazer/dvpl9jhprurtdm3g7i", logo: CERT_LOGO.salesforce },
  { title: "Servidor Web Apache 2.4", org: "OpenWebinars", date: "Nov. 2023", link: "https://openwebinars.net/cert/PuCz", logo: CERT_LOGO.openwebinars },
  { title: "Certificado profesional en Soporte de Tecnologías de la Información de Google", org: "Coursera", date: "Ago. 2022", link: "https://www.coursera.org/account/accomplishments/professional-cert/WU7LEUWZ8FLE", logo: CERT_LOGO.coursera },
  { title: 'Certificado de profesionalidad nivel 3 “Seguridad Informática”', org: 'ASATA', date: 'Dic. 2018', credId: '03/18/00004962/IFCT0109', logo: CERT_LOGO.asata },
  { title: 'Acreditación de competencias digitales europeas ECDL', org: 'ECDL Spain', date: 'Dic. 2017', credId: 'ES004660', logo: CERT_LOGO.ecdl },
  { title: 'Curso de Seguridad Informática en la Gestión Empresarial', org: 'Dicampus', date: '2017', credId: 'PLF 2017/165', logo: CERT_LOGO.dicampus },
];

export const EXPERIENCE = [
  {
    company: "Clarcat",
    role: "Full Stack ASP.NET Core (.NET 9) + React (Vite + Tailwind CSS)",
    period: "mar. 2025 – jun. 2025",
    techs: [".NET 9","ASP.NET Core","Entity Framework","MySQL","React","Vite","Tailwind CSS","MSTest","Azure DevOps","Git"],
    points: [
      "Backend: Desarrollé y optimicé una API REST en .NET 9 / ASP.NET Core, asegurando escalabilidad y mantenibilidad del sistema.",
      "Frontend: Implementé interfaces modernas y responsive con React, Vite y Tailwind CSS, mejorando la usabilidad y la experiencia de usuario.",
      "Persistencia: Consolidé las migraciones de Entity Framework en una única versión para MySQL, facilitando el mantenimiento y mejorando la estabilidad de la base de datos.",
      "Calidad: Aumenté la calidad del software mediante pruebas unitarias con MSTest, reduciendo errores en producción.",
      "Colaboración: Gestioné repositorios con Git y Azure DevOps, creando PRs para revisión y validación que facilitaron integraciones más ágiles y seguras.",
    ],
  },
  {
    company: "Ticmedia",
    role: "Node.js + Vue.js",
    period: "abr. 2024 – jun. 2024",
    techs: ["Node.js","Express","JWT","Vue.js","Quasar","MongoDB","Mongoose","GitHub"],
    points: [
      "Backend: Desarrollé un backend con Node.js + Express.js, implementando API REST con autenticación JWT para un sistema de gestión interna.",
      "Frontend: Construí una interfaz dinámica y modular con Vue.js + Quasar Framework, optimizando la experiencia del usuario y mejorando la mantenibilidad del código.",
      "Persistencia: Gestioné datos con MongoDB/Mongoose, reforzando la seguridad y la consistencia del sistema.",
      "Funcionalidades implementadas: Implementé funcionalidades clave: visor de facturas en PDF, listado de noticias con paginación y gestión interna de usuarios y clientes.",
      "Colaboración: Mejoré la colaboración y control de versiones mediante GitHub y buenas prácticas ágiles, fomentando un desarrollo más ordenado y eficiente.",
    ],
  },
];

export const PROJECTS: Project[] = [
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
  },
];
