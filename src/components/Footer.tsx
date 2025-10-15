import React from "react";
import { ChevronRight } from "lucide-react";
import { PROFILE } from "../data/profile";

const Footer: React.FC = () => (
  <footer className="border-t bg-white">
    <div className="max-w-6xl mx-auto px-4 py-8 text-sm flex flex-col md:flex-row items-center gap-2 justify-between">
      <p>© {new Date().getFullYear()} Desarrollado con ❤️ por {PROFILE.name}. Hecho con React + Vite + Tailwind.</p>
      <a href="#inicio" className="inline-flex items-center gap-1 hover:underline">
        Volver arriba <ChevronRight className="w-4 h-4" />
      </a>
    </div>
  </footer>
);

export default Footer;
