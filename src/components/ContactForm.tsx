import React from "react";
import { Loader2, Send, CheckCircle2 } from "lucide-react";
import { FORM_ENDPOINT } from "../config/forms";

type Status = "idle" | "sending" | "sent";

export default function ContactForm() {
  const [status, setStatus] = React.useState<Status>("idle");

  React.useEffect(() => {
    if (status === "sent") {
      const timer = setTimeout(() => {
        setStatus("idle");
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [status]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (status === "sending" || status === "sent") return;

    const form = e.currentTarget;
    setStatus("sending");

    try {
      const data = new FormData(form);

      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: data,
      });

      if (!response.ok) {
        throw new Error("No se pudo enviar el formulario");
      }

      form.reset();
      setStatus("sent");
    } catch (error) {
      console.error(error);
      setStatus("idle");
      alert("No se pudo enviar el mensaje. Inténtalo de nuevo.");
    }
  }

  const isSending = status === "sending";
  const isSent = status === "sent";

  return (
    <form onSubmit={onSubmit} aria-busy={isSending} className="space-y-5">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="block text-[11px] uppercase tracking-[0.24em] text-white/40">
            Nombre *
          </label>
          <input
            name="name"
            type="text"
            required
            placeholder="Tu nombre"
            className="
              mt-2 w-full rounded-2xl
              border border-white/10 bg-white/5
              px-4 py-3 text-white
              placeholder:text-white/25
              backdrop-blur-xl
              transition-all duration-300
              focus:outline-none focus:ring-2 focus:ring-rose-400/40 focus:border-rose-400/30
            "
          />
        </div>

        <div>
          <label className="block text-[11px] uppercase tracking-[0.24em] text-white/40">
            Email *
          </label>
          <input
            name="email"
            type="email"
            required
            placeholder="tu@email.com"
            className="
              mt-2 w-full rounded-2xl
              border border-white/10 bg-white/5
              px-4 py-3 text-white
              placeholder:text-white/25
              backdrop-blur-xl
              transition-all duration-300
              focus:outline-none focus:ring-2 focus:ring-rose-400/40 focus:border-rose-400/30
            "
          />
        </div>
      </div>

      <div>
        <label className="block text-[11px] uppercase tracking-[0.24em] text-white/40">
          Mensaje *
        </label>
        <textarea
          name="message"
          required
          rows={6}
          placeholder="Cuéntame brevemente en qué puedo ayudarte"
          className="
            mt-2 w-full rounded-2xl
            border border-white/10 bg-white/5
            px-4 py-3 text-white
            placeholder:text-white/25
            backdrop-blur-xl
            transition-all duration-300
            focus:outline-none focus:ring-2 focus:ring-rose-400/40 focus:border-rose-400/30
            resize-none
          "
        />
      </div>

      <input type="text" name="_gotcha" className="hidden" aria-hidden="true" />

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-white/38">* Campos obligatorios.</p>

        <button
          type="submit"
          disabled={isSending || isSent}
          className="
            inline-flex items-center justify-center gap-2
            rounded-2xl px-5 py-3
            text-sm font-semibold text-white
            bg-gradient-to-r from-rose-500 to-fuchsia-600
            shadow-[0_15px_40px_-12px_rgba(244,63,94,.45)]
            transition-all duration-300
            hover:brightness-110
            disabled:opacity-60 disabled:cursor-not-allowed
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400/40
          "
        >
          {isSending ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Enviando...
            </>
          ) : isSent ? (
            <>
              <CheckCircle2 className="w-4 h-4" />
              Enviado
            </>
          ) : (
            <>
              Enviar mensaje
              <Send className="w-4 h-4" />
            </>
          )}
        </button>
      </div>

      {isSent && (
        <p className="text-sm text-emerald-400">
          Mensaje enviado correctamente.
        </p>
      )}
    </form>
  );
}