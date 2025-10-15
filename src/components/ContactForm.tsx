import React from "react";
import { Loader2, Send, CheckCircle2 } from "lucide-react";
import { FORM_ENDPOINT } from "../config/forms"; 

// Estados de envío:
/********************************************************************************************************** */
//"idle" : estado inicial, el usuario todavía no ha enviado nada.
//"sending" : el formulario se está enviando (mostramos “Enviando…” y deshabilitamos el botón).
//"sent" : el formulario ya fue enviado correctamente (mostramos “Enviado” y el botón queda deshabilitado).
type Status = "idle" | "sending" | "sent";

export default function ContactForm() {
  const [status, setStatus] = React.useState<Status>("idle");

  // Manejador de envío del formulario
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Evita envíos repetidos mientras está enviando o ya enviado
    if (status === "sending" || status === "sent") return;

    setStatus("sending");

    try {
      const data = new FormData(e.currentTarget);

      await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      // Limpia los campos 
      e.currentTarget.reset();
    } finally {
       setStatus("sent");
    }
  }

  const isSending = status === "sending";
  const isSent = status === "sent";

  return (
    <div className="rounded-3xl p-[2px] bg-gradient-to-r from-rose-300/60 via-rose-200/55 to-amber-200/60">
      <form
        onSubmit={onSubmit}
        aria-busy={isSending}
        className="rounded-3xl bg-white/90 backdrop-blur-[2px] ring-1 ring-white/70 p-5 md:p-6 space-y-4"
      >
        {/* Fila: nombre y email */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700">Nombre</label>
            <input
              name="name"
              type="text"
              className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2
                         text-slate-900 placeholder:text-slate-400
                         focus:outline-none focus:ring-2 focus:ring-rose-300"
              placeholder="Tu nombre"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">Email *</label>
            <input
              name="email"
              type="email"
              required
              className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2
                         text-slate-900 placeholder:text-slate-400
                         focus:outline-none focus:ring-2 focus:ring-rose-300"
              placeholder="tu.email@ejemplo.com"
            />
          </div>
        </div>

        {/* Mensaje */}
        <div>
          <label className="block text-sm font-medium text-slate-700">Mensaje *</label>
          <textarea
            name="message"
            required
            rows={5}
            className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2
                       text-slate-900 placeholder:text-slate-400
                       focus:outline-none focus:ring-2 focus:ring-rose-300"
            placeholder="Cuéntame brevemente en qué puedo ayudarte"
          />
        </div>

        {/* Honeypot anti-bots (Getform lo ignora si está vacío) */}
        <input type="text" name="_gotcha" className="hidden" aria-hidden="true" />

        {/* Pie: aviso y botón de enviar */}
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs text-slate-500">* Campos obligatorios.</p>

          <button
            type="submit"
            disabled={isSending || isSent} // Deshabilita mientras envía y después
            className={[
              "rounded-2xl px-4 inline-flex items-center gap-2 text-white",
              "bg-gradient-to-r from-rose-500 to-amber-400",
              "hover:brightness-110 disabled:opacity-60",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-300",
            ].join(" ")}
          >
            {isSending ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Enviando…
              </>
            ) : isSent ? (
              <>
                <CheckCircle2 className="w-4 h-4" />
                Enviado
              </>
            ) : (
              <>
                Enviar
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
