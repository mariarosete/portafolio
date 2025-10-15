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

/**
 * App (layout principal):
 * - Fondo con degradados
 * - Cabecera de navegación fija
 * - Secciones: Hero, Sobre mí, Educación, Certificados, Experiencia, Proyectos, Tech, Contacto
 * - Footer
 */
export default function App() {
  return (
    <div
      className="
        min-h-screen text-slate-900
        bg-[radial-gradient(60%_40%_at_50%_0%,rgba(255,182,193,0.25),transparent)]
        bg-gradient-to-b from-rose-50 via-rose-100/60 to-amber-50
      "
    >
      {/* Barra de navegación fija */}
      <Nav />

      {/* Contenido principal */}
      <main role="main">
        {/* Sección hero / portada */}
        <Hero />

        {/* Sección: Sobre mí */}
        <section
          id="sobre-mi"
          className="max-w-[1440px] mx-auto px-4 md:px-6 pt-10 pb-6"
        >
          {/* Título de sección  */}
          <SectionTitle id="sobre-mi">Sobre mí</SectionTitle>

          {/* Tarjeta con borde degradado + contenido */}
          <div className="rounded-2xl p-[2px] bg-gradient-to-r from-rose-300/60 via-rose-200/55 to-amber-200/60">
            <div className="rounded-2xl bg-white/90 backdrop-blur-[2px] ring-1 ring-white/70 p-6 md:p-7">
              {/* Chips de tecnologías clave */}
              <div className="mb-4 flex flex-wrap gap-2">
                {[
                  "ASP.NET Core/.NET",
                  "Node.js (Express)",
                  "React",
                  "Vite",
                  "Tailwind CSS",
                  "Swagger",
                  "Azure DevOps",
                  "Git",
                  "MySQL",
                  "MSTest",
                ].map((tecno) => (
                  <span
                    key={tecno}
                    className="inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-medium text-slate-700 bg-gradient-to-r from-rose-50 to-amber-50 ring-1 ring-rose-200/50 shadow-[inset_0_0_0_1px_rgba(244,63,94,.08)]"
                    title={tecno}
                  >
                    {tecno}
                  </span>
                ))}
              </div>

              {/* Texto de presentación */}
              <div className="space-y-3 text-slate-700 leading-relaxed">
                <p>
                  Soy María Rosete Suárez,{" "}
                  <strong>Desarrolladora Full Stack Junior</strong>.<br />
                  <strong>Backend:</strong> diseño <strong>APIs REST</strong> con{" "}
                  <strong>ASP.NET Core/.NET</strong> y{" "}
                  <strong>Node.js (Express)</strong>, documentadas con{" "}
                  <strong>Swagger</strong> y con enfoque a pruebas.<br />
                  <strong>Frontend:</strong> interfaces accesibles y responsive con{" "}
                  <strong>React + Vite + Tailwind</strong>; también he trabajado con{" "}
                  <strong>Angular</strong> y <strong>Vue.js</strong>.
                </p>

                <p>
                  He participado en proyectos reales (Clarcat: ASP.NET Core + React + MySQL;
                  Ticmedia: Node.js + Vue.js + MongoDB) colaborando en equipos ágiles con{" "}
                  <strong>Git</strong> y <strong>Azure DevOps</strong>. En proyectos académicos
                  como <strong>SkillTech</strong> (plataforma con{" "}
                  <strong>Spring Boot</strong> + MySQL) y <strong>Asgard Gym</strong> (app{" "}
                  <strong>Android/Kotlin</strong>) apliqué buenas prácticas y enfoque a producto.
                </p>

                <p>
                  <strong>Me considero organizada y resolutiva.</strong> Busco un equipo donde
                  aportar desde el primer día, seguir aprendiendo y construir software con impacto real.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Secciones con sus propios componentes */}
        <Education />
        <Certificates />
        <Experience />
        <Projects />
        <Tech />
        <Contact />
      </main>

      {/* Pie de página */}
      <Footer />
    </div>
  );
}
