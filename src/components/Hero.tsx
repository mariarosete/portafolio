import React from "react";
import { PROFILE } from "../data/profile";
import { ArrowUpRight, FileDown } from "lucide-react";

const Hero: React.FC = () => (
  <section id="inicio" className="max-w-[1440px] mx-auto px-3 sm:px-4 md:px-6 pt-14 pb-8">
    <div className="rounded-3xl overflow-hidden border bg-white">
      {/* Banner */}
      <div className="relative w-full aspect-[16/9] md:aspect-[21/6]">
        <img
          src={PROFILE.banner}
          alt="Banner principal"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "50% 40%" }}
          loading="eager"
          decoding="async"
        />
      </div>

      {/* Card */}
      <div className="p-4 sm:p-6 md:p-8">
        <div className="relative rounded-[22px] p-[2px] bg-gradient-to-br from-rose-300/60 via-rose-200/55 to-amber-200/60 shadow-[0_20px_60px_-20px_rgba(244,63,94,.25)]">
          <div className="rounded-[20px] bg-white/90 backdrop-blur-[2px] ring-1 ring-white/70 px-4 py-5 sm:px-6 sm:py-6 md:px-8 md:py-7">
              <div className="grid gap-5 md:grid-cols-[1fr_auto] md:gap-6 items-start">
              
              {/* FOTO */}
              <div className="order-1 md:order-2 justify-self-center md:justify-self-end">
                <div className="relative inline-block">
                  <div className="absolute -inset-3 rounded-[26px] bg-gradient-to-br from-rose-400/30 via-rose-300/20 to-amber-300/30 blur-xl" />
                  <div className="relative p-1 rounded-[22px] bg-gradient-to-br from-rose-200 via-rose-300 to-amber-200 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.45)]">
                    <img
                      src={PROFILE.photo}
                      alt={`Foto de ${PROFILE.name}`}
                      loading="lazy"
                      decoding="async"
                      className="block w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 object-cover rounded-[18px] ring-1 ring-black/10 bg-white"
                    />
                  </div>
                </div>
              </div>

              {/* TEXTO */}
              <div className="order-2 md:order-1">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
                  {PROFILE.name}
                </h1>
                <h2 className="text-base sm:text-lg md:text-xl text-slate-700 mt-1">
                  {PROFILE.role}
                </h2>
                <p className="mt-4 text-slate-600 text-[15px] sm:text-base leading-7 max-w-prose">
                  {PROFILE.about}
                </p>

               
                <div className="mt-6 flex flex-col sm:flex-row sm:flex-wrap gap-3">
                  <a
                    href="#proyectos"
                    className="inline-flex h-10 items-center justify-center gap-2 rounded-2xl px-5 font-medium text-white
                               bg-gradient-to-r from-rose-500 to-amber-400 hover:brightness-110
                               focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-300
                               w-full sm:w-auto"
                  >
                    Ver proyectos <ArrowUpRight className="w-4 h-4" />
                  </a>

                  <a
                    href={PROFILE.cv}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-10 items-center justify-center gap-2 rounded-2xl px-5 font-medium text-white
                               bg-amber-400 hover:bg-gradient-to-r hover:from-rose-500 hover:to-amber-400
                               shadow-[0_10px_25px_-10px_rgba(245,158,11,.55)]
                               focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-300
                               w-full sm:w-auto"
                  >
                    Descargar CV <FileDown className="w-4 h-4" />
                  </a>
                </div>
              </div>
              {/* /texto */}
            </div>
            {/* /grid */}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
