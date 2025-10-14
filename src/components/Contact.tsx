import React from "react";
import SectionTitle from "./ui/SectionTitle";
import ContactForm from "./ContactForm"; 
import { Github, Linkedin, Mail } from "lucide-react";
import { PROFILE } from "../data/profile";

const Contact: React.FC = () => (
  <section id="contacto" className="max-w-[1440px] mx-auto px-4 md:px-6 pt-10 pb-6">
    <SectionTitle id="contacto">Contacto</SectionTitle>

    <div className="group rounded-3xl p-[2px] bg-gradient-to-r from-rose-300/50 via-rose-200/45 to-amber-200/55 shadow-[0_20px_60px_-20px_rgba(244,63,94,.25)]">
      <div className="rounded-3xl bg-white/90 backdrop-blur-[2px] ring-1 ring-white/70 p-5 md:p-6">
        <div className="ml-auto flex items-center justify-end gap-3">
          {[
            { Icon: Github, href: PROFILE.socials.github, label: "GitHub" },
            { Icon: Linkedin, href: PROFILE.socials.linkedin, label: "LinkedIn" },
            { Icon: Mail, href: PROFILE.socials.email, label: "Email" },
          ].map(({ Icon, href, label }) => (
            <a key={label} aria-label={label} title={label} href={href} target={label === "Email" ? undefined : "_blank"} rel={label === "Email" ? undefined : "noreferrer"}
               className="relative inline-flex items-center justify-center h-11 w-11 rounded-xl text-white bg-amber-400 shadow-[0_10px_25px_-10px_rgba(245,158,11,.55)] ring-1 ring-amber-300/50 transition-all duration-200 hover:bg-[length:100%_100%] hover:bg-gradient-to-r hover:from-rose-500 hover:to-amber-400 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-300">
              <span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-200 group-hover:opacity-100 bg-gradient-to-r from-rose-400/20 to-amber-400/20" />
              <Icon className="w-5 h-5 relative z-[1]" />
            </a>
          ))}
        </div>
      </div>
    </div>

    <div className="mt-6">
      <ContactForm />
    </div>
  </section>
);

export default Contact;
