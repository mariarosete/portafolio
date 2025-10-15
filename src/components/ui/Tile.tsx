import React from "react";

/**
 * Tarjeta (tile) para mostrar una tecnología/herramienta:
 * - Un icono dentro de un contenedor con borde/anillo y fondo.
 * - Una etiqueta debajo.
 *
 * Props públicas:
 * - Icon: componente React del icono.
 * - label: texto de la etiqueta.
 * - ring: clase tailwind para el anillo/borde.
 * - bg: clases tailwind para fondo y color del icono).
 */
type Props = {
  Icon: React.ComponentType<{ className?: string }>;
  label: string;
  ring?: string;
  bg?: string;
};

const Tile: React.FC<Props> = ({
 
  Icon: Icono,
  label: etiqueta,
  ring: anillo = "ring-slate-200",
  bg: fondo = "bg-white",
}) => (
  <div className="group flex flex-col items-center gap-2">
    
    {/* Contenedor del icono con anillo y fondo configurables */}
    <div
      className={[
        "rounded-2xl p-4 ring-1 shadow-sm transition",
        "hover:-translate-y-0.5 hover:shadow-md",
        anillo,
        fondo,
      ].join(" ")}
    >
      <Icono className="w-10 h-10" />
    </div>

    {/* Etiqueta del tile */}
    <span className="text-sm text-slate-700">{etiqueta}</span>
  </div>
);

export default Tile;
